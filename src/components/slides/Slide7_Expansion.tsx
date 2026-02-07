"use client";
import { motion } from "framer-motion";

export default function Slide7_Expansion() {
    return (
        <div className="w-[1920px] h-[1080px] bg-sage-50 flex flex-col items-center justify-center p-20 relative text-sage-900 text-center overflow-hidden">
            {/* Background Shapes */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[50%] -right-[50%] w-[150%] h-[150%] border border-sage-200 rounded-full border-dashed opacity-50 pointer-events-none"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="z-10 bg-white/90 backdrop-blur-2xl p-20 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white/50 ring-1 ring-sage-100"
            >
                <span className="text-sage-500 text-2xl font-medium tracking-widest mb-6 block uppercase">Phase 02</span>
                <h2 className="text-7xl font-bold mb-8 text-sage-800">다음 단계 : 외연 확장</h2>
                <p className="text-3xl text-sage-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
                    강화된 역량을 발판으로 수익 모델을 다각화하고<br />
                    해외 시장을 적극적으로 개척, <span className="font-semibold text-sage-800">앳네이처의 웰니스 생태계를 전파</span>
                </p>

                <div className="grid grid-cols-3 gap-8 text-center">
                    {["지능형 공간 디자인 소프트웨어", "맞춤형 고객 경험 기반 구독 모델", "적응형 글로벌 부스팅 엔진"].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (idx * 0.2) }}
                            className="border-t-2 border-sage-300 pt-6"
                        >
                            <span className="text-xl text-sage-700 font-medium">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
