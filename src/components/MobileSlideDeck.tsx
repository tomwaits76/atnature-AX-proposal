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

/**
 * 모바일 전용 슬라이드 덱 컴포넌트 (v8.1).
 *
 * v8.1 핵심 변경:
 * - 줌/스크롤: userScalable:true + touchAction:"manipulation" (줌+팬 허용, 더블탭줌 차단)
 * - 레이아웃: position:fixed + overflow-hidden 유지로 줌 시에도 안정
 * - 프린트: 1920x1080 슬라이드를 JS로 측정한 스케일값으로 동적 축소
 * - 네비바: safe-area 전방위 패딩 + 가로모드 대응
 */
export default function MobileSlideDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scale, setScale] = useState(0.2);
    const [showPWABanner, setShowPWABanner] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const printRef = useRef<HTMLDivElement>(null);
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

    // 초기화 + 방향 전환 + 리사이즈 핸들링
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
        window.addEventListener("resize", calculateScale);

        return () => {
            if (screen.orientation) {
                screen.orientation.removeEventListener("change", handleOrientationChange);
            }
            window.removeEventListener("orientationchange", handleOrientationChange);
            window.removeEventListener("resize", calculateScale);
        };
    }, [calculateScale]);

    // PWA 안내 배너
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
     * 1. print-only 컨테이너를 일시적으로 표시하여 너비 측정
     * 2. 측정된 너비 기반으로 각 슬라이드의 zoom 계산
     * 3. CSS 커스텀 프로퍼티로 설정 후 window.print() 호출
     */
    const handlePrint = useCallback(() => {
        const printContainer = printRef.current;
        if (!printContainer) {
            window.print();
            return;
        }

        // 일시적으로 표시하여 페이지 너비에 근사치 측정
        printContainer.style.display = "block";
        printContainer.style.position = "absolute";
        printContainer.style.left = "-9999px";
        printContainer.style.width = "100%";

        requestAnimationFrame(() => {
            const measuredWidth = printContainer.offsetWidth || 800;
            const printScale = Math.min(measuredWidth / SLIDE_WIDTH, 1);

            // CSS 커스텀 프로퍼티로 스케일 주입
            document.documentElement.style.setProperty(
                "--print-slide-zoom",
                String(printScale)
            );

            // 원래 상태로 복원 (print CSS가 display 제어)
            printContainer.style.display = "";
            printContainer.style.position = "";
            printContainer.style.left = "";
            printContainer.style.width = "";

            window.print();
        });
    }, []);

    const dismissPWABanner = useCallback(() => {
        setShowPWABanner(false);
        localStorage.setItem("pwa-banner-dismissed", "true");
    }, []);

    // 스와이프 핸들러
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
        if (isMultiTouch.current) {
            isMultiTouch.current = false;
            multiTouchCooldownUntil.current = Date.now() + MULTI_TOUCH_COOLDOWN_MS;
            return;
        }
        if (Date.now() < multiTouchCooldownUntil.current) return;

        const touchDuration = Date.now() - touchStartTime.current;
        if (touchDuration > SWIPE_MAX_DURATION_MS) return;

        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        const deltaY = e.changedTouches[0].clientY - touchStartY.current;

        if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
            if (deltaX < 0) nextSlide();
            else prevSlide();
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
            {/* ═══ Main Interactive View ═══ */}
            <div
                className="fixed inset-0 flex flex-col bg-sage-200 no-print"
                style={{ height: "100dvh" }}
            >
                {/* PWA 배너 */}
                {showPWABanner && (
                    <div className="flex items-center justify-between px-4 py-2.5 bg-sage-700 text-white text-xs gap-2 flex-shrink-0">
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

                {/* 슬라이드 영역 — manipulation: 줌+팬 허용, 더블탭줌 차단 */}
                <div
                    ref={containerRef}
                    className="flex-1 overflow-hidden flex items-center justify-center"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ minHeight: 0, touchAction: "manipulation" }}
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

                {/* ═══ 네비게이션 바 ═══
                     - safe-area 패딩 전방위 적용
                     - 가로모드에서도 수직 중앙 정렬 보장
                     - touchAction:none → 네비바 영역에서는 줌/팬 차단
                */}
                <nav
                    className="flex items-center justify-center gap-3 bg-white/95 backdrop-blur-md border-t border-sage-200 shadow-lg flex-shrink-0"
                    style={{
                        minHeight: NAV_BAR_HEIGHT,
                        paddingTop: "max(4px, env(safe-area-inset-top, 0px))",
                        paddingBottom: "max(4px, env(safe-area-inset-bottom, 0px))",
                        paddingLeft: "env(safe-area-inset-left, 0px)",
                        paddingRight: "env(safe-area-inset-right, 0px)",
                        touchAction: "none",
                    }}
                >
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-sage-100 active:bg-sage-300 text-sage-700 disabled:opacity-30 transition-colors flex-shrink-0"
                        aria-label="이전 슬라이드"
                    >
                        <ChevronLeft size={20} />
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
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-sage-100 active:bg-sage-300 text-sage-700 disabled:opacity-30 transition-colors flex-shrink-0"
                        aria-label="다음 슬라이드"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <button
                        onClick={handlePrint}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-sage-600 active:bg-sage-700 text-white shadow-sm ml-2 transition-colors flex-shrink-0"
                        aria-label="PDF로 저장"
                        title="PDF로 저장"
                    >
                        <Printer size={16} />
                    </button>
                </nav>
            </div>

            {/* ═══ Print-Only Container ═══
                 항상 DOM에 존재, 스크린에서 display:none.
                 각 슬라이드를 1920x1080 원본 크기로 렌더 후 zoom으로 축소.
            */}
            <div ref={printRef} className="print-only">
                {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
                    <div key={index} className="slide-container">
                        <div
                            className="slide-print-inner"
                            style={{
                                width: SLIDE_WIDTH,
                                height: SLIDE_HEIGHT,
                            }}
                        >
                            {renderSlide(index)}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
