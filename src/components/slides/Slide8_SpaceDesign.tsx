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
        <div className="w-full h-full bg-white p-20 flex relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#4A614F 1px, transparent 1px), linear-gradient(90deg, #4A614F 1px, transparent 1px)', backgroundSize: '50px 50px' }}
            />

            {/* Left Content */}
            <div className="w-1/2 z-10 flex flex-col justify-center pr-12 bg-white/90 backdrop-blur-sm p-8 rounded-2xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-sage-600 text-white rounded-full text-sm font-semibold mb-6">다음 단계 : 외연 확장</div>
                    <h2 className="text-5xl font-bold text-sage-900 mb-6 leading-tight">지능형 공간 디자인<br />소프트웨어</h2>
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
                    className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Simulated Room Image Placeholder */}
                    <div className="absolute inset-0 bg-sage-100 flex items-end justify-center">
                        <div className="w-1/2 h-2/3 bg-sage-300 rounded-t-lg mx-4" /> {/* Sofa */}
                        <div className="w-1/4 h-1/2 bg-sage-400 rounded-t-lg mx-4" /> {/* Table */}
                    </div>

                    {/* Scanning Effect */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-sage-500 shadow-[0_0_20px_#4A614F]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Analysis Points */}
                    <motion.div
                        className="absolute top-1/3 left-1/3 w-4 h-4 bg-white border-2 border-sage-600 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-white border-2 border-sage-600 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />

                    {/* UI Overlay */}
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded backdrop-blur text-sm flex items-center gap-2">
                        <Scan size={14} /> Analyzing Spatial Volume...
                    </div>
                    <div className="absolute bottom-4 right-4 bg-sage-600 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2">
                        <Box size={16} /> Solution Found: Woody Base
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
