"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Slide17_AITips() {
    const tips = [
        {
            title: "사고 모드",
            description: "Gemini의 작동 모드를 '사고 모드'로 설정하면, 보다 깊은 수준의 답변을 출력합니다."
        },
        {
            title: "딥 리서치",
            description: "Gemini 도구 'Deep Research'로 실시간 검색 기반 심층 연구 보고서를 받을 수 있습니다."
        },
        {
            title: "이미지",
            description: "Gemini 도구 '이미지 생성하기'로 인포그래픽, 그래프, 샘플 이미지 등을 만들 수 있습니다."
        }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-50 p-20 flex flex-col relative overflow-hidden">
            {/* Header */}
            <motion.div
                className="z-10 mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-8 border-b border-sage-200 pb-6">
                    <h2 className="text-4xl font-bold text-sage-900">앳네이처 AI 컨설턴트 활용 팁</h2>
                    <Sparkles size={24} className="text-sage-500" />
                </div>
            </motion.div>

            {/* Tips Cards */}
            <div className="flex-1 flex items-center justify-center z-10">
                <div className="grid grid-cols-3 gap-16 w-full max-w-6xl">
                    {tips.map((tip, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.15) }}
                            className="bg-white rounded-2xl border border-sage-200 shadow-lg overflow-hidden flex flex-col"
                        >
                            {/* Image Placeholder Area */}
                            <div className="w-full h-48 bg-sage-100 flex items-center justify-center border-b border-sage-200">
                                <span className="text-sage-400 text-sm">이미지 영역</span>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-sage-900">{tip.title}</h3>
                                <p className="text-lg text-sage-600 leading-relaxed">{tip.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
