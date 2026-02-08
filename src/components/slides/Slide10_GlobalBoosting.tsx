"use client";
import { motion } from "framer-motion";
import { Globe2, Radio } from "lucide-react";

export default function Slide10_GlobalBoosting() {
    const points = [
        { text: "최소한의 인적 자원으로 국가별 유통 채널에 즉각적으로 안착하여 글로벌 점유율 확대" },
        { text: "현지 정서와 플랫폼 특성에 부합하는 정교한 마케팅으로 브랜드 수용도 극대화 및 리스크 방지" },
        { text: "하나의 지능형 엔진으로 다국가·다채널을 동시에 관제하는 효율적인 글로벌 확장 체계 구축" }
    ];

    const regions = [
        { name: "Korea", angle: 0 },
        { name: "Japan", angle: 90 },
        { name: "South East", angle: 180 },
        { name: "North America", angle: 270 }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-900 p-20 flex flex-col relative overflow-hidden text-white">
            {/* Background World Map - Dot Pattern (Asia-Centric) */}
            <div className="absolute inset-0 opacity-25 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                    {/* Dot pattern base */}
                    <defs>
                        <pattern id="dot-pattern-map" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#5e8c61" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern-map)" />

                    {/* Stylized continent shapes with dots - Asia-centric world map */}
                    {/* Asia (Korea, Japan, Southeast Asia) - Center-Right */}
                    <g fill="#5e8c61" opacity="0.6">
                        {/* Korea */}
                        {[840, 850, 860, 870, 880].map((x, i) => [320, 340, 360, 380, 400, 420].map((y, j) =>
                            <circle key={`kr-${i}-${j}`} cx={x + (j % 2) * 5} cy={y} r="3" />
                        ))}
                        {/* Japan */}
                        {[920, 930, 940, 950].map((x, i) => [280, 300, 320, 340, 360, 380, 400, 420, 440].map((y, j) =>
                            <circle key={`jp-${i}-${j}`} cx={x + Math.sin(j) * 8} cy={y} r="2.5" />
                        ))}
                        {/* China */}
                        {[680, 700, 720, 740, 760, 780, 800, 820].map((x, i) => [340, 360, 380, 400, 420, 440, 460, 480].map((y, j) =>
                            (Math.random() > 0.3) && <circle key={`cn-${i}-${j}`} cx={x} cy={y} r="2" />
                        ))}
                        {/* Southeast Asia */}
                        {[780, 800, 820, 840, 860, 880, 900].map((x, i) => [520, 540, 560, 580, 600, 620, 640].map((y, j) =>
                            (Math.random() > 0.4) && <circle key={`sea-${i}-${j}`} cx={x} cy={y} r="2" />
                        ))}
                        {/* India/Middle East */}
                        {[560, 580, 600, 620, 640, 660, 680].map((x, i) => [420, 440, 460, 480, 500, 520, 540].map((y, j) =>
                            (Math.random() > 0.5) && <circle key={`in-${i}-${j}`} cx={x} cy={y} r="2" />
                        ))}
                    </g>

                    {/* North America - Left side */}
                    <g fill="#5e8c61" opacity="0.4">
                        {[200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400].map((x, i) => [280, 300, 320, 340, 360, 380, 400, 420, 440].map((y, j) =>
                            (Math.random() > 0.5) && <circle key={`na-${i}-${j}`} cx={x} cy={y} r="2" />
                        ))}
                    </g>

                    {/* Europe - Center-Left */}
                    <g fill="#5e8c61" opacity="0.35">
                        {[460, 480, 500, 520, 540, 560, 580].map((x, i) => [260, 280, 300, 320, 340, 360].map((y, j) =>
                            (Math.random() > 0.4) && <circle key={`eu-${i}-${j}`} cx={x} cy={y} r="2" />
                        ))}
                    </g>

                    {/* Australia - Bottom Right */}
                    <g fill="#5e8c61" opacity="0.35">
                        {[1000, 1020, 1040, 1060, 1080, 1100].map((x, i) => [640, 660, 680, 700, 720].map((y, j) =>
                            (Math.random() > 0.4) && <circle key={`au-${i}-${j}`} cx={x} cy={y} r="2" />
                        ))}
                    </g>
                </svg>
            </div>

            {/* Header */}
            <div className="z-10 mb-16 text-center">
                <div className="text-sage-400 text-sm font-semibold tracking-wider mb-4 uppercase">외연 확장</div>
                <h2 className="text-5xl font-bold mb-6">적응형 글로벌 부스팅 엔진</h2>
                <h3 className="text-2xl text-sage-300 font-light">권역별 시장 분석 및 플랫폼별 운영 로직 자동 수립,<br />문화적 맥락과 정서에 최적화된 전략 실행</h3>
            </div>

            <div className="flex-1 flex gap-12 z-10 items-center">
                {/* Left: Engine Visualization */}
                <div className="w-1/2 flex items-center justify-center relative">
                    <div className="relative w-[500px] h-[500px]">
                        {/* Central Engine */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sage-700 rounded-full border-4 border-sage-500 shadow-[0_0_50px_rgba(74,97,79,0.5)] flex items-center justify-center"
                            animate={{ boxShadow: ["0 0 20px rgba(74,97,79,0.5)", "0 0 60px rgba(74,97,79,0.8)", "0 0 20px rgba(74,97,79,0.5)"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Globe2 size={80} className="text-sage-200" />
                        </motion.div>

                        {/* Orbiting Satellites (Regions) - Fixed positions */}
                        {regions.map((region, i) => {
                            const radius = 180;
                            const angleRad = (region.angle - 90) * (Math.PI / 180);
                            const x = Math.cos(angleRad) * radius;
                            const y = Math.sin(angleRad) * radius;
                            return (
                                <motion.div
                                    key={i}
                                    className="absolute bg-sage-800 border border-sage-500 px-4 py-2 rounded-full text-sm font-mono text-sage-200"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        x: x - 60,
                                        y: y - 16
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + (i * 0.2), type: "spring" }}
                                >
                                    <Radio size={12} className="inline mr-2 animate-pulse" />
                                    {region.name}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-1/2 space-y-8">
                    {points.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + (idx * 0.2) }}
                            className="flex items-start bg-sage-800/80 p-6 rounded-lg backdrop-blur-sm border border-sage-700 hover:border-sage-500 transition-colors"
                        >
                            <div className="w-2 h-2 mt-3 bg-green-400 rounded-full mr-4 flex-shrink-0 animate-pulse" />
                            <p className="text-lg text-sage-100 leading-relaxed font-light">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
