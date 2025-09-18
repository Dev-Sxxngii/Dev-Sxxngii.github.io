// src/components/CodeBlockTyping.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

const LINES = [
  "import { loadAbout, loadSkills, loadProjects } from './portfolio';",
  "",
  "async function main() {",
  "  const about = await loadAbout();",
  "",
  "  const skills = await loadSkills();",
  "",
  "  const projects = await loadProjects();",
  "",
  "  return { about, skills, projects };",
  "}",
  "",
  "main().then(() => {",
  "  console.log('Portfolio ready');",
  "});",
];


const TYPING_SPEED = 20;          // ms per char
const COMPILE_DURATION_MS = 1800; // 컴파일 연출 시간

export default function CodeBlockTyping({ onDone }) { // ✅ onDone 추가
  const fullText = useMemo(() => LINES.join("\n"), []);
  const [typed, setTyped] = useState("");
  const [stage, setStage] = useState("typing"); // typing | compiling | done
  const compileStartedAt = useRef(null);

  // 타이핑
  useEffect(() => {
    if (stage !== "typing") return;
    let i = 0;
    const timer = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(timer);
        setStage("compiling");
        compileStartedAt.current = performance.now();
      }
    }, TYPING_SPEED);
    return () => clearInterval(timer);
  }, [stage, fullText]);

  // 컴파일 연출
  const [compileMs, setCompileMs] = useState(0);
  useEffect(() => {
    if (stage !== "compiling") return;
    const start = performance.now();
    const raf = () => {
      const now = performance.now();
      setCompileMs(now - start);
      if (now - start >= COMPILE_DURATION_MS) {
        setStage("done");
        onDone?.(); // ✅ 완료 시 부모에 알림
      } else {
        requestAnimationFrame(raf);
      }
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, [stage, onDone]);

  const typedLines = useMemo(() => typed.split("\n"), [typed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 bg-[#1e1e1e] text-left shadow-md dark:border-gray-700"
    >
      {/* 탭바 */}
      <div className="flex items-center justify-between border-b border-gray-700 bg-[#2d2d2d] px-4 py-2 text-xs text-gray-300">
        <span>/Sxxngii/Portfolio.jsx</span>
        <div className="flex items-center gap-2">
          {stage === "compiling" && (
            <span className="inline-flex items-center gap-1 text-gray-200">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Compiling…
            </span>
          )}
          {stage === "done" && (
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Compiled successfully
            </span>
          )}
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>

      {/* 코드 영역 */}
      <div className="flex font-mono text-[13px] leading-relaxed">
        {/* 라인번호 */}
        <div className="select-none border-r border-gray-700 bg-[#252526] px-3 py-3 text-right text-gray-500">
          {(stage === "typing" ? typedLines : LINES).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* 코드 + 커서 */}
        <pre className="relative whitespace-pre px-4 py-3 text-gray-200">
          {typed}
          {stage === "typing" && (
            <motion.span
              aria-hidden
              className="ml-0.5 inline-block h-4 w-2 translate-y-[2px] bg-gray-100 align-middle"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          )}
        </pre>
      </div>

      {/* 하단 상태바 */}
      <div className="flex items-center justify-between border-t border-gray-800 bg-[#1b1b1b] px-4 py-2 text-[11px] text-gray-400">
        <span>UTF-8  •  LF  •  JavaScript</span>
        <span>
          {stage === "typing" && "INSERT"}
          {stage === "compiling" && `Compiling… ${Math.min(COMPILE_DURATION_MS, Math.floor(compileMs))}ms`}
          {stage === "done" &&
            `Done in ${Math.max(1, Math.round(COMPILE_DURATION_MS / 100) / 10)}s`}
        </span>
      </div>
    </motion.div>
  );
}
