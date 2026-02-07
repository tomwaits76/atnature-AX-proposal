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
                    <div className="text-sage-400 text-sm font-semibold tracking-wider mb-4 uppercase">첫 걸음 : 역량 강화</div>
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
                        <div className="bg-sage-700/50 rounded-xl p-6 relative overflow-hidden">
                            <div className="flex justify-between text-sage-300 mb-2"><TrendingUp /> Sales</div>
                            <div className="text-4xl font-mono mb-4 text-white">₩1.2B</div>
                            <div className="w-full h-1 bg-sage-600 rounded-full"><div className="w-[70%] h-full bg-green-400 rounded-full" /></div>
                        </div>
                        <div className="bg-sage-700/50 rounded-xl p-6">
                            <div className="flex justify-between text-sage-300 mb-2"><Users /> Active Users</div>
                            <div className="text-4xl font-mono mb-4 text-white">45.2K</div>
                            <div className="w-full h-1 bg-sage-600 rounded-full"><div className="w-[85%] h-full bg-blue-400 rounded-full" /></div>
                        </div>
                        <div className="bg-sage-700/50 rounded-xl p-6 col-span-2">
                            <div className="flex justify-between text-sage-300 mb-2"><Activity /> AI Task Automation</div>
                            <div className="flex justify-between items-end mt-4">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-4 bg-sage-500 rounded-t"
                                        initial={{ height: 10 }}
                                        animate={{ height: [20, 20 + (i * 5) % 40 + 10, 20] }}
                                        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", delay: i * 0.1 }}
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
