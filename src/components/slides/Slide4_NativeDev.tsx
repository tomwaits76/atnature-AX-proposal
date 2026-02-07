"use client";
import { motion } from "framer-motion";
import { Code, Monitor, Smartphone, Globe, Server } from "lucide-react";

export default function Slide4_NativeDev() {
    const benefits = [
        { title: "속도 혁신", desc: "사업 전략에 따른 즉각적인 기능 구현 및 상시 개선" },
        { title: "고품질 경험", desc: "브랜드의 정체성이 완벽하게 투영된 고품질 디지털 경험 제공" },
        { title: "비용 절감", desc: "AI 기반 환경으로 중장기적 운영 비용을 획기적으로 절감" }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-50 p-20 flex relative overflow-hidden">
            {/* Left Content */}
            <div className="w-1/2 z-10 flex flex-col justify-center pr-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-sage-200 text-sage-800 rounded-full text-sm font-semibold mb-6">역량 강화</div>
                    <h2 className="text-5xl font-bold text-sage-900 mb-6 leading-tight">AI 네이티브 개발 환경 내재화</h2>
                    <h3 className="text-2xl text-sage-600 mb-12 font-light">자사몰, 브랜드 페이지, 웹 앱 등<br />모든 디지털 접점의 AI 기반 내부 개발 및 관리</h3>

                    <div className="space-y-8">
                        {benefits.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (idx * 0.2) }}
                                className="flex items-start"
                            >
                                <div className="w-2 h-2 mt-3 bg-sage-500 rounded-full mr-4 flex-shrink-0" />
                                <div>
                                    <p className="text-xl text-sage-800 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Infographic */}
            <div className="w-1/2 z-10 flex items-center justify-center pl-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-[600px] h-[600px]"
                >
                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sage-600 rounded-full flex flex-col items-center justify-center text-white p-4 text-center shadow-2xl z-20">
                        <Server size={48} className="mb-2" />
                        <span className="font-bold text-lg">AI Native<br />Dev. Core</span>
                    </div>

                    {/* Satellite Nodes - Fixed positions for stable line connections */}
                    {[
                        { icon: Globe, label: "Web Store", top: "30px", left: "50%", translateX: "-50%", lineEnd: { x: 300, y: 110 } },
                        { icon: Smartphone, label: "Mobile App", top: "430px", left: "calc(100% - 100px)", translateX: "-50%", lineEnd: { x: 500, y: 510 } },
                        { icon: Monitor, label: "Brand Page", top: "430px", left: "100px", translateX: "-50%", lineEnd: { x: 100, y: 510 } }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-40 h-40 bg-white border-2 border-sage-200 rounded-3xl flex flex-col items-center justify-center shadow-lg text-sage-700 z-10"
                            style={{ top: node.top, left: node.left, transform: `translateX(${node.translateX})` }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, y: [0, -5, 0] }}
                            transition={{ delay: 0.5 + (i * 0.2), type: "spring", y: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.3 } }}
                        >
                            <node.icon size={32} className="mb-2 text-sage-500" />
                            <span className="font-medium">{node.label}</span>
                        </motion.div>
                    ))}

                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                        {/* Center to Web Store (top) */}
                        <motion.path
                            d="M 300 224 L 300 110"
                            stroke="#CFDFD4"
                            strokeWidth="2"
                            strokeDasharray="6 4"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                        {/* Center to Brand Page (bottom-left) */}
                        <motion.path
                            d="M 224 300 L 100 510"
                            stroke="#CFDFD4"
                            strokeWidth="2"
                            strokeDasharray="6 4"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                        />
                        {/* Center to Mobile App (bottom-right) */}
                        <motion.path
                            d="M 376 300 L 500 510"
                            stroke="#CFDFD4"
                            strokeWidth="2"
                            strokeDasharray="6 4"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.9 }}
                        />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
}
