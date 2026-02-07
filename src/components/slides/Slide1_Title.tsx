"use client";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react"; // Assuming Cpu icon is from lucide-react

export default function Slide1_Title() {
    return (
        <div className="w-[1920px] h-[1080px] bg-sage-50 flex flex-col items-center justify-center p-20 relative overflow-hidden">
            {/* Background Decorative Elements */}
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-sage-50 opacity-50 z-0">
                {/* Grid Pattern for Right Side (Autonomous) */}
                <svg className="absolute inset-0 w-full h-full opacity-20" width="100%" height="100%">
                    <defs>
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage-400" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>
            <div className="absolute top-0 left-0 w-[50%] h-full z-0">
                {/* Organic Pattern for Left Side (Wellness) */}
                <svg className="absolute inset-0 w-full h-full opacity-20 text-sage-300" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 C 30 50 70 50 100 100 L 0 100 Z" fill="currentColor" />
                    <path d="M0 100 C 30 50 70 50 100 0 L 0 0 Z" fill="currentColor" opacity="0.5" />
                </svg>
            </div>
            {/* Original blur elements, now layered on top of the patterns for a different effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none z-10">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-sage-200 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute top-[20%] right-[5%] w-[40%] h-[40%] bg-sage-300 rounded-full blur-[140px] mix-blend-multiply" />
                <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-sage-100 rounded-full blur-[100px] mix-blend-multiply" />
            </div>


            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center z-10 max-w-5xl"
            >
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-tight mb-8 drop-shadow-sm">
                    <span className="text-sage-600">ATNATURE.</span><br />
                    <span className="text-sage-900 font-light">AX 전략 제언</span>
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
