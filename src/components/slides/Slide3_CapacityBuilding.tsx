"use client";
import { motion } from "framer-motion";

export default function Slide3_CapacityBuilding() {
    return (
        <div className="w-[1920px] h-[1080px] bg-sage-800 flex flex-col items-center justify-center p-20 relative text-white text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <span className="text-sage-300 text-2xl font-medium tracking-widest mb-6 block uppercase">Phase 01</span>
                <h2 className="text-7xl font-bold mb-8">역량 강화</h2>
                <p className="text-3xl text-sage-200 max-w-4xl mx-auto leading-relaxed font-light">
                    AI 기술로 소프트웨어 개발 역량을 조직 안으로 흡수,<br />
                    사업 활동 전반을 통합 관리하고 자동화 운영 체계를 구축
                </p>

                <div className="mt-16 grid grid-cols-3 gap-8 text-center">
                    {["AI 네이티브 개발 환경 내재화", "데이터 주도 브랜딩/마케팅 최적화", "단일 대시보드 기반 운영 자동화"].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (idx * 0.2) }}
                            className="border border-sage-600 rounded-lg p-6 bg-sage-900/50 backdrop-blur-sm"
                        >
                            <span className="text-xl text-sage-100">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
