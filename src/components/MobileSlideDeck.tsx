"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Printer } from "lucide-react";
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
 * 모바일 전용 슬라이드 덱 컴포넌트.
 * PC의 SlideDeck.tsx와 완전히 독립된 컴포넌트.
 *
 * 핵심 설계 (v5 Bugfix):
 * - 슬라이드: Wrapper div가 scaledWidth × scaledHeight로 실제 크기를 제한
 * - 내부 div는 1920×1080 고정 + transform: scale() + transformOrigin: top left
 * - negative margin 완전 제거 → 모바일 브라우저 overflow 문제 해결
 * - 네비게이션: transform 컨테이너 바깥, minHeight로 safe-area 충돌 해소
 */
export default function MobileSlideDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scale, setScale] = useState(0.2);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showFullscreenHint, setShowFullscreenHint] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
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
     * 스케일 계산: 화면 크기에 맞춰 1920x1080을 축소.
     * 네비 바 높이를 빼고 남은 영역에 맞춤.
     */
    const calculateScale = useCallback(() => {
        const vw = window.innerWidth;
        const vh = window.innerHeight - NAV_BAR_HEIGHT;
        const scaleX = vw / SLIDE_WIDTH;
        const scaleY = vh / SLIDE_HEIGHT;
        setScale(Math.min(scaleX, scaleY));
    }, []);

    // 초기화 + 리사이즈/방향전환 핸들링
    useEffect(() => {
        calculateScale();

        const handleResize = () => calculateScale();
        const handleOrientation = () => {
            setTimeout(calculateScale, 150);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("orientationchange", handleOrientation);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("orientationchange", handleOrientation);
        };
    }, [calculateScale]);

    // 브라우저 바 숨김 전략 ① Scroll Trick
    useEffect(() => {
        const scrollTrick = () => {
            document.documentElement.style.height = "calc(100% + 1px)";
            window.scrollTo(0, 1);
            setTimeout(() => {
                document.documentElement.style.height = "100%";
            }, 300);
        };
        scrollTrick();
    }, []);

    // Fullscreen API 상태 추적
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    /**
     * 전체 화면 전환 (Fullscreen API).
     */
    const toggleFullscreen = useCallback(async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
                setShowFullscreenHint(false);
            } else {
                await document.exitFullscreen();
            }
        } catch {
            setShowFullscreenHint(false);
        }
    }, []);

    /**
     * PDF 인쇄 핸들러.
     */
    const handlePrint = useCallback(() => {
        window.print();
    }, []);

    // 스와이프 제스처 (터치 네비게이션)
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    }, []);

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX.current;
        const deltaY = touchEndY - touchStartY.current;

        // 수평 스와이프만 인식 (수직 스와이프는 무시)
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
            if (deltaX < 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }, [nextSlide, prevSlide]);

    // 첫 터치 시 Fullscreen 시도 (한 번만)
    const handleFirstInteraction = useCallback(() => {
        if (showFullscreenHint && !document.fullscreenElement) {
            toggleFullscreen();
        }
    }, [showFullscreenHint, toggleFullscreen]);

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

    // 슬라이드의 실제 렌더링 크기 (wrapper용)
    const scaledWidth = SLIDE_WIDTH * scale;
    const scaledHeight = SLIDE_HEIGHT * scale;

    return (
        <>
            {/* Main Interactive View - Hidden during print */}
            <div
                className="fixed inset-0 flex flex-col bg-sage-50 no-print"
                style={{ height: "100dvh" }}
                onClick={handleFirstInteraction}
            >
                {/* 슬라이드 영역: flex-1로 남은 공간 전부 차지 */}
                <div
                    ref={containerRef}
                    className="flex-1 overflow-hidden flex items-center justify-center"
                    onTouchStart={handleTouchStart}
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
                            className="relative"
                        >
                            {/* 내부: 1920×1080 고정 크기를 scale로 축소 */}
                            <div
                                style={{
                                    width: SLIDE_WIDTH,
                                    height: SLIDE_HEIGHT,
                                    transform: `scale(${scale})`,
                                    transformOrigin: "top left",
                                }}
                                className="bg-white shadow-xl overflow-hidden"
                            >
                                {renderSlide(currentSlide)}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 하단 고정 네비게이션: transform 바깥, 항상 터치 가능 크기 */}
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

                    {/* Print 버튼 */}
                    <button
                        onClick={handlePrint}
                        className="flex items-center justify-center w-11 h-11 rounded-full bg-sage-100 active:bg-sage-300 text-sage-700 transition-colors ml-1"
                        aria-label="PDF로 저장"
                        title="PDF로 저장"
                    >
                        <Printer size={18} />
                    </button>

                    {/* 전체 화면 버튼 */}
                    {!isFullscreen && (
                        <button
                            onClick={toggleFullscreen}
                            className="flex items-center justify-center w-11 h-11 rounded-full bg-sage-600 active:bg-sage-700 text-white transition-colors"
                            aria-label="전체 화면"
                        >
                            <Maximize size={18} />
                        </button>
                    )}
                </nav>
            </div>

            {/* Print-Only Container - Hidden on screen, visible only during print */}
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
