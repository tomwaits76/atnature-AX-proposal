"use client";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

export default function Slide10_GlobalBoosting() {
    const points = [
        { text: "최소한의 인적 자원으로 국가별 유통 채널에 즉각적으로 안착하여 글로벌 점유율 확대" },
        { text: "현지 정서와 플랫폼 특성에 부합하는 정교한 마케팅으로 브랜드 수용도 극대화 및 리스크 방지" },
        { text: "하나의 지능형 엔진으로 다국가·다채널을 동시에 관제하는 효율적인 글로벌 확장 체계 구축" }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-900 p-20 flex flex-col relative overflow-hidden text-white">
            {/* Background Map - Dot Matrix Style */}
            <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 1000 600" className="text-sage-300">
                    {/* Abstract World Dot Grid */}
                    <pattern id="dot-pattern-bg" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                    </pattern>
                    <rect width="1000" height="600" fill="url(#dot-pattern-bg)" opacity="0.5" />

                    {/* Stylized Continents (Circles) */}
                    <g opacity="0.6">
                        <circle cx="850" cy="150" r="50" fill="currentColor" /> {/* North America */}
                        <circle cx="900" cy="450" r="40" fill="currentColor" /> {/* South America */}
                        <circle cx="500" cy="200" r="40" fill="currentColor" /> {/* Europe */}
                        <circle cx="550" cy="350" r="50" fill="currentColor" /> {/* Africa */}
                        <circle cx="200" cy="200" r="60" fill="currentColor" /> {/* Asia */}
                        <circle cx="150" cy="450" r="30" fill="currentColor" /> {/* Oceania */}
                    </g>
                </svg>
            </div>

            {/* Header */}
            <div className="z-10 mb-16 text-center">
                <div className="text-sage-400 text-sm font-semibold tracking-wider mb-4 uppercase">외연 확장</div>
                <h2 className="text-5xl font-bold mb-4">적응형 글로벌 부스팅 엔진</h2>
                <h3 className="text-2xl text-sage-300 font-light">권역별 시장 분석 및 플랫폼별 운영 로직 자동 수립,<br />문화적 맥락과 정서에 최적화된 전략 실행</h3>
            </div>

            <div className="flex-1 flex gap-12 z-10 items-center">
                {/* Infographic with Central Node and Satellites */}
                <div className="z-10 flex-1 flex items-center justify-center relative w-full h-full">
                    {/* Center Node (Seoul/HQ) */}
                    <motion.div
                        className="absolute z-20 bg-sage-600 rounded-full w-48 h-48 flex items-center justify-center shadow-[0_0_50px_rgba(94,140,97,0.6)] border-4 border-sage-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        <div className="text-center text-white">
                            <Globe2 size={48} className="mx-auto mb-2 animate-pulse" />
                            <h3 className="text-2xl font-bold">Boosting<br />Engine</h3>
                        </div>
                    </motion.div>

                    {/* Satellite Nodes */}
                    {[
                        { title: "Rapid Entry", desc: "국가별 규제/트렌드 자동 분석", x: -350, y: -150 },
                        { title: "Localized Marketing", desc: "문화적 맥락 기반 콘텐츠 생성", x: 350, y: -150 },
                        { title: "Global Management", desc: "실시간 글로벌 재고/물류 최적화", x: 0, y: 250 },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white/90 backdrop-blur border border-sage-200 p-8 rounded-2xl w-80 text-center shadow-xl"
                            style={{ x: item.x, y: item.y }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + (i * 0.3) }}
                        >
                            {/* Connecting Line to Center */}
                            <svg className="absolute top-1/2 left-1/2 -z-10 w-[800px] h-[800px] pointer-events-none overflow-visible" style={{ transform: "translate(-50%, -50%)" }}>
                                <motion.line
                                    x1="400" y1="400"
                                    x2={400 - item.x} y2={400 - item.y}
                                    stroke="#A3C9A8"
                                    strokeWidth="2"
                                    strokeDasharray="10 10"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.2 + (i * 0.3) }}
                                />
                            </svg>

                            <h4 className="text-2xl font-bold text-sage-800 mb-2">{item.title}</h4>
                            <p className="text-sage-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
