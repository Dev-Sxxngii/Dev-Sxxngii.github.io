// src/sections/Hero.jsx
import { motion } from "framer-motion";
import ScrollHint from "../components/ScrollHint";
import CodeBlockTyping from "../components/CodeBlockTyping";
import AfterCompilePanel from "../components/AfterCompilePanel";
import { Sparkles, Rocket, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [compiled, setCompiled] = useState(false);

  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-6">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold">
        안녕하세요, 개발자 강규상입니다.
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-5 max-w-2xl text-gray-600 leading-relaxed">
        배움의 순간을 소중히 여기며, 새로운 도전을 통해 끊임없이 발전하는 개발자입니다.
      </motion.p>

      {/* 코드 블럭: 완료 시 compiled=true */}
      <CodeBlockTyping onDone={() => setCompiled(true)} />

      {/* ✅ 완료되면 아래 카드 3개 표시 */}
      {compiled && <AfterCompilePanel />}

      <ScrollHint to="#about" />
    </section>
  );
}
