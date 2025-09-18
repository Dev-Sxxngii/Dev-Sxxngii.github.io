import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cursor from "./Cursor";
import ExitCatcher from "./ExitCatcher";

export default function OpeningAnimationTyping({
  typingText = "Welcome to Sxxngii Portfolio",
  onDone,
  typingSpeed = 90,
  allowSkip = true,
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(typingText.slice(0, i + 1));
      i++;
      if (i >= typingText.length) {
        clearInterval(interval);
        setDone(true);
        setTimeout(() => onDone?.(), 800);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [typingText, typingSpeed, onDone]);

  return (
      <div className="relative h-screen w-screen overflow-hidden bg-gray-50 text-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-3xl font-mono text-gray-900">
            {displayed}
            <Cursor blink={!done} />
          </h1>
        </div>

        {!done && allowSkip && (   // 👈 allowSkip일 때만 안내 문구 표시
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] md:text-xs text-gray-500"
          >
            Press any key or click to skip
          </motion.div>
        )}

        {allowSkip && <ExitCatcher onExit={onDone} />} {/* 👈 선택적으로 ExitCatcher 렌더링 */}
      </div>
  );
}
