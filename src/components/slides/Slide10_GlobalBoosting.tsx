"use client";
import { motion } from "framer-motion";
import { Globe, TrendingUp } from "lucide-react";

export default function Slide10_GlobalBoosting() {
    const regions = [
        { name: "Korea", growth: "+15%", position: { top: "38%", left: "75%" } },
        { name: "Japan", growth: "+12%", position: { top: "35%", left: "82%" } },
        { name: "South East", growth: "+28%", position: { top: "55%", left: "72%" } },
        { name: "North America", growth: "+18%", position: { top: "35%", left: "22%" } }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-900 p-20 flex flex-col relative overflow-hidden text-white">
            {/* Background World Map - Stylized SVG Continents (Asia-Centric) */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#5e8c61" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#4A614F" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>

                    {/* Asia - Center-Right (Main Focus) */}
                    {/* Korea */}
                    <path d="M 1420 340 Q 1430 320 1440 330 L 1450 360 Q 1455 390 1445 410 L 1430 420 Q 1415 410 1420 380 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* Japan */}
                    <path d="M 1500 280 Q 1520 260 1530 290 L 1535 340 Q 1530 380 1520 420 L 1510 450 Q 1495 430 1500 390 L 1505 340 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />
                    <path d="M 1480 440 Q 1500 430 1510 450 L 1505 480 Q 1490 500 1480 490 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* China */}
                    <path d="M 1200 300 Q 1280 280 1350 320 L 1400 360 Q 1420 400 1380 450 L 1320 480 Q 1250 500 1200 460 L 1160 400 Q 1140 350 1200 300 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* Southeast Asia */}
                    <path d="M 1280 520 Q 1320 500 1360 530 L 1380 580 Q 1370 620 1340 640 L 1300 660 Q 1260 650 1250 610 L 1260 560 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />
                    <path d="M 1380 600 Q 1420 580 1450 620 L 1460 680 Q 1440 720 1400 710 L 1370 670 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* India */}
                    <path d="M 1050 420 Q 1100 380 1150 420 L 1160 500 Q 1140 580 1100 620 L 1060 580 Q 1030 520 1050 420 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* Middle East */}
                    <path d="M 900 380 Q 960 360 1020 400 L 1040 450 Q 1020 490 970 500 L 920 480 Q 880 440 900 380 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* Russia/Central Asia */}
                    <path d="M 900 200 Q 1100 160 1300 180 L 1450 200 Q 1500 240 1480 280 L 1350 300 Q 1200 280 1050 300 L 920 280 Q 860 250 900 200 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* Europe */}
                    <path d="M 700 220 Q 780 200 850 240 L 880 300 Q 860 360 800 380 L 720 360 Q 660 320 680 260 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />
                    <path d="M 780 380 Q 820 360 860 390 L 870 440 Q 850 480 810 470 L 770 430 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* Africa */}
                    <path d="M 780 500 Q 850 480 900 540 L 920 620 Q 900 720 840 780 L 780 760 Q 720 700 740 620 L 760 550 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* North America */}
                    <path d="M 200 180 Q 320 140 420 200 L 480 280 Q 500 360 460 420 L 380 480 Q 300 520 240 480 L 180 400 Q 140 300 200 180 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />
                    <path d="M 240 500 Q 300 480 360 520 L 400 600 Q 380 680 320 700 L 260 680 Q 220 620 240 500 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* South America */}
                    <path d="M 380 620 Q 440 600 480 660 L 500 760 Q 480 860 420 900 L 360 880 Q 320 800 340 720 L 360 660 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />

                    {/* Australia/Oceania */}
                    <path d="M 1480 720 Q 1560 700 1620 760 L 1640 840 Q 1600 900 1520 890 L 1460 850 Q 1440 790 1480 720 Z"
                        fill="url(#mapGradient)" stroke="#5e8c61" strokeWidth="1" />
                </svg>
            </div>

            {/* Header */}
            <div className="z-10 mb-6">
                <div className="text-sage-400 text-sm font-semibold tracking-wider mb-6 uppercase">외연 확장</div>
                <h2 className="text-5xl font-bold mb-6">글로벌 부스팅</h2>
                <p className="text-2xl text-sage-200 font-light">아마존, 큐텐 재팬, 라쿠텐, 쇼피 등 글로벌 마켓의<br />입점, 운영, 물류, 정산 등 전 과정 AI 자동화</p>
            </div>

            {/* Region Markers */}
            <div className="flex-1 relative z-10">
                {regions.map((region, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{ top: region.position.top, left: region.position.left }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (i * 0.2), type: "spring" }}
                    >
                        <div className="relative">
                            {/* Pulse Effect */}
                            <div className="absolute -inset-4 bg-sage-400 rounded-full animate-ping opacity-20" />

                            {/* Marker */}
                            <div className="relative bg-sage-600 px-4 py-2 rounded-lg border border-sage-400 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <Globe size={16} className="text-sage-300" />
                                    <span className="font-semibold text-sm">{region.name}</span>
                                </div>
                                <div className="flex items-center gap-1 text-green-400 text-xs mt-1">
                                    <TrendingUp size={12} />
                                    <span>{region.growth}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Stats */}
            <div className="flex justify-around z-10 mt-8">
                {[
                    { label: "Global Markets", value: "12+" },
                    { label: "Automation Rate", value: "94%" },
                    { label: "Cost Reduction", value: "-35%" }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + (i * 0.1) }}
                    >
                        <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-sage-400 text-sm uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
