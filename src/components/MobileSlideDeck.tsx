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
 * 모바일 전용 슬라이드 덱 (V9.1).
 *
 * 핵심 아키텍처:
 * - 레이아웃: fixed inset-0 + 100dvh (v5~v8 검증 방식)
 * - 스케일링: transform:scale() + wrapper div (iOS Safari 검증 방식)
 * - 핀치줌: 프레임 포함 전체 슬라이드 확대 + 팬 이동
 * - 프린트: PC와 동일 구조 + iOS용 zoom 변수 설정
 * - 네비바: 줌 영역 완전 분리, safe-area 패딩
 */
export default function MobileSlideDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scale, setScale] = useState(0.2);
    const [showPWABanner, setShowPWABanner] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // 스와이프 관련
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const touchStartTime = useRef(0);
    const lastInputTime = useRef(0);
    const INPUT_THROTTLE_MS = 300;
    const SWIPE_THRESHOLD = 80;
    const SWIPE_MAX_DURATION_MS = 400;

    // 커스텀 핀치줌 관련
    const [pinchScale, setPinchScale] = useState(1);
    const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
    const isPinching = useRef(false);
    const initialPinchDist = useRef(0);
    const initialPinchScale = useRef(1);
    const lastPanPos = useRef({ x: 0, y: 0 });
    const isPanning = useRef(false);

    const PINCH_MIN = 1;
    const PINCH_MAX = 3;

    // ── 슬라이드 전환 ──

    const nextSlide = useCallback(() => {
        const now = Date.now();
        if (now - lastInputTime.current < INPUT_THROTTLE_MS) return;
        lastInputTime.current = now;
        setPinchScale(1);
        setPanOffset({ x: 0, y: 0 });
        setCurrentSlide((prev) => (prev < SLIDE_COUNT - 1 ? prev + 1 : prev));
    }, []);

    const prevSlide = useCallback(() => {
        const now = Date.now();
        if (now - lastInputTime.current < INPUT_THROTTLE_MS) return;
        lastInputTime.current = now;
        setPinchScale(1);
        setPanOffset({ x: 0, y: 0 });
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    // ── 스케일 계산 (transform:scale 용) ──

    const calculateScale = useCallback(() => {
        const vw = document.documentElement.clientWidth;
        const vh = document.documentElement.clientHeight - NAV_BAR_HEIGHT;
        const scaleX = vw / SLIDE_WIDTH;
        const scaleY = vh / SLIDE_HEIGHT;
        setScale(Math.min(scaleX, scaleY));
    }, []);

    useEffect(() => {
        calculateScale();

        const handleOrientationChange = () => {
            // 방향 전환 시 줌 리셋
            setPinchScale(1);
            setPanOffset({ x: 0, y: 0 });
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

    // ── PWA 배너 ──

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

    const dismissPWABanner = useCallback(() => {
        setShowPWABanner(false);
        localStorage.setItem("pwa-banner-dismissed", "true");
    }, []);

    // ── 프린트 ──
    // iOS Safari는 @page custom size를 무시하고 A4를 사용.
    // A4 landscape 72dpi = 842px → 842/1920 ≈ 0.44
    const handlePrint = useCallback(() => {
        document.documentElement.style.setProperty(
            "--print-slide-zoom",
            "0.44"
        );
        window.print();
    }, []);

    // ── 터치 핸들러: 스와이프 + 핀치줌 + 팬 ──

    const getTouchDistance = (touches: React.TouchList) => {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const handleTouchStart = useCallback(
        (e: React.TouchEvent) => {
            if (e.touches.length >= 2) {
                isPinching.current = true;
                isPanning.current = false;
                initialPinchDist.current = getTouchDistance(e.touches);
                initialPinchScale.current = pinchScale;
                return;
            }

            isPinching.current = false;
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
            touchStartTime.current = Date.now();

            if (pinchScale > 1.05) {
                isPanning.current = true;
                lastPanPos.current = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY,
                };
            } else {
                isPanning.current = false;
            }
        },
        [pinchScale]
    );

    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            if (e.touches.length >= 2 && isPinching.current) {
                const newDist = getTouchDistance(e.touches);
                const ratio = newDist / initialPinchDist.current;
                const newScale = Math.min(
                    PINCH_MAX,
                    Math.max(PINCH_MIN, initialPinchScale.current * ratio)
                );
                setPinchScale(newScale);
                return;
            }

            if (isPanning.current && e.touches.length === 1) {
                const dx = e.touches[0].clientX - lastPanPos.current.x;
                const dy = e.touches[0].clientY - lastPanPos.current.y;
                lastPanPos.current = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY,
                };
                setPanOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
            }
        },
        []
    );

    const handleTouchEnd = useCallback(
        (e: React.TouchEvent) => {
            if (isPinching.current) {
                isPinching.current = false;
                if (pinchScale < 1.1) {
                    setPinchScale(1);
                    setPanOffset({ x: 0, y: 0 });
                }
                return;
            }

            if (isPanning.current) {
                isPanning.current = false;
                return;
            }

            // 줌 상태가 아닐 때만 스와이프 처리
            if (pinchScale > 1.05) return;

            const touchDuration = Date.now() - touchStartTime.current;
            if (touchDuration > SWIPE_MAX_DURATION_MS) return;

            const deltaX = e.changedTouches[0].clientX - touchStartX.current;
            const deltaY = e.changedTouches[0].clientY - touchStartY.current;

            if (
                Math.abs(deltaX) > SWIPE_THRESHOLD &&
                Math.abs(deltaX) > Math.abs(deltaY) * 1.5
            ) {
                if (deltaX < 0) nextSlide();
                else prevSlide();
            }
        },
        [pinchScale, nextSlide, prevSlide]
    );

    // ── 슬라이드 렌더 ──

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

    // ── 계산 값 ──
    const scaledWidth = SLIDE_WIDTH * scale;
    const scaledHeight = SLIDE_HEIGHT * scale;
    const effectiveScale = scale * pinchScale;

    return (
        <>
            {/* ═══ Main Interactive View ═══
                 fixed inset-0 + 100dvh: v5~v8 검증 방식
            */}
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

                {/* 슬라이드 영역 (뷰포트 역할 — overflow:hidden으로 확대 시 클리핑) */}
                <div
                    ref={containerRef}
                    className="flex-1 overflow-hidden flex items-center justify-center"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ minHeight: 0, touchAction: "none" }}
                >
                    {/* 팬 레이어: 확대 상태에서 슬라이드를 이동 */}
                    <div
                        style={{
                            transform:
                                pinchScale > 1
                                    ? `translate(${panOffset.x}px, ${panOffset.y}px)`
                                    : undefined,
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="relative bg-white shadow-2xl ring-1 ring-sage-300"
                                style={{
                                    width: scaledWidth * pinchScale,
                                    height: scaledHeight * pinchScale,
                                    overflow: "hidden",
                                    flexShrink: 0,
                                }}
                            >
                                {/* 슬라이드 콘텐츠: transform:scale로 축소 */}
                                <div
                                    style={{
                                        width: SLIDE_WIDTH,
                                        height: SLIDE_HEIGHT,
                                        transform: `scale(${effectiveScale})`,
                                        transformOrigin: "top left",
                                    }}
                                >
                                    {renderSlide(currentSlide)}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* ═══ 네비게이션 바 ═══
                     줌 영역 완전 분리 → 항상 표시
                     safe-area 패딩 전방위 적용
                */}
                <nav
                    className="flex items-center justify-center gap-3 bg-white/95 backdrop-blur-md border-t border-sage-200 shadow-lg flex-shrink-0"
                    style={{
                        minHeight: NAV_BAR_HEIGHT,
                        paddingTop: "max(4px, env(safe-area-inset-top, 0px))",
                        paddingBottom: "max(4px, env(safe-area-inset-bottom, 0px))",
                        paddingLeft: "env(safe-area-inset-left, 0px)",
                        paddingRight: "env(safe-area-inset-right, 0px)",
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
                 PC와 100% 동일 구조: slide-container > slide 직접 렌더.
                 CSS .slide-container > * { zoom: var(--print-slide-zoom) } 로 스케일링.
            */}
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
