"use client";
import { motion } from "framer-motion";

export default function Slide11_TechInnovation() {
    return (
        <div className="w-[1920px] h-[1080px] bg-sage-900 flex flex-col items-center justify-center p-20 relative text-white text-center">
            {/* Background Tech Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sage-500" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <span className="text-sage-400 text-2xl font-medium tracking-widest mb-6 block uppercase">Phase 03</span>
                <h2 className="text-7xl font-bold mb-8 text-white">핵심 기재 : 기술 혁신</h2>
                <p className="text-3xl text-sage-200 max-w-5xl mx-auto leading-relaxed font-light mb-16">
                    내부 강화에 이어 외연 확장을 실현하는 핵심 기술을 정의하고,<br />
                    <span className="font-semibold text-white">앳네이처만의 기술적 해자</span>를 구축하기 위한 토대 마련
                </p>

                <div className="grid grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
                    {["데이터 주권과 신경망 설계", "멀티 AI 에이전트 분업", "AI 오케스트레이션 환경 구축"].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (idx * 0.2) }}
                            className="bg-sage-800/50 backdrop-blur-sm border border-sage-600 p-8 rounded-xl"
                        >
                            <span className="text-xl text-sage-100 font-medium">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
