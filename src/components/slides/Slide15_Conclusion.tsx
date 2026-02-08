"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Slide15_Conclusion() {
    const points = [
        { title: "Constitution Improvement", text: "사업 전반에 걸친 AI 기술 도입으로 내부 역량을 강화하는 한편 고정 지출을 절감, 적극적인 국내외 시장 개척과 수익 고도화에 대비한 건강한 체질로 경영 상태를 준비합니다." },
        { title: "Global Wellness Tech", text: "시장, 트렌드, 고객 데이터 기반의 워크플로우와 의사 결정 구조로 사업 전략을 고도화하여, 빠르게 변화하는 글로벌 시장에서 웰니스 테크 기업으로서의 가치 창출을 모색합니다." },
        { title: "Autonomous Enterprise", text: "경영진의 전략적 의사 결정을 통합 지휘 환경 아래 각각의 AI 에이전트들이 즉각적이고 일관되게 실행하는, 기술 격변의 시대에 적합한 딥테크 자율형 운영 기업을 완성합니다." }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-50 flex flex-col items-center justify-center p-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-sage-200 rounded-full blur-[120px] opacity-50" />
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-sage-300 rounded-full blur-[120px] opacity-50" />

            <motion.div
                className="z-10 max-w-6xl w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-5xl md:text-6xl font-bold text-sage-900 text-center mb-20 leading-tight">
                    앳네이처 x AX로<br />
                    <span className="text-sage-600">글로벌 웰니스 플랫폼 구현</span>
                </h2>

                <div className="space-y-8">
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (i * 0.3) }}
                            className="flex items-start bg-white p-8 rounded-2xl shadow-sm border border-sage-100"
                        >
                            <div className="w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center text-white mr-6 mt-1 flex-shrink-0">
                                <Check size={18} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-sage-800 mb-2">{point.title}</h3>
                                <p className="text-xl text-sage-600 leading-relaxed word-keep-all">
                                    {point.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
