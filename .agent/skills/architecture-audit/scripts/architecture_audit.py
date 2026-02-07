import os
import ast
import re
from typing import List, Dict

# [Constraint] This skill is invoked automatically before the Agent submits a Pull Request.

VIOLATION_PATTERNS = {
    "hardcoded_secret": r"(?i)(api_key|secret|password)\s*=\s*['\"][^'\"]+['\"]",
    "todo_leftover": r"(?i)#\s*TODO",
    "print_debug": r"print\(",
}

# Files to exclude from audit
EXCLUDED_FILES = {
    "architecture_audit.py",
    "next.config.js",
    "next.config.ts"
}

def scan_file(filepath: str) -> List[str]:
    """Scans a single file for architecture violations using regex and AST."""
    violations = []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')
            
            # 1. Regex Scan
            for name, pattern in VIOLATION_PATTERNS.items():
                for i, line in enumerate(lines):
                    if re.search(pattern, line):
                        # Allow window.print() in frontend code
                        if name == "print_debug" and "window.print()" in line:
                            continue
                        violations.append(f"[{name.upper()}] Line {i+1}: {line.strip()}")

            # 2. AST Parsing (Python only)
            if filepath.endswith('.py'):
                try:
                    tree = ast.parse(content)
                    for node in ast.walk(tree):
                        if isinstance(node, ast.FunctionDef):
                            if not ast.get_docstring(node):
                                violations.append(f"[MISSING_DOCSTRING] Function '{node.name}' at Line {node.lineno}")
                except SyntaxError:
                    violations.append(f"[SYNTAX_ERROR] Could not parse AST for {filepath}")
    except Exception as e:
        violations.append(f"[FILE_ERROR] Could not read {filepath}: {str(e)}")
                
    return violations

def main():
    """Main entry point for the architecture audit."""
    report = {}
    print("Starting Architecture Audit...")
    
    # Use the current working directory as root
    base_dir =os.getcwd()
    
    for root, _, files in os.walk(base_dir):
        # Exclude directories that are not relevant for audit
        if any(ignored in root for ignored in ["venv", ".git", ".next", "node_modules"]):
            continue
            
        for file in files:
            if file in EXCLUDED_FILES:
                continue

            if file.endswith((".py", ".js", ".ts", ".tsx")):
                path = os.path.join(root, file)
                rel_path = os.path.relpath(path, base_dir)
                issues = scan_file(path)
                if issues:
                    report[rel_path] = issues

    # Output as Artifact for Antigravity
    if report:
        print("\n<antigravity_artifact title='Audit Report'>")
        for path, issues in report.items():
            print(f"### File: {path}")
            for issue in issues:
                print(f"- {issue}")
        print("</antigravity_artifact>")
        print("\n[VERDICT] FAILED. Fix violations before proceeding.")
    else:
        print("\n[VERDICT] PASSED. Architecture integrity verified.")

if __name__ == "__main__":
    main()
