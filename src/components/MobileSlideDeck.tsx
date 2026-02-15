"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
import Slide17_AITips from "@/components/slides/Slide17_AITips";
import Slide18_Closing from "@/components/slides/Slide18_Closing";

const SLIDE_COUNT = 18;
const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;
const NAV_BAR_HEIGHT = 56;

/**
 * 모바일 전용 슬라이드 덱 컴포넌트 (v6).
 * PC SlideDeck.tsx와 완전 독립.
 *
 * v6 변경점:
 * - Fullscreen API / Scroll trick 완전 제거 (iOS 미지원)
 * - 핀치줌 차단 (viewport 복원) → resize 간섭 제거
 * - orientationchange 전용 재계산 (다중 지연)
 * - 멀티터치 감지로 swipe 오작동 방지
 * - 배경색 sage-200으로 슬라이드 테두리 구분
 * - Print 버튼 PC 스타일 통일
 */
export default function MobileSlideDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scale, setScale] = useState(0.2);
    const containerRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const isMultiTouch = useRef(false);
    const lastInputTime = useRef(0);
    const INPUT_THROTTLE_MS = 300;

    const nextSlide = useCallback(() => {
        const now = Date.now();
        if (now - lastInputTime.current < INPUT_THROTTLE_MS) return;
        lastInputTime.current = now;
        setCurrentSlide((prev) => (prev < SLIDE_COUNT - 1 ? prev + 1 : prev));
    }, []);

    const prevSlide = useCallback(() => {
        const now = Date.now();
        if (now - lastInputTime.current < INPUT_THROTTLE_MS) return;
        lastInputTime.current = now;
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    /**
     * 스케일 계산.
     * document.documentElement.clientWidth를 사용하여 핀치줌에 불변.
     */
    const calculateScale = useCallback(() => {
        const vw = document.documentElement.clientWidth;
        const vh = document.documentElement.clientHeight - NAV_BAR_HEIGHT;
        const scaleX = vw / SLIDE_WIDTH;
        const scaleY = vh / SLIDE_HEIGHT;
        setScale(Math.min(scaleX, scaleY));
    }, []);

    // 초기화 + 방향 전환 전용 핸들링
    useEffect(() => {
        calculateScale();

        // 방향 전환 시 다중 지연 재계산 (Chrome 호환)
        const handleOrientationChange = () => {
            setTimeout(calculateScale, 100);
            setTimeout(calculateScale, 300);
            setTimeout(calculateScale, 600);
        };

        // screen.orientation API (primary) + orientationchange (fallback)
        if (screen.orientation) {
            screen.orientation.addEventListener("change", handleOrientationChange);
        }
        window.addEventListener("orientationchange", handleOrientationChange);

        return () => {
            if (screen.orientation) {
                screen.orientation.removeEventListener("change", handleOrientationChange);
            }
            window.removeEventListener("orientationchange", handleOrientationChange);
        };
    }, [calculateScale]);

    /**
     * PDF 인쇄 핸들러.
     */
    const handlePrint = useCallback(() => {
        window.print();
    }, []);

    // 스와이프 제스처 — 멀티터치 감지 포함
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (e.touches.length > 1) {
            isMultiTouch.current = true;
            return;
        }
        isMultiTouch.current = false;
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        // 멀티터치 전환 감지 (1점 → 2점 추가)
        if (e.touches.length > 1) {
            isMultiTouch.current = true;
        }
    }, []);

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        // 멀티터치였으면 swipe 무시
        if (isMultiTouch.current) {
            isMultiTouch.current = false;
            return;
        }

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX.current;
        const deltaY = touchEndY - touchStartY.current;

        // 수평 스와이프만 인식 (수직 무시)
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
            if (deltaX < 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }, [nextSlide, prevSlide]);

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
            case 16: return <Slide17_AITips />;
            case 17: return <Slide18_Closing />;
            default: return null;
        }
    };

    const scaledWidth = SLIDE_WIDTH * scale;
    const scaledHeight = SLIDE_HEIGHT * scale;

    return (
        <>
            {/* Main Interactive View */}
            <div
                className="fixed inset-0 flex flex-col bg-sage-200 no-print"
                style={{ height: "100dvh" }}
            >
                {/* 슬라이드 영역 */}
                <div
                    ref={containerRef}
                    className="flex-1 overflow-hidden flex items-center justify-center"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ minHeight: 0 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{
                                width: scaledWidth,
                                height: scaledHeight,
                                overflow: "hidden",
                                flexShrink: 0,
                            }}
                            className="relative shadow-2xl ring-1 ring-sage-300"
                        >
                            <div
                                style={{
                                    width: SLIDE_WIDTH,
                                    height: SLIDE_HEIGHT,
                                    transform: `scale(${scale})`,
                                    transformOrigin: "top left",
                                }}
                                className="bg-white overflow-hidden"
                            >
                                {renderSlide(currentSlide)}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 하단 네비게이션 */}
                <nav
                    className="flex items-center justify-center gap-3 bg-white/95 backdrop-blur-md border-t border-sage-200 shadow-lg"
                    style={{
                        minHeight: NAV_BAR_HEIGHT,
                        paddingBottom: "env(safe-area-inset-bottom, 0px)",
                    }}
                >
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="flex items-center justify-center w-11 h-11 rounded-full bg-sage-100 active:bg-sage-300 text-sage-700 disabled:opacity-30 transition-colors"
                        aria-label="이전 슬라이드"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <div className="flex items-center gap-2 px-3">
                        <span className="font-mono text-sm font-semibold text-sage-700">
                            {String(currentSlide + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sage-300">/</span>
                        <span className="font-mono text-sm text-sage-500">
                            {String(SLIDE_COUNT).padStart(2, "0")}
                        </span>
                    </div>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === SLIDE_COUNT - 1}
                        className="flex items-center justify-center w-11 h-11 rounded-full bg-sage-100 active:bg-sage-300 text-sage-700 disabled:opacity-30 transition-colors"
                        aria-label="다음 슬라이드"
                    >
                        <ChevronRight size={22} />
                    </button>

                    {/* Print 버튼 — PC와 동일 스타일 */}
                    <button
                        onClick={handlePrint}
                        className="flex items-center justify-center w-11 h-11 rounded-full bg-sage-600 active:bg-sage-700 text-white shadow-sm ml-2 transition-colors"
                        aria-label="PDF로 저장"
                        title="PDF로 저장"
                    >
                        <Printer size={18} />
                    </button>
                </nav>
            </div>

            {/* Print-Only Container */}
            <div className="print-only">
                {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
                    <div key={index} className="slide-container">
                        {renderSlide(index)}
                    </div>
                ))}
            </div>
        </>
    );
}
