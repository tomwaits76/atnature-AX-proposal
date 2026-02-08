"use client";
import { motion } from "framer-motion";
import { Bot, FileText, Share2, PenTool, Terminal, Target, BarChart3, Settings, Users } from "lucide-react";

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
                    <div className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-semibold mb-6">기술 혁신</div>
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

            {/* Right Infographic: Hexagon Swarm Structure */}
            <div className="w-1/2 z-10 flex items-center justify-center pl-12">
                <div className="relative w-[660px] h-[660px] flex items-center justify-center -mt-12" style={{ transform: 'scale(1.2)' }}>
                    {/* Connecting Lines - 육각형 등장 후 순차 애니메이션 */}
                    <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0" viewBox="0 0 660 660">
                        {/* 중앙 육각형 꼭지점 (중심: 330, 330, 반경: 80) */}
                        {[
                            { x1: 330, y1: 250, x2: 330, y2: 180, label: "Designer" },
                            { x1: 400, y1: 290, x2: 491, y2: 265, label: "Developer" }, // Developer 육각형 하단 꼬지점으로 복원
                            { x1: 400, y1: 370, x2: 460, y2: 430, label: "Marketer" },
                            { x1: 330, y1: 410, x2: 330, y2: 480, label: "Analyst" },
                            { x1: 260, y1: 370, x2: 200, y2: 430, label: "Operator" },
                            { x1: 260, y1: 290, x2: 200, y2: 220, label: "Manager" },
                        ].map((line, i) => (
                            <motion.line
                                key={i}
                                x1={line.x1}
                                y1={line.y1}
                                x2={line.x2}
                                y2={line.y2}
                                stroke="#5e8c61"
                                strokeWidth="2"
                                strokeDasharray="15 15"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ delay: [0.8, 1.0, 1.2, 1.3, 1.4, 1.5][i], duration: 0.5 }}
                            />
                        ))}
                    </svg>

                    {/* Central Core: Shared Goal */}
                    <motion.div
                        className="absolute w-40 h-40 bg-sage-600 clip-path-hexagon flex flex-col items-center justify-center text-white z-20 shadow-2xl"
                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} // CSS Hexagon
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        <Share2 size={36} className="mb-2" />
                        <span className="text-sm font-bold leading-tight text-center">Shared<br />Goal</span>
                    </motion.div>

                    {/* Surrounding Agents (Hexagons) - Uniform circular spacing */}
                    {[
                        { role: "Designer", icon: PenTool, angle: 0, color: "bg-purple-100 text-purple-900" },
                        { role: "Developer", icon: Terminal, angle: 60, color: "bg-blue-100 text-blue-900" },
                        { role: "Marketer", icon: Target, angle: 120, color: "bg-orange-100 text-orange-900" },
                        { role: "Analyst", icon: BarChart3, angle: 180, color: "bg-green-100 text-green-900" },
                        { role: "Operator", icon: Settings, angle: 240, color: "bg-red-100 text-red-900" },
                        { role: "Manager", icon: Users, angle: 300, color: "bg-yellow-100 text-yellow-900" },
                    ].map((agent, i) => {
                        // Vertex-based positioning: center hex vertex + gap + outer hex opposing vertex offset
                        const gap = 35; // gap between center vertex and outer hex vertex
                        const outerHexHalfH = 64; // half of outer hex height (128/2)
                        const positions = [
                            { x: 0, y: -(80 + gap + outerHexHalfH) }, // Top
                            { x: 70 + gap + 56, y: -(40 + gap / 2 + 32) }, // Top Right
                            { x: 70 + gap + 56, y: 40 + gap / 2 + 32 }, // Bottom Right
                            { x: 0, y: 80 + gap + outerHexHalfH }, // Bottom
                            { x: -(70 + gap + 56), y: 40 + gap / 2 + 32 }, // Bottom Left
                            { x: -(70 + gap + 56), y: -(40 + gap / 2 + 32) }, // Top Left
                        ];
                        return (
                            <motion.div
                                key={i}
                                className={`absolute w-32 h-32 ${agent.color} flex flex-col items-center justify-center z-10 shadow-lg`}
                                style={{
                                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                    x: positions[i].x,
                                    y: positions[i].y
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                whileHover={{ scale: 1.1, zIndex: 30 }}
                            >
                                <agent.icon size={28} className="mb-2 opacity-80" />
                                <span className="text-xs font-bold">{agent.role}</span>
                            </motion.div>
                        );
                    })}

                    {/* Floating Knowledge Nodes - Developer 연결선(1.0s)과 함께 시작, 순차 등장 */}
                    {[
                        { x: -250, y: -200, delay: 1.0 },
                        { x: 150, y: -250, delay: 1.1 }, // 왼쪽으로 이동 (250→150)
                        { x: 280, y: 0, delay: 1.2 },
                        { x: -280, y: 120, delay: 1.3 },
                        { x: 200, y: 200, delay: 1.4 },
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-sage-400 rounded-full"
                            style={{ x: node.x, y: node.y }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.6, scale: 1, y: [node.y, node.y - 10, node.y] }}
                            transition={{
                                opacity: { delay: node.delay, duration: 0.3 },
                                scale: { delay: node.delay, duration: 0.3 },
                                y: { duration: 2, repeat: Infinity, delay: node.delay, ease: "easeInOut" }
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
