"use client";
import { motion } from "framer-motion";
import { RefreshCw, Heart, TrendingUp, Package } from "lucide-react";

export default function Slide9_Subscription() {
    const cycleSteps = [
        { icon: Heart, label: "취향/소비 분석", color: "bg-sage-200" },
        { icon: Package, label: "맞춤 큐레이션 & 배송", color: "bg-sage-300" },
        { icon: RefreshCw, label: "피드백 & 재구독", color: "bg-sage-400" },
        { icon: TrendingUp, label: "충성도 강화", color: "bg-sage-500" },
    ];

    return (
        <div className="w-full h-full bg-sage-50 p-20 flex relative overflow-hidden">
            {/* Left Content */}
            <div className="w-1/2 z-10 flex flex-col justify-center pr-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-sage-200 text-sage-800 rounded-full text-sm font-semibold mb-6">다음 단계 : 외연 확장</div>
                    <h2 className="text-5xl font-bold text-sage-900 mb-6 leading-tight">맞춤형 고객 경험 기반<br />구독 모델</h2>
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

            {/* Right Infographic: Subscription Cycle */}
            <div className="w-1/2 z-10 flex items-center justify-center pl-12">
                <div className="relative w-[500px] h-[500px]">
                    {cycleSteps.map((step, i) => {
                        const angle = (i * 360) / cycleSteps.length;
                        const radius = 180;
                        const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                        const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

                        return (
                            <motion.div
                                key={i}
                                className={`absolute w-32 h-32 rounded-full ${step.color} flex flex-col items-center justify-center shadow-lg text-sage-900 z-10`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1, x, y }}
                                transition={{ delay: 0.4 + (i * 0.2), duration: 0.6 }}
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    marginTop: -64,
                                    marginLeft: -64
                                }}
                            >
                                <step.icon size={32} className="mb-2" />
                                <span className="text-xs font-bold text-center px-2">{step.label}</span>
                            </motion.div>
                        );
                    })}

                    {/* Center Circle */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-sage-200 z-0"
                        style={{ transform: 'translate(-50%, -50%)' }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2, type: "spring" }}
                    >
                        <span className="font-bold text-sage-600">Recurring<br />Revenue</span>
                    </motion.div>

                    {/* Connecting Circle Line */}
                    <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
                        <circle cx="50%" cy="50%" r="180" fill="none" stroke="#CFDFD4" strokeWidth="20" strokeOpacity="0.3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
