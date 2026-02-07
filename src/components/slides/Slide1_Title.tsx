"use client";
import { motion } from "framer-motion";

export default function Slide1_Title() {
    return (
        <div className="w-full h-full bg-sage-50 flex flex-col items-center justify-center p-20 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-sage-200 rounded-full blur-[100px]" />
                <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-sage-300 rounded-full blur-[120px]" />
                <div className="absolute bottom-[0%] left-[20%] w-[40%] h-[40%] bg-sage-100 rounded-full blur-[80px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center z-10 max-w-5xl"
            >
                <h1 className="text-6xl md:text-8xl font-bold text-sage-900 tracking-tight leading-tight mb-8">
                    앳네이처 x AX<br />
                    <span className="text-sage-600">전략 제언</span>
                </h1>

                <div className="w-24 h-1 bg-sage-400 mx-auto my-12" />

                <div className="space-y-8 text-2xl md:text-3xl font-light text-sage-800 leading-relaxed">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.0 }}
                    >
                        앳네이처가 가진 조향 산업의 전문성과 기술 자산에 AI 기술을 접목,<br />
                        <span className="font-semibold text-sage-700">&apos;웰니스 테크 기업&apos;</span>을 지향.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        최소한의 인력으로 글로벌 시장에 진출하기 위한 초석으로,<br />
                        <span className="font-semibold text-sage-700">&apos;자율형 운영 기업&apos;</span>을 모색.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}
