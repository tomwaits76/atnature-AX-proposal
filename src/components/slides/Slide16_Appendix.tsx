"use client";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

export default function Slide16_Appendix() {
    const materials = [
        { title: "앳네이처 AI 컨설턴트", link: "https://gemini.google.com/gem/1s2wDH_r28V8aO62MCuVquXnY9r30H6IN?usp=sharing" },
        { title: "앳네이처 전략 심층 보고서 : AI 제작", link: "https://gemini.google.com/gem/1s2wDH_r28V8aO62MCuVquXnY9r30H6IN?usp=sharing" },
        { title: "앳네이처 전략 요약 페이지 : AI 제작", link: "https://gemini.google.com/gem/1s2wDH_r28V8aO62MCuVquXnY9r30H6IN?usp=sharing" }
    ];

    return (
        <div className="w-full h-full bg-sage-50 flex flex-col items-center justify-center p-20 relative overflow-hidden">
            <motion.div
                className="z-10 w-full max-w-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-12 border-b border-sage-200 pb-6">
                    <h2 className="text-4xl font-bold text-sage-900">부록 자료</h2>
                    <span className="text-sage-500 text-xl font-light">Appendix</span>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {materials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white p-8 rounded-xl border border-sage-200 shadow-sm hover:shadow-md hover:border-sage-400 transition-all flex items-center justify-between"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors">
                                        <FileText size={24} />
                                    </div>
                                    <span className="text-xl font-medium text-sage-800 group-hover:text-sage-900">{item.title}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sage-400 group-hover:text-sage-600">
                                    <span className="text-sm underline opacity-0 group-hover:opacity-100 transition-opacity">{item.link}</span>
                                    <ExternalLink size={20} />
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
