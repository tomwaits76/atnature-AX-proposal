"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide17_AITips() {
    const tips = [
        {
            title: "사고 모드",
            description: "Gemini의 작동 모드를 '사고 모드'로 설정하면, 보다 깊은 수준의 답변을 출력합니다.",
            image: "/images/atnature_Slide_17_thinking mode.png"
        },
        {
            title: "딥 리서치",
            description: "Gemini 도구 'Deep Research'로 실시간 검색 기반 심층 연구 보고서를 받을 수 있습니다.",
            image: "/images/atnature_Slide_17_deep research.png"
        },
        {
            title: "이미지",
            description: "Gemini 도구 '이미지 생성하기'로 인포그래픽, 그래프, 샘플 이미지 등을 만들 수 있습니다.",
            image: "/images/atnature_Slide_17_Image gen.png"
        }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-50 flex flex-col items-center justify-center p-20 relative overflow-hidden">
            <motion.div
                className="z-10 w-full max-w-7xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-12 border-b border-sage-200 pb-6 -mt-16">
                    <h2 className="text-4xl font-bold text-sage-900">앳네이처 AI 컨설턴트 활용 팁</h2>
                    <span className="text-sage-500 text-xl font-light">Tips</span>
                </div>

                {/* Tips Cards */}
                <div className="grid grid-cols-3 gap-24 mt-8">
                    {tips.map((tip, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.15) }}
                            className="bg-white rounded-2xl border border-sage-200 shadow-lg overflow-hidden flex flex-col"
                        >
                            {/* Image Area */}
                            <div className="w-full h-56 bg-sage-100 relative">
                                <Image
                                    src={tip.image}
                                    alt={tip.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-sage-900">{tip.title}</h3>
                                <p className="text-lg text-sage-600 leading-relaxed">{tip.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
