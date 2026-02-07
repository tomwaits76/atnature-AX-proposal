"use client";
import { motion } from "framer-motion";
import { LayoutDashboard, TrendingUp, Users, Activity } from "lucide-react";

export default function Slide6_OpsAutomation() {
    const content = [
        { text: "단순 반복 업무를 AI에 맡기고, 가치 제고와 전략 수립에 자원 집중" },
        { text: "운영 비용의 절감을 통해 제품 및 서비스의 채산성과 기업 이익률 제고" },
        { text: "통합된 데이터를 바탕으로 시장 변화와 고객 요구에 즉각적으로 대응" }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-900 p-20 flex flex-col relative overflow-hidden text-white">
            {/* Header */}
            <div className="flex justify-between items-end mb-20 z-10">
                <div>
                    <div className="text-sage-400 text-sm font-semibold tracking-wider mb-4 uppercase">역량 강화</div>
                    <h2 className="text-5xl font-bold mb-4">단일 대시보드 기반 운영 자동화</h2>
                    <h3 className="text-2xl text-sage-300 font-light">국내외 판매 채널의 데이터를 하나로 통합하고,<br />고객 대응 및 운영 전반의 업무 흐름 개편</h3>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex gap-12 z-10">
                {/* Left: Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-3/5 bg-sage-800/90 backdrop-blur-xl rounded-2xl border border-sage-600/50 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col"
                >
                    {/* Mock Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-sage-700 pb-4">
                        <div className="flex items-center gap-3">
                            <LayoutDashboard className="text-sage-400" />
                            <span className="font-mono text-sage-200">ATNATURE. Admin OS</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                    </div>

                    {/* Mock Grid */}
                    <div className="grid grid-cols-2 gap-6 flex-1">
                        {/* Sales Graph - Smooth Upward Trend */}
                        <div className="bg-sage-700/50 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
                            <div className="flex justify-between text-sage-300 z-10"><TrendingUp size={20} /> <span className="text-sm">Sales Growth</span></div>
                            <div className="text-3xl font-mono text-white z-10 mt-2">₩1.2B <span className="text-green-400 text-sm">+12%</span></div>

                            <div className="absolute bottom-0 left-0 w-full h-32 opacity-50">
                                <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
                                    <path d="M0 50 L0 30 Q 25 25 50 20 T 100 5 V 50 Z" fill="url(#salesGradient)" />
                                    <motion.path
                                        d="M0 30 Q 25 25 50 20 T 100 5"
                                        fill="none"
                                        stroke="#4ade80"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />
                                    <defs>
                                        <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* Active Users - Jagged Fluctuation */}
                        <div className="bg-sage-700/50 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
                            <div className="flex justify-between text-sage-300 z-10"><Users size={20} /> <span className="text-sm">Active Users</span></div>
                            <div className="text-3xl font-mono text-white z-10 mt-2">45.2K <span className="text-blue-400 text-sm">~2.4k</span></div>

                            <div className="absolute bottom-0 left-0 w-full h-24 opacity-50">
                                <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
                                    <motion.path
                                        d="M0 25 L 10 30 L 20 15 L 30 35 L 40 20 L 50 40 L 60 10 L 70 30 L 80 20 L 90 35 L 100 15"
                                        fill="none"
                                        stroke="#60a5fa"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 3, ease: "linear" }}
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* AI Task Automation - Sine Wave Bars */}
                        <div className="bg-sage-700/50 rounded-xl p-6 col-span-2 relative overflow-hidden">
                            <div className="flex justify-between text-sage-300 mb-4 z-10 relative"><Activity size={20} /> <span>AI Task Automation</span></div>
                            <div className="flex justify-between items-end h-24 gap-1 relative z-10 px-2">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-full bg-sage-500 rounded-t opacity-80"
                                        animate={{
                                            height: [20, 40 + Math.sin(i) * 20, 20]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.5,
                                            delay: i * 0.05,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Text Content */}
                <div className="w-2/5 flex flex-col justify-center space-y-8">
                    {content.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + (idx * 0.2) }}
                            className="pl-6 border-l-2 border-sage-600"
                        >
                            <p className="text-xl text-sage-100 leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
