"use client";
import { motion } from "framer-motion";
import { Database, Filter, BrainCircuit, ArrowRight } from "lucide-react";

export default function Slide12_DataSovereignty() {
    const steps = [
        { icon: Database, title: "Data Pipeline", text: "하나의 파이프라인으로 각종 데이터를 취합, 입체적인 원천 소스로 적재" },
        { icon: Filter, title: "Refinement", text: "원천 소스를 정제하고 의미를 해석, 라벨링하여 활용 가능한 정보로 자산화" },
        { icon: BrainCircuit, title: "Neural Network", text: "정보 간 상관 관계를 부여, 이를 신경망에 기반한 의사 결정 구조로 치환" }
    ];

    return (
        <div className="w-full h-full bg-sage-50 p-20 flex flex-col relative overflow-hidden">
            {/* Header */}
            <motion.div className="z-10 mb-12 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="inline-block px-4 py-2 bg-sage-200 text-sage-800 rounded-full text-sm font-semibold mb-6">핵심 기재 : 기술 혁신</div>
                <h2 className="text-5xl font-bold text-sage-900 mb-4">데이터 주권과 신경망 설계</h2>
                <p className="text-2xl text-sage-600 font-light">제품, 고객, 시장 등 다층적 데이터를 체계적으로 관리하고 이를 전략적으로 연결하는 것이 핵심</p>
            </motion.div>

            {/* Process Flow */}
            <div className="flex-1 flex items-center justify-center gap-8 px-20">
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-1 items-center gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.3) }}
                            className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100 flex-1 h-[400px] flex flex-col items-center text-center justify-center relative z-10"
                        >
                            <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mb-6 text-sage-600">
                                <step.icon size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-sage-800 mb-4">{step.title}</h3>
                            <p className="text-lg text-sage-600 leading-relaxed word-keep-all">{step.text}</p>
                        </motion.div>

                        {i < steps.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (i * 0.3) }}
                                className="text-sage-400"
                            >
                                <ArrowRight size={40} />
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

            {/* Background Flow Line */}
            <svg className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 -z-0 pointer-events-none">
                <path d="M 0 40 Q 400 0 800 40 T 1600 40" fill="none" stroke="#E8F0EA" strokeWidth="80" />
            </svg>
        </div>
    );
}
