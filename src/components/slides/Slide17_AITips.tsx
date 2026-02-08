"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Slide17_AITips() {
    const tips = [
        {
            title: "사고 모드",
            description: "Gemini의 작동 모드를 '사고 모드'로 설정하면, 보다 깊은 수준의 답변을 출력합니다.",
            imagePlaceholder: "사고 모드 설정 화면"
        },
        {
            title: "딥 리서치",
            description: "Gemini 도구 'Deep Research'로 실시간 검색 기반 심층 연구 보고서를 받을 수 있습니다.",
            imagePlaceholder: "딥 리서치 결과 예시"
        },
        {
            title: "이미지",
            description: "Gemini 도구 '이미지 생성하기'로 인포그래픽, 그래프, 샘플 이미지 등을 만들 수 있습니다.",
            imagePlaceholder: "이미지 생성 예시"
        }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-800 p-20 flex flex-col relative overflow-hidden text-white">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-900 via-sage-800 to-sage-700 opacity-50" />

            {/* Header */}
            <motion.div
                className="z-10 mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-6 border-b border-sage-600 pb-6">
                    <h2 className="text-4xl font-bold">앳네이처 AI 컨설턴트 활용 팁</h2>
                    <Sparkles size={24} className="text-sage-400" />
                </div>
                <p className="text-xl text-sage-300 font-light">Gemini의 다양한 기능을 활용하여 더욱 풍부한 인사이트를 얻으세요</p>
            </motion.div>

            {/* Tips Cards - Horizontal Layout with Image Placeholders */}
            <div className="flex-1 flex items-center justify-center z-10">
                <div className="grid grid-cols-3 gap-10 w-full max-w-7xl">
                    {tips.map((tip, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.15) }}
                            className="bg-gradient-to-b from-sage-700/80 to-sage-800/80 rounded-2xl border border-sage-600 shadow-xl overflow-hidden flex flex-col"
                        >
                            {/* Image Placeholder Area */}
                            <div className="w-full h-48 bg-sage-600/50 flex items-center justify-center border-b border-sage-600">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-sage-500/50 rounded-xl mx-auto mb-3 flex items-center justify-center">
                                        <div className="w-8 h-8 bg-sage-400/50 rounded-lg" />
                                    </div>
                                    <span className="text-sage-400 text-sm">{tip.imagePlaceholder}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-white">{tip.title}</h3>
                                <p className="text-lg text-sage-200 leading-relaxed flex-1">{tip.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer Note */}
            <motion.p
                className="text-sage-400 text-sm text-center z-10 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                * 각 항목에 해당하는 실제 참고 이미지를 추가하면 더욱 효과적입니다
            </motion.p>
        </div>
    );
}
