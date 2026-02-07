"use client";
import { motion } from "framer-motion";

export default function Slide17_Closing() {
    return (
        <div className="w-[1920px] h-[1080px] bg-sage-800 flex flex-col items-center justify-center p-20 relative text-white text-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-sage-900 to-sage-900" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="z-10"
            >
                <h2 className="text-4xl font-light mb-12 leading-relaxed text-sage-200">
                    짧은 지식이나마 도움이 되시기를 바라는 마음에 정리했습니다.<br />
                    모쪼록 가시는 길, 늘 건승하시기 바랍니다.
                </h2>

                <div className="w-20 h-1 bg-sage-500 mx-auto my-12" />

                <h1 className="text-7xl font-light mb-6 text-sage-200">고맙습니다.</h1>
                <p className="text-sage-300 mt-8 text-xl font-medium tracking-widest uppercase opacity-80">ATNATURE. x AX Strategy Proposal</p>
            </motion.div>
        </div>
    );
}
