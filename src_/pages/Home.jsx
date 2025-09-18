import { useEffect, useState } from "react";
import OpeningAnimationTyping from "../components/OpeningAnimationTyping";

// 메인 UI
import Sidebar from "../components/Sidebar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Stack from "../sections/Stack";
import Projects from "../sections/Projects";
import ThankYouTrigger from "../sections/ThankYouTrigger";
import FloatingContact from "../components/FloatingContact";


// 같은 탭에서 라우팅으로 이동했다가 돌아올 때는 Intro가 나오면 안 되고,
// 브라우저 새로고침(F5) 또는 새 탭 오픈 시에는 Intro가 다시 나와야 합니다.
// 이를 위해 window 전역 변수에 플래그를 기록합니다.
// - 라우팅 이동: 같은 JS 런타임 유지 → window.__introSeen 유지 → Intro 스킵
// - 새로고침/새 탭: 런타임 초기화 → window.__introSeen 초기화 → Intro 재생

export default function Home() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== "undefined" && window.__introSeen) return false;
    return true; // 최초 진입 또는 새로고침 시
  });

  useEffect(() => {
    if (showIntro && typeof window !== "undefined") {
      window.__introSeen = true; // 이 세션(탭) 동안만 유지
    }
  }, [showIntro]);

  // 부드러운 스크롤
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  if (showIntro) {
    return (
      <OpeningAnimationTyping
        typingText="Welcome to Sxxngii Portfolio"
        typingSpeed={90}
        onDone={() => setShowIntro(false)}
      />
    );
  }

  // 인트로 이후 메인 레이아웃
  return (
    <div className="min-h-screen flex bg-white text-gray-900">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-72">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <ThankYouTrigger />
        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          © 2025 Sxxngii Portfolio. All rights reserved.
        </footer>
      </main>
      <FloatingContact />
    </div>
  );  
}

