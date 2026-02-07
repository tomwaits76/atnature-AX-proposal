---
name: Architecture Audit
description: Scans the current codebase for architectural violations (Circular dependencies, Hardcoded secrets, Missing docstrings).
---

# Architecture Audit Skill

이 스킬은 프로젝트의 코드 베이스를 스캔하여 아키텍처 위반 사항을 점검합니다. 

## 주요 점검 항목
- **Hardcoded Secrets**: API 키, 비밀번호 등이 코드에 직접 노출되어 있는지 확인합니다.
- **TODO Leftovers**: 완료되지 않은 TODO 주석이 남아있는지 확인합니다.
- **Print Debugs**: 디버깅용 print 문이 소스 코드에 포함되어 있는지 확인합니다.
- **Missing Docstrings**: 파이썬 함수의 경우 docstring 누락 여부를 체크합니다.

## 사용 방법
에이전트(Antigravity)는 Pull Request 제출 전이나 주요 변경 사항 반영 전에 `scripts/architecture_audit.py`를 실행하여 아키텍처 무결성을 검증해야 합니다.

```bash
python .agent/skills/architecture-audit/scripts/architecture_audit.py
```
