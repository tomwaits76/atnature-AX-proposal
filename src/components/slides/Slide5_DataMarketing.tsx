"use client";
import { motion } from "framer-motion";
import { Target, Zap, BarChart3 } from "lucide-react";

export default function Slide5_DataMarketing() {
    const content = [
        { icon: Target, text: "데이터 기반 정교한 타겟팅으로 브랜드 충성도 및 전환율 상향" },
        { icon: Zap, text: "브랜드 가치 아래 일관된 소재를 빠르게 생성, 제작 속도와 효율 혁신" },
        { icon: BarChart3, text: "실시간 성과 분석으로 예산과 노출 최적화, 비용 대비 효과를 개선" }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-white p-20 flex relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-sage-50 z-0" />

            {/* Left Content */}
            <div className="w-1/2 z-10 flex flex-col justify-center pr-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-semibold mb-6">역량 강화</div>
                    <h2 className="text-5xl font-bold text-sage-900 mb-6 leading-tight">데이터 주도 브랜딩/마케팅 최적화</h2>
                    <h3 className="text-2xl text-sage-600 mb-12 font-light">데이터 수집, 캠페인 기획, 소재 생성 및 채널 배포까지<br />모든 과정을 AI 워크플로우로 통합</h3>

                    <div className="space-y-8">
                        {content.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (idx * 0.2) }}
                                className="flex items-center p-6 bg-sage-50 rounded-xl"
                            >
                                <div className="p-3 bg-white rounded-full text-sage-600 mr-6 shadow-sm">
                                    <item.icon size={24} />
                                </div>
                                <p className="text-lg text-sage-800 font-medium">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Infographic: Funnel/Workflow */}
            <div className="w-1/2 z-10 flex items-center justify-center pl-12">
                <motion.div className="flex flex-col items-center space-y-12 w-full max-w-md">
                    {["Data Mining", "AI Analysis", "Creative Gen.", "Optimization", "Release"].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.2) }}
                            className="w-full bg-white border border-sage-200 p-6 rounded-2xl shadow-lg relative flex items-center justify-start pl-6"
                            style={{ width: `${100 - (i * 12)}%` }}
                        >
                            <span className="text-sage-900 font-medium text-lg">Step 0{i + 1}. {step}</span>
                            {i < 4 && (
                                <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 text-sage-300">
                                    ▼
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
