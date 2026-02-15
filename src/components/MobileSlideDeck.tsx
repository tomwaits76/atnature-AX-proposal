"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Printer, Share, X } from "lucide-react";
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

/** A4 landscape 96dpi 기준 scale (297mm × 210mm → ~1123px × ~794px) */
const PRINT_SCALE = Math.min(1123 / SLIDE_WIDTH, 794 / SLIDE_HEIGHT);

/**
 * 모바일 전용 슬라이드 덱 컴포넌트 (v7).
 * PC SlideDeck.tsx와 완전 독립.
 *
 * v7 변경점:
 * - touch-action: none → 브라우저 기본 제스처 차단
 * - 멀티터치 쿨다운 500ms + swipe 임계값 80px + 터치 시간 필터
 * - Lazy Print: 인쇄 버튼 클릭 시에만 18슬라이드 DOM 렌더 → Safari 메모리 절감
 * - Print scale 인라인 고정값 (CSS calc 제거)
 * - PWA 안내 배너 (홈 화면 추가 유도)
 */
export default function MobileSlideDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scale, setScale] = useState(0.2);
    const [isPrinting, setIsPrinting] = useState(false);
    const [showPWABanner, setShowPWABanner] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const touchStartTime = useRef(0);
    const isMultiTouch = useRef(false);
    const multiTouchCooldownUntil = useRef(0);
    const lastInputTime = useRef(0);
    const INPUT_THROTTLE_MS = 300;
    const SWIPE_THRESHOLD = 80;
    const SWIPE_MAX_DURATION_MS = 400;
    const MULTI_TOUCH_COOLDOWN_MS = 500;

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
     * document.documentElement.clientWidth 사용 (핀치줌에 불변).
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

        const handleOrientationChange = () => {
            setTimeout(calculateScale, 100);
            setTimeout(calculateScale, 300);
            setTimeout(calculateScale, 600);
        };

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

    // Lazy Print: beforeprint/afterprint 이벤트 리스닝
    useEffect(() => {
        const handleBeforePrint = () => setIsPrinting(true);
        const handleAfterPrint = () => setIsPrinting(false);

        window.addEventListener("beforeprint", handleBeforePrint);
        window.addEventListener("afterprint", handleAfterPrint);

        return () => {
            window.removeEventListener("beforeprint", handleBeforePrint);
            window.removeEventListener("afterprint", handleAfterPrint);
        };
    }, []);

    // PWA 안내 배너: standalone이 아닐 때만 표시
    useEffect(() => {
        const isStandalone =
            window.matchMedia("(display-mode: standalone)").matches ||
            (window.navigator as unknown as { standalone?: boolean }).standalone === true;

        if (!isStandalone) {
            const dismissed = localStorage.getItem("pwa-banner-dismissed");
            if (!dismissed) {
                setShowPWABanner(true);
            }
        }
    }, []);

    /**
     * PDF 인쇄 핸들러.
     * isPrinting을 먼저 true로 설정 → DOM 렌더 후 print 호출.
     */
    const handlePrint = useCallback(() => {
        setIsPrinting(true);
        // requestAnimationFrame으로 DOM 렌더 완료 대기 후 print
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                window.print();
            });
        });
    }, []);

    const dismissPWABanner = useCallback(() => {
        setShowPWABanner(false);
        localStorage.setItem("pwa-banner-dismissed", "true");
    }, []);

    // 스와이프 — 멀티터치 쿨다운 + 시간 필터 + 높은 임계값
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (e.touches.length > 1) {
            isMultiTouch.current = true;
            return;
        }
        isMultiTouch.current = false;
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        touchStartTime.current = Date.now();
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (e.touches.length > 1) {
            isMultiTouch.current = true;
        }
    }, []);

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        // 멀티터치였으면 쿨다운 설정 후 무시
        if (isMultiTouch.current) {
            isMultiTouch.current = false;
            multiTouchCooldownUntil.current = Date.now() + MULTI_TOUCH_COOLDOWN_MS;
            return;
        }

        // 쿨다운 기간 중이면 무시
        if (Date.now() < multiTouchCooldownUntil.current) {
            return;
        }

        // 터치 지속 시간 체크 (긴 터치 = 드래그/줌 의도)
        const touchDuration = Date.now() - touchStartTime.current;
        if (touchDuration > SWIPE_MAX_DURATION_MS) {
            return;
        }

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX.current;
        const deltaY = touchEndY - touchStartY.current;

        // 수평 스와이프만 인식 (임계값 80px, 수직 비율 1.5배)
        if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
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
                {/* PWA 안내 배너 */}
                {showPWABanner && (
                    <div className="flex items-center justify-between px-4 py-2.5 bg-sage-700 text-white text-xs gap-2">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                            <Share size={14} className="flex-shrink-0" />
                            <span className="truncate">
                                공유 → &quot;홈 화면에 추가&quot;로 전체 화면 보기
                            </span>
                        </div>
                        <button
                            onClick={dismissPWABanner}
                            className="flex-shrink-0 p-1 rounded hover:bg-sage-600 transition-colors"
                            aria-label="배너 닫기"
                        >
                            <X size={14} />
                        </button>
                    </div>
                )}

                {/* 슬라이드 영역 */}
                <div
                    ref={containerRef}
                    className="flex-1 overflow-hidden flex items-center justify-center"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ minHeight: 0, touchAction: "none" }}
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

            {/* Print-Only Container — Lazy Rendering */}
            {isPrinting && (
                <div className="print-only">
                    {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
                        <div key={index} className="slide-container">
                            <div
                                style={{
                                    width: SLIDE_WIDTH,
                                    height: SLIDE_HEIGHT,
                                    transform: `scale(${PRINT_SCALE})`,
                                    transformOrigin: "top left",
                                }}
                            >
                                {renderSlide(index)}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
