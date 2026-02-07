"use client";
import { motion } from "framer-motion";
import { Bot, FileText, Share2 } from "lucide-react";

export default function Slide13_MultiAgent() {
    return (
        <div className="w-[1920px] h-[1080px] bg-white p-20 flex relative overflow-hidden">
            {/* Left Content */}
            <div className="w-1/2 z-10 flex flex-col justify-center pr-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-semibold mb-6">핵심 기재 : 기술 혁신</div>
                    <h2 className="text-5xl font-bold text-sage-900 mb-6 leading-tight">멀티 AI 에이전트 분업</h2>
                    <h3 className="text-2xl text-sage-600 mb-12 font-light">각 직군별로 특화된 전문 에이전트를 다수 배치하는<br />분업 체계를 전제한 협업 프로세스 환경</h3>

                    <div className="space-y-8">
                        {[
                            { title: "Task Division", text: "전체 업무를 세부 과업으로 분할하고 개별 에이전트에 고유한 역할을 배분" },
                            { title: "Dynamic RAG", text: "각 분야별 전문 지식과 가이드라인을 동적 RAG 방식으로 구성하여 이식" },
                            { title: "Collaboration", text: "에이전트끼리 상호 검증하고 보완하는 프로세스로 완결형 워크플로우 구현" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-6 h-6 border-2 border-sage-500 rounded-full flex items-center justify-center text-[10px] font-bold text-sage-500">{idx + 1}</div>
                                    {idx < 2 && <div className="w-[1px] h-full bg-sage-200 mt-2" />}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-sage-800 mb-1">{item.title}</h4>
                                    <p className="text-lg text-sage-600">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Infographic: Agent Network */}
            <div className="w-1/2 z-10 flex items-center justify-center pl-12 bg-sage-50/50 rounded-3xl m-4">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Central Node */}
                    <motion.div
                        className="absolute w-32 h-32 bg-sage-600 rounded-full flex flex-col items-center justify-center text-white z-20 shadow-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.5 }}
                    >
                        <Share2 size={32} />
                        <span className="text-sm font-bold mt-2">Swarm<br />Core</span>
                    </motion.div>

                    {/* Agents */}
                    {[
                        { role: "Designer", pos: "-translate-y-40 -translate-x-20", color: "border-purple-300 bg-purple-50" },
                        { role: "Developer", pos: "-translate-y-20 translate-x-40", color: "border-blue-300 bg-blue-50" },
                        { role: "Marketer", pos: "translate-y-30 translate-x-30", color: "border-orange-300 bg-orange-50" },
                        { role: "Analyst", pos: "translate-y-40 -translate-x-30", color: "border-green-300 bg-green-50" },
                    ].map((agent, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-lg text-sage-800 z-10 transform ${agent.pos} border-2 ${agent.color}`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + (i * 0.2) }}
                        >
                            <Bot size={28} className="mb-2 text-sage-600" />
                            <span className="text-sm font-bold tracking-wide">{agent.role}</span>


                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none -z-10">
                                <line x1="50%" y1="50%" x2="50%" y2="50%" stroke="#CFDFD4" strokeWidth="2" style={{ transformOrigin: "center" }} />
                                {/* Note: SVG lines from center wrapper would be cleaner, but absolute positioning works for visual approximation */}
                            </svg>
                        </motion.div>
                    ))}

                    {/* Floating Knowledge Nodes (RAG) */}
                    {[1, 2, 3].map((n) => (
                        <motion.div
                            key={n}
                            className="absolute bg-sage-100 p-2 rounded text-sage-400"
                            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, delay: n, repeat: Infinity }}
                            style={{ top: `${20 + n * 20}%`, left: `${10 + n * 20}%` }}
                        >
                            <FileText size={16} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
