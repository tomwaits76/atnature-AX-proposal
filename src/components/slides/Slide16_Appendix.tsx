"use client";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

export default function Slide16_Appendix() {
    const materials = [
        { title: "앳네이처 AI 컨설턴트", link: "https://gemini.google.com/gem/1s2wDH_r28V8aO62MCuVquXnY9r30H6IN?usp=sharing", highlight: true },
        { title: "앳네이처 전략 심층 보고서 : AI 제작", link: "https://gemini.google.com/share/3d50915b52e3", highlight: false },
        { title: "앳네이처 전략 요약 페이지 : AI 제작", link: "https://gemini.google.com/gem/1s2wDH_r28V8aO62MCuVquXnY9r30H6IN?usp=sharing", highlight: false }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-50 flex flex-col items-center justify-center p-20 relative overflow-hidden">
            <motion.div
                className="z-10 w-full max-w-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-12 border-b border-sage-200 pb-6">
                    <h2 className="text-4xl font-bold text-sage-900">참고 자료</h2>
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
                                className={`group bg-white p-10 rounded-2xl border shadow-sm hover:shadow-xl transition-all flex items-center justify-between ${item.highlight
                                        ? "border-sage-500 ring-4 ring-sage-50"
                                        : "border-sage-200 hover:border-sage-300"
                                    }`}
                            >
                                <div className="flex items-center gap-8">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all shadow-inner ${item.highlight
                                            ? "bg-sage-600 text-white shadow-lg"
                                            : "bg-sage-50 text-sage-500 group-hover:bg-sage-600 group-hover:text-white"
                                        }`}>
                                        <FileText size={32} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-2xl font-bold ${item.highlight ? "text-sage-800" : "text-sage-900 group-hover:text-sage-700"}`}>{item.title}</span>
                                        <span className="text-sage-400 text-sm mt-1 group-hover:text-sage-500 transition-colors">Click to view resource</span>
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full transition-all ${item.highlight
                                        ? "bg-sage-600 text-white"
                                        : "bg-sage-50 text-sage-400 group-hover:text-white group-hover:bg-sage-600"
                                    }`}>
                                    <ExternalLink size={24} />
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
