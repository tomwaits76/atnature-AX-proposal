"use client";
import { motion } from "framer-motion";
import { RefreshCw, Sparkles, Database, Package } from "lucide-react";

export default function Slide9_Subscription() {
    const cycleSteps = [
        { icon: Sparkles, label: "AI 큐레이션", color: "bg-sage-200" },
        { icon: Package, label: "맞춤 판매 &\n배송", color: "bg-sage-300" },
        { icon: RefreshCw, label: "피드백 &\n재구독", color: "bg-sage-400" },
        { icon: Database, label: "고객 데이터", color: "bg-sage-500" },
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
                    <div className="inline-block px-4 py-2 bg-sage-200 text-sage-800 rounded-full text-sm font-semibold mb-6">외연 확장</div>
                    <h2 className="text-5xl font-bold text-sage-900 mb-6 leading-tight">맞춤형 고객 경험 기반 구독 모델</h2>
                    <h3 className="text-2xl text-sage-600 mb-12 font-light">고객 취향과 소비 패턴 학습 기반의 맞춤형 구독 체계,<br />데이터와 피드백을 반영한 향기 큐레이션</h3>

                    <div className="space-y-6">
                        <div className="p-6 bg-white border-l-4 border-sage-500 shadow-sm">
                            <p className="text-lg text-sage-800">단발성 판매를 넘어 정기 매출이 발생하는 안정적인 수익 모델 장착</p>
                        </div>
                        <div className="p-6 bg-white border-l-4 border-sage-500 shadow-sm">
                            <p className="text-lg text-sage-800">초개인화된 경험으로 이탈을 막고 브랜드에 대한 강력한 충성도 확보</p>
                        </div>
                        <div className="p-6 bg-white border-l-4 border-sage-500 shadow-sm">
                            <p className="text-lg text-sage-800">예측 가능한 물류 기반에서 재고 관리와 배송 효율을 높여 운영비 절감</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right Infographic: LTV Loop */}
            <div className="w-1/2 z-10 flex items-center justify-center pl-12 relative">
                <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                    {/* Central LTV Core */}
                    <motion.div
                        className="absolute z-20 w-40 h-40 bg-sage-600 rounded-full flex flex-col items-center justify-center text-white shadow-2xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                    >
                        <div className="text-3xl font-bold">LTV ↑</div>
                        <div className="text-sm font-light mt-1">Growth Cycle</div>
                    </motion.div>

                    {/* Orbiting Steps */}
                    {cycleSteps.map((step, i) => {
                        const deg = (i * 360) / cycleSteps.length;
                        return (
                            <motion.div
                                key={i}
                                className={`absolute w-32 h-32 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-lg border-2 border-white ${step.color}`}
                                style={{
                                    transformOrigin: "center center",
                                }}
                                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: Math.cos((deg - 90) * (Math.PI / 180)) * 180,
                                    y: Math.sin((deg - 90) * (Math.PI / 180)) * 180
                                }}
                                transition={{ delay: i * 0.2, duration: 0.5 }}
                            >
                                <step.icon size={28} className="mb-3 text-sage-800" />
                                <span className="text-sage-900 font-semibold text-sm leading-tight whitespace-pre-line">{step.label}</span>

                                {/* Connecting Arrow */}
                                <motion.div
                                    className="absolute top-1/2 -right-8 w-8 h-8 text-sage-400"
                                    style={{ transform: `rotate(${deg + 45}deg)` }}
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    ➔
                                </motion.div>
                            </motion.div>
                        );
                    })}

                    {/* Active Pulse Animations - 2 pulses: 0s, +1.5s 간격으로 3초 주기 반복 */}
                    <div className="absolute inset-0 rounded-full border border-sage-300 animate-[ping_3s_linear_infinite] opacity-30" />
                    <div
                        className="absolute inset-0 rounded-full border border-sage-300 animate-[ping_3s_linear_infinite] opacity-30"
                        style={{ animationDelay: '1.5s' }}
                    />
                </div>
            </div>
        </div>
    );
}
