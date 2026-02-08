"use client";
import { motion } from "framer-motion";
import { Scan, Box, CheckCircle } from "lucide-react";

export default function Slide8_SpaceDesign() {
    const content = [
        { text: "전문가 없이도 누구나 자신의 공간에 최적화된 향기 환경 구축" },
        { text: "시각적 데이터 분석을 근거로 한 맞춤형 제안으로 고객 신뢰도 향상" },
        { text: "자율적인 공간 진단을 향기 구독 서비스 모델에 연계하는 확장성 확보" }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-white p-20 flex relative overflow-hidden">
            {/* Background - 직선 비정형 배치 (p4 참조) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]" preserveAspectRatio="none">
                {/* 비정형 직선 배치 */}
                <line x1="100" y1="150" x2="400" y2="200" stroke="#4A614F" strokeWidth="1.5" />
                <line x1="1500" y1="100" x2="1800" y2="180" stroke="#4A614F" strokeWidth="1.5" />
                <line x1="200" y1="400" x2="350" y2="380" stroke="#4A614F" strokeWidth="1" />
                <line x1="1600" y1="350" x2="1850" y2="400" stroke="#4A614F" strokeWidth="1" />
                <line x1="150" y1="700" x2="450" y2="750" stroke="#4A614F" strokeWidth="1.5" />
                <line x1="1400" y1="650" x2="1700" y2="700" stroke="#4A614F" strokeWidth="1" />
                <line x1="300" y1="900" x2="500" y2="880" stroke="#4A614F" strokeWidth="1" />
                <line x1="1550" y1="850" x2="1800" y2="900" stroke="#4A614F" strokeWidth="1.5" />
                {/* 장식용 원 */}
                <circle cx="150" cy="150" r="60" fill="none" stroke="#4A614F" strokeWidth="0.5" />
                <circle cx="1780" cy="920" r="80" fill="none" stroke="#4A614F" strokeWidth="0.5" />
            </svg>

            {/* Left Content - Grid Pattern Background */}
            <div className="w-1/2 z-10 flex flex-col justify-center pr-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-sage-200 text-sage-800 rounded-full text-sm font-semibold mb-6">외연 확장</div>
                    <h2 className="text-5xl font-bold text-sage-900 mb-6 leading-tight">지능형 공간 디자인 소프트웨어</h2>
                    <h3 className="text-2xl text-sage-600 mb-12 font-light">사진이나 화면을 분석하여 공간에 최적화된<br />조향 솔루션을 제안하고, 가이드를 제공하는 서비스</h3>

                    <div className="space-y-6">
                        {content.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (idx * 0.2) }}
                                className="flex items-start"
                            >
                                <CheckCircle className="text-sage-500 mr-4 mt-1 flex-shrink-0" size={24} />
                                <p className="text-xl text-sage-800 leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Infographic: Space Analysis Simulation */}
            <div className="w-1/2 z-10 flex items-center justify-center pl-12">
                <motion.div
                    className="relative w-full h-[480px] bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-sage-500/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Simulated Room Image - Abstract blocks representing furniture */}
                    <div className="absolute inset-0 bg-sage-900 flex items-end justify-center perspective-[500px]">
                        {/* Floor Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent)',
                                backgroundSize: '50px 50px',
                                transform: 'rotateX(60deg) scale(2)'
                            }}
                        />

                        {/* 3D Wireframe Objects */}
                        <motion.div
                            className="w-1/2 h-2/3 border-2 border-sage-400 bg-sage-800/50 rounded-t-lg mx-4 relative backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, borderColor: ["#5e8c61", "#a3c9a8", "#5e8c61"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {/* Wireframe internal lines */}
                            <div className="absolute top-0 left-0 right-0 h-1/4 border-b border-sage-500/50" />
                            <div className="absolute bottom-0 left-1/2 top-0 w-px bg-sage-500/50" />
                        </motion.div>
                        <motion.div
                            className="w-1/4 h-1/2 border-2 border-sage-400 bg-sage-800/50 rounded-t-lg mx-4 relative backdrop-blur-sm shadow-[0_0_15px_rgba(94,140,97,0.5)]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        />
                    </div>

                    {/* Scanning Laser */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[2px] bg-green-400 shadow-[0_0_20px_#4ade80]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Object Detection Tags */}
                    {[
                        { label: "Fabric Sofa", conf: "98%", x: "30%", y: "40%" },
                        { label: "Wood Table", conf: "95%", x: "70%", y: "60%" },
                        { label: "Ambient Light", conf: "88%", x: "50%", y: "20%" },
                    ].map((tag, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-sage-900/80 border border-green-500/50 text-green-400 px-3 py-1 rounded text-xs font-mono flex gap-2 items-center backdrop-blur-md"
                            style={{ top: tag.y, left: tag.x }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + (i * 0.5) }}
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            {tag.label} <span className="opacity-70">[{tag.conf}]</span>
                            {/* Connecting line to object approx */}
                            <div className="absolute -bottom-4 left-1/2 w-px h-4 bg-green-500/50" />
                        </motion.div>
                    ))}

                    {/* Ambient Light 사각형 - 태그 우측으로 이동, 원근감 연출 (연한 색상, 작은 크기, 느린 점멸) */}
                    <motion.div
                        className="absolute w-10 h-10 border-2 border-sage-300/60 bg-sage-500/15"
                        style={{ top: 'calc(20% + 28px)', left: 'calc(50% + 20px)', transform: 'translateX(-50%)' }}
                        animate={{ opacity: [0.2, 0.7, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* UI Overlay */}
                    <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-[10px] font-mono border border-white/10">
                        AI VISION ANALYZER v2.0
                    </div>
                    <div className="absolute bottom-4 right-4 bg-sage-600/90 text-white px-5 py-3 rounded-lg shadow-xl backdrop-blur border border-sage-500/50 flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                        <div>
                            <div className="text-[10px] text-sage-200 uppercase tracking-wider font-bold">Analysis Result</div>
                            <div className="font-medium text-sm">Recommended: Woody Base</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
