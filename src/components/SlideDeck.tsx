"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Printer } from "lucide-react";
import Slide1_Title from "@/components/slides/Slide1_Title";
import Slide2_Definitions from "@/components/slides/Slide2_Definitions";
import Slide3_CapacityBuilding from "@/components/slides/Slide3_CapacityBuilding";
import Slide4_NativeDev from "@/components/slides/Slide4_NativeDev";
import Slide5_DataMarketing from "@/components/slides/Slide5_DataMarketing";
import Slide6_OpsAutomation from "@/components/slides/Slide6_OpsAutomation";
import Slide7_Expansion from "@/components/slides/Slide7_Expansion";
import Slide8_SpaceDesign from "@/components/slides/Slide8_SpaceDesign";
import Slide9_Subscription from "@/components/slides/Slide9_Subscription";
import Slide10_GlobalBoosting from "@/components/slides/Slide10_GlobalBoosting";
import Slide11_TechInnovation from "@/components/slides/Slide11_TechInnovation";
import Slide12_DataSovereignty from "@/components/slides/Slide12_DataSovereignty";
import Slide13_MultiAgent from "@/components/slides/Slide13_MultiAgent";
import Slide14_Orchestration from "@/components/slides/Slide14_Orchestration";
import Slide15_Conclusion from "@/components/slides/Slide15_Conclusion";
import Slide16_Appendix from "@/components/slides/Slide16_Appendix";
import Slide17_Closing from "@/components/slides/Slide17_Closing";

const SLIDE_COUNT = 17;

export default function SlideDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [printMode, setPrintMode] = useState(false);

    const handlePrint = useCallback(() => {
        window.print();
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev < SLIDE_COUNT - 1 ? prev + 1 : prev));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (printMode) return;

            // Don't trigger slide change when typing in an input or pressing Enter/Space on a button/link
            const activeElement = document.activeElement;
            const isInteractive =
                activeElement instanceof HTMLAnchorElement ||
                activeElement instanceof HTMLButtonElement ||
                activeElement instanceof HTMLInputElement ||
                activeElement instanceof HTMLTextAreaElement;

            if (isInteractive && (e.key === "Enter" || e.key === " ")) return;

            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                prevSlide();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide, printMode]);

    const renderSlide = (index: number) => {
        switch (index) {
            case 0: return <Slide1_Title />;
            case 1: return <Slide2_Definitions />;
            case 2: return <Slide3_CapacityBuilding />;
            case 3: return <Slide4_NativeDev />;
            case 4: return <Slide5_DataMarketing />;
            case 5: return <Slide6_OpsAutomation />;
            case 6: return <Slide7_Expansion />;
            case 7: return <Slide8_SpaceDesign />;
            case 8: return <Slide9_Subscription />;
            case 9: return <Slide10_GlobalBoosting />;
            case 10: return <Slide11_TechInnovation />;
            case 11: return <Slide12_DataSovereignty />;
            case 12: return <Slide13_MultiAgent />;
            case 13: return <Slide14_Orchestration />;
            case 14: return <Slide15_Conclusion />;
            case 15: return <Slide16_Appendix />;
            case 16: return <Slide17_Closing />;
            default: return null;
        }
    };

    if (printMode) {
        return (
            <div className="bg-white min-h-screen">
                <div className="fixed top-4 right-4 z-50 no-print">
                    <button
                        onClick={handlePrint}
                        className="bg-sage-600 text-white px-4 py-2 rounded shadow hover:bg-sage-700 mr-2"
                    >
                        Save as PDF
                    </button>
                    <button
                        onClick={() => setPrintMode(false)}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-300"
                    >
                        Close Print Mode
                    </button>
                </div>
                <div className="space-y-0">
                    {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
                        <div key={index} className="w-[1920px] h-[1080px] overflow-hidden relative slide-container">
                            {renderSlide(index)}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-sage-50 text-sage-900">
            {/* Navigation Controls */}
            <div className="absolute bottom-8 right-8 z-50 flex items-center space-x-4 bg-white/80 backdrop-blur-md border border-sage-200 p-3 rounded-full shadow-lg transition-all duration-300">
                <button onClick={prevSlide} disabled={currentSlide === 0} className="p-2 rounded-full bg-sage-100 hover:bg-sage-200 text-sage-700 disabled:opacity-30 transition-colors">
                    <ChevronLeft size={20} />
                </button>
                <div className="flex items-center space-x-2 px-2 border-x border-sage-200">
                    <span className="font-mono text-sm font-semibold text-sage-700">{String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className="text-sage-300">/</span>
                    <span className="font-mono text-sm text-sage-500">{String(SLIDE_COUNT).padStart(2, '0')}</span>
                </div>
                <button onClick={nextSlide} disabled={currentSlide === SLIDE_COUNT - 1} className="p-2 rounded-full bg-sage-100 hover:bg-sage-200 text-sage-700 disabled:opacity-30 transition-colors">
                    <ChevronRight size={20} />
                </button>
                <button onClick={() => setPrintMode(true)} className="p-2 rounded-full bg-sage-600 hover:bg-sage-700 text-white shadow-sm ml-2 transition-all hover:scale-110" title="Print Mode">
                    <Printer size={20} />
                </button>
            </div>

            {/* Slide Display */}
            <div className="w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full h-full max-w-[1920px] max-h-[1080px] relative bg-white shadow-2xl overflow-hidden"
                    >
                        {renderSlide(currentSlide)}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
