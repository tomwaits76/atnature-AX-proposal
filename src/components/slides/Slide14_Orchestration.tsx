"use client";
import { motion } from "framer-motion";
import { GitMerge, ShieldCheck, Activity } from "lucide-react";

export default function Slide14_Orchestration() {
    const features = [
        { icon: GitMerge, title: "Central Command", text: "공동의 목표를 중심으로 에이전트들을 관리, 중단 없는 실행 경로로 유도" },
        { icon: ShieldCheck, title: "Self-Regulation", text: "단일 판결 프로토콜을 적용하여 충돌 시에도 시스템이 스스로 판단하고 조율" },
        { icon: Activity, title: "Real-time Monitoring", text: "작업 현황을 실시간으로 감시하고 모든 결과물이 기준을 준수하도록 관리" }
    ];

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-900 p-20 flex flex-col items-center justify-center relative overflow-hidden text-white">
            {/* Background Beams */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sage-500 to-transparent opacity-20" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-sage-500 to-transparent opacity-20" />

            <div className="z-10 text-center mb-20 -mt-12">
                <div className="text-sage-400 text-sm font-semibold tracking-wider mb-6 uppercase">기술 혁신</div>
                <h2 className="text-5xl font-bold mb-6">AI 오케스트레이션 환경 구축</h2>
                <p className="text-2xl text-sage-200 font-light">데이터 신경망에 연결된 멀티 에이전트들이 상호 유기적으로<br />작동하기 위한 통합 지휘 체계</p>
            </div>

            <div className="grid grid-cols-3 gap-12 max-w-7xl z-10 mt-12">
                {features.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (i * 0.2) }}
                        className="bg-gradient-to-b from-sage-800 to-sage-900 p-8 rounded-2xl border border-sage-700 shadow-xl hover:border-sage-500 transition-colors group"
                    >
                        <div className="w-16 h-16 bg-sage-800 rounded-2xl flex items-center justify-center mb-6 text-sage-300 group-hover:text-white group-hover:bg-sage-600 transition-colors shadow-inner">
                            <item.icon size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-sage-100">{item.title}</h3>
                        <p className="text-lg text-sage-300 leading-relaxed font-light">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
