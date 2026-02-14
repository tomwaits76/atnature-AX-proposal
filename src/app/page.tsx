"use client";

import dynamic from "next/dynamic";
import { useMobile } from "@/hooks/useMobile";

// PC 버전: 기존 SlideDeck 그대로 (변경 0줄)
const SlideDeck = dynamic(() => import("@/components/SlideDeck"), { ssr: false });

// 모바일 버전: 완전히 별개의 컴포넌트
const MobileSlideDeck = dynamic(() => import("@/components/MobileSlideDeck"), { ssr: false });

export default function Home() {
  const isMobile = useMobile();

  return (
    <main className="min-h-screen">
      {isMobile ? <MobileSlideDeck /> : <SlideDeck />}
    </main>
  );
}
