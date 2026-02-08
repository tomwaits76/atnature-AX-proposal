"use client";
import { motion } from "framer-motion";
import { Leaf, Server } from "lucide-react";

export default function Slide2_Definitions() {
    return (
        <div className="w-[1920px] h-[1080px] bg-sage-50 flex flex-col p-20 relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-sage-100 opacity-50 skew-x-12 transform origin-top-right -translate-x-[20%]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 w-full mb-12"
            >
                <h2 className="text-4xl text-sage-400 font-medium mb-4">Summary</h2>
                <div className="w-full h-[1px] bg-sage-300" />
            </motion.div>

            <div className="flex-1 grid grid-cols-2 gap-16 z-10 items-center">
                {/* Definition 1: Wellness Tech */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white p-12 rounded-3xl shadow-lg border border-sage-100 text-center h-[500px] flex flex-col justify-center relative overflow-hidden"
                >
                    {/* Organic Background Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 C 30 50 70 50 100 100 L 0 100 Z" fill="#5e8c61" />
                        <path d="M0 100 C 30 50 70 50 100 0 L 0 0 Z" fill="#5e8c61" opacity="0.5" />
                    </svg>
                    <div className="w-20 h-20 bg-sage-200 rounded-full mx-auto mb-8 flex items-center justify-center relative z-10">
                        <Leaf size={40} className="text-sage-600" />
                    </div>
                    <h3 className="text-4xl font-bold text-sage-800 mb-6">웰니스 테크 기업</h3>
                    <p className="text-xl text-sage-600 leading-relaxed">
                        앳네이처의 수준 높은 제품과 서비스에 <br />
                        <span className="font-semibold text-sage-800">AI 기술을 결합</span>하여 공간과 사람을 이해하고,<br />
                        나아가 심신의 치유를 돕는 <span className="font-semibold text-sage-800">&apos;웰니스 플랫폼&apos;</span>으로서<br />
                        기술 중심의 새로운 가치를 창출하는 것을 의미합니다.
                    </p>
                </motion.div>

                {/* Definition 2: Autonomous Operation */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-white p-12 rounded-3xl shadow-lg border border-sage-100 text-center h-[500px] flex flex-col justify-center relative overflow-hidden"
                >
                    {/* Grid Background Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                        <defs>
                            <pattern id="grid-pattern-box" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#5e8c61" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-pattern-box)" />
                    </svg>
                    <div className="w-20 h-20 bg-sage-200 rounded-full mx-auto mb-8 flex items-center justify-center relative z-10">
                        <Server size={40} className="text-sage-600" />
                    </div>
                    <h3 className="text-4xl font-bold text-sage-800 mb-6">자율형 운영 기업</h3>
                    <p className="text-xl text-sage-600 leading-relaxed">
                        판촉, 판매, 관리, 고객 대응 등 복잡한 운영 업무 전반에<br />
                        <span className="font-semibold text-sage-800">AI 중심 워크플로우를 이식</span>하여 인적 개입을 최소화,<br />
                        운영 효율을 높여 공격적인 사업 확장과<br />
                        <span className="font-semibold text-sage-800">지속 가능한 경영 체계</span>를 구축합니다.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
