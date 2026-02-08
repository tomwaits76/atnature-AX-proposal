"use client";
import { motion } from "framer-motion";
import { Brain, Search, ImageIcon, Sparkles } from "lucide-react";

export default function Slide17_AITips() {
    const tips = [
        {
            icon: Brain,
            title: "사고 모드",
            description: "Gemini의 작동 모드를 '사고 모드'로 설정하면, 보다 깊은 수준의 답변을 출력합니다."
        },
        {
            icon: Search,
            title: "딥 리서치",
            description: "Gemini 도구 'Deep Research'로 실시간 검색 기반 심층 연구 보고서를 받을 수 있습니다."
        },
        {
            icon: ImageIcon,
            title: "이미지",
            description: "Gemini 도구 '이미지 생성하기'로 인포그래픽, 그래프, 샘플 이미지 등을 만들 수 있습니다."
        }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-50 p-20 flex flex-col relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#4A614F 1px, transparent 1px), linear-gradient(90deg, #4A614F 1px, transparent 1px)', backgroundSize: '50px 50px' }}
            />

            {/* Header */}
            <motion.div
                className="z-10 mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-200 text-sage-800 rounded-full text-sm font-semibold mb-6">
                    <Sparkles size={16} />
                    부록
                </div>
                <h2 className="text-5xl font-bold text-sage-900 mb-6">앳네이처 AI 컨설턴트 활용 팁</h2>
                <p className="text-2xl text-sage-600 font-light">Gemini의 다양한 기능을 활용하여 더욱 풍부한 인사이트를 얻으세요</p>
            </motion.div>

            {/* Tips Cards */}
            <div className="flex-1 flex items-center justify-center z-10">
                <div className="grid grid-cols-3 gap-12 max-w-6xl">
                    {tips.map((tip, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.2) }}
                            className="bg-white rounded-3xl p-10 shadow-lg border border-sage-100 flex flex-col items-center text-center h-[420px]"
                        >
                            {/* Icon */}
                            <div className="w-24 h-24 bg-sage-100 rounded-2xl flex items-center justify-center mb-8 text-sage-600">
                                <tip.icon size={48} />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-sage-900 mb-6">{tip.title}</h3>

                            {/* Description */}
                            <p className="text-lg text-sage-600 leading-relaxed flex-1 flex items-center">{tip.description}</p>

                            {/* Visual Indicator */}
                            <div className="w-16 h-1 bg-sage-200 rounded-full mt-6" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
