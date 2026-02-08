"use client";
import { motion } from "framer-motion";
import { Share2, PenTool, Terminal, Target, BarChart3, Settings, Users } from "lucide-react";

export default function Slide13_MultiAgent() {
    const content = [
        { icon: Share2, text: "단독으로 작업을 처리하던 ChatGPT와 같은 AI가 협업하여 복잡한 업무를 수행" },
        { icon: Target, text: "채용/고용/용역 컨트롤 대비 탁월한 관리 가능성과 비용 효율" },
        { icon: BarChart3, text: "각 분야에 특성화된 역할들이 유기적으로 협업하여 결과물의 품질 극대화" }
    ];

    // Hexagon vertex calculation helpers
    // Central hexagon: center (300, 300), size 160x160
    // Vertices (clockwise from top): 
    // 0: top (300, 220), 1: top-right (370, 260), 2: bottom-right (370, 340)
    // 3: bottom (300, 380), 4: bottom-left (230, 340), 5: top-left (230, 260)
    const centerHexVertices = [
        { x: 300, y: 220 },  // top
        { x: 370, y: 260 },  // top-right
        { x: 370, y: 340 },  // bottom-right
        { x: 300, y: 380 },  // bottom
        { x: 230, y: 340 },  // bottom-left
        { x: 230, y: 260 }   // top-left
    ];

    // Gap between vertices: 50px
    const vertexGap = 50;

    // Surrounding hexagons positioned based on center hex vertices + gap
    const surroundingAgents = [
        { role: "Designer", icon: PenTool, vertexIndex: 0, color: "bg-purple-100 text-purple-900" },   // top
        { role: "Developer", icon: Terminal, vertexIndex: 1, color: "bg-blue-100 text-blue-900" },    // top-right
        { role: "Marketer", icon: Target, vertexIndex: 2, color: "bg-orange-100 text-orange-900" },   // bottom-right
        { role: "Analyst", icon: BarChart3, vertexIndex: 3, color: "bg-green-100 text-green-900" },   // bottom
        { role: "Operator", icon: Settings, vertexIndex: 4, color: "bg-red-100 text-red-900" },       // bottom-left
        { role: "Manager", icon: Users, vertexIndex: 5, color: "bg-yellow-100 text-yellow-900" }      // top-left
    ];

    // Calculate surrounding hexagon positions (facing vertex towards center)
    const getAgentPosition = (vertexIndex: number) => {
        const centerVertex = centerHexVertices[vertexIndex];
        const centerX = 300, centerY = 300;

        // Direction from center to vertex
        const dx = centerVertex.x - centerX;
        const dy = centerVertex.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Normalize and extend by vertexGap + half of surrounding hex size (64px)
        const extendDist = vertexGap + 64;
        const nx = dx / dist;
        const ny = dy / dist;

        return {
            x: centerVertex.x + nx * extendDist - 64,  // offset by half width (64)
            y: centerVertex.y + ny * extendDist - 64   // offset by half height (64)
        };
    };

    return (
        <div className="w-[1920px] h-[1080px] bg-sage-50 p-20 flex relative overflow-hidden">
            {/* Left Content */}
            <div className="w-1/2 z-10 flex flex-col justify-center pr-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-sage-200 text-sage-800 rounded-full text-sm font-semibold mb-6">기술 혁신</div>
                    <h2 className="text-5xl font-bold text-sage-900 mb-6 leading-tight">멀티 에이전트 아키텍처</h2>
                    <h3 className="text-2xl text-sage-600 mb-12 font-light">인간 조직 구조를 닮은 새로운 형태의 AI 협업 체계,<br />각자의 역할을 가진 AI들이 유기적으로 협업</h3>

                    <div className="space-y-8">
                        {content.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (idx * 0.2) }}
                                className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-sage-100"
                            >
                                <div className="p-3 bg-sage-100 rounded-full text-sage-600 mr-6">
                                    <item.icon size={24} />
                                </div>
                                <p className="text-lg text-sage-800 font-medium">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Infographic: Hexagon Swarm Structure */}
            <div className="w-1/2 z-10 flex items-center justify-center pl-12">
                <div className="relative w-[600px] h-[600px] flex items-center justify-center">
                    {/* Connecting Lines - vertex to vertex */}
                    <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0">
                        {surroundingAgents.map((agent, i) => {
                            const centerV = centerHexVertices[agent.vertexIndex];
                            const pos = getAgentPosition(agent.vertexIndex);
                            // Line from center vertex to facing vertex of surrounding hex
                            const facingX = pos.x + 64; // center of surrounding hex
                            const facingY = pos.y + 64;
                            return (
                                <line
                                    key={i}
                                    x1={centerV.x}
                                    y1={centerV.y}
                                    x2={facingX}
                                    y2={facingY}
                                    stroke="#5e8c61"
                                    strokeWidth="2"
                                    strokeDasharray="6 4"
                                />
                            );
                        })}
                    </svg>

                    {/* Central Core: Shared Goal */}
                    <motion.div
                        className="absolute w-40 h-40 bg-sage-600 flex flex-col items-center justify-center text-white z-20 shadow-2xl"
                        style={{
                            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)"
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        <Share2 size={36} className="mb-2" />
                        <span className="text-sm font-bold leading-tight text-center">Shared<br />Goal</span>
                    </motion.div>

                    {/* Surrounding Agents (Hexagons) - Vertex-aligned spacing */}
                    {surroundingAgents.map((agent, i) => {
                        const pos = getAgentPosition(agent.vertexIndex);
                        return (
                            <motion.div
                                key={i}
                                className={`absolute w-32 h-32 ${agent.color} flex flex-col items-center justify-center z-10 shadow-lg`}
                                style={{
                                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                    left: pos.x,
                                    top: pos.y
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
                </div>
            </div>
        </div>
    );
}
