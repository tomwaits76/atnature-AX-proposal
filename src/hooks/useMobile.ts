"use client";

import { useState, useEffect } from "react";

/**
 * 모바일 디바이스 감지 훅.
 * UA + 화면 너비 기반 하이브리드 감지.
 * SSR 호환: 초기값 false(PC) → useEffect에서 재판정 (Hydration Mismatch 방지).
 *
 * @returns {boolean} isMobile - 모바일 여부
 */
export function useMobile(): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = (): boolean => {
            // 1. User Agent 기반 감지
            const ua = navigator.userAgent || "";
            const uaIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

            // 2. 화면 너비 기반 감지 (iPad Pro 등 큰 태블릿은 PC로 분류)
            const screenIsMobile = window.innerWidth < 1024;

            // 3. 터치 지원 여부 (보조 판단)
            const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

            // UA가 모바일이면서 화면이 작으면 모바일 확정
            // UA가 모바일이 아니더라도 화면이 작고 터치 지원이면 모바일 (폴더블 등)
            return (uaIsMobile && screenIsMobile) || (screenIsMobile && hasTouch);
        };

        setIsMobile(checkMobile());

        // 화면 크기 변경 시 재판정 (가로/세로 전환 등)
        const handleResize = () => {
            setIsMobile(checkMobile());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
}
