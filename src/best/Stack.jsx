import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   로컬 SVG 아이콘 (필요시 교체)
   ========================= */
const Svg = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  />
);

const AtomIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(120 12 12)" />
  </Svg>
);

const CodeIcon = (props) => (
  <Svg {...props}>
    <polyline points="8 7 3 12 8 17" />
    <polyline points="16 7 21 12 16 17" />
  </Svg>
);

const BinaryIcon = (props) => (
  <Svg {...props}>
    <rect x="3" y="5" width="6" height="6" rx="1" />
    <rect x="15" y="5" width="6" height="6" rx="1" />
    <rect x="3" y="13" width="6" height="6" rx="1" />
    <rect x="15" y="13" width="6" height="6" rx="1" />
  </Svg>
);

const JsonIcon = (props) => (
  <Svg {...props}>
    <path d="M7 4H5a2 2 0 0 0-2 2v2" />
    <path d="M7 20H5a2 2 0 0 1-2-2v-2" />
    <path d="M17 4h2a2 2 0 0 1 2 2v2" />
    <path d="M17 20h2a2 2 0 0 0 2-2v-2" />
  </Svg>
);

const GitIcon = (props) => (
  <Svg {...props}>
    <path d="M7 7l10 10" />
    <circle cx="7" cy="7" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="17" cy="17" r="2" />
  </Svg>
);

const DockerIcon = (props) => (
  <Svg {...props}>
    <rect x="3" y="10" width="4" height="4" />
    <rect x="8" y="10" width="4" height="4" />
    <rect x="13" y="10" width="4" height="4" />
    <rect x="8" y="5" width="4" height="4" />
    <path d="M2 15c2 4 9 4 13 4 5 0 6-2 7-4" />
  </Svg>
);

const DatabaseIcon = (props) => (
  <Svg {...props}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v9c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </Svg>
);

const BoxesIcon = (props) => (
  <Svg {...props}>
    <rect x="3" y="7" width="7" height="7" />
    <rect x="14" y="4" width="7" height="7" />
    <rect x="14" y="15" width="7" height="7" />
  </Svg>
);

const TerminalIcon = (props) => (
  <Svg {...props}>
    <polyline points="4 8 8 12 4 16" />
    <line x1="10" y1="16" x2="20" y2="16" />
    <rect x="2" y="4" width="20" height="16" rx="2" />
  </Svg>
);

/* =========================
   데이터 (원하시는 SVG로 교체 가능)
   ========================= */
const LANGUAGES = [
  {
    name: "TypeScript",
    level: 4,
    since: 2023,
    recent: true,
    note: "React + TS 기반 웹앱",
    icon: <JsonIcon className="h-5 w-5" />,
  },
  {
    name: "Python",
    level: 5,
    since: 2021,
    recent: true,
    note: "데이터 처리, 스크립팅",
    icon: <BinaryIcon className="h-5 w-5" />,
  },
  {
    name: "JavaScript",
    level: 4,
    since: 2022,
    recent: true,
    icon: <CodeIcon className="h-5 w-5" />,
  },
  {
    name: "SQL",
    level: 3,
    since: 2023,
    recent: false,
    icon: <DatabaseIcon className="h-5 w-5" />,
  },
];

const TOOLS = [
  { name: "React", level: 4, since: 2023, recent: true, icon: <AtomIcon className="h-5 w-5" /> },
  { name: "Node.js", level: 3, since: 2023, recent: false, icon: <TerminalIcon className="h-5 w-5" /> },
  { name: "Docker", level: 3, since: 2024, recent: true, icon: <DockerIcon className="h-5 w-5" /> },
  { name: "Git", level: 4, since: 2021, recent: true, icon: <GitIcon className="h-5 w-5" /> },
  { name: "PostgreSQL", level: 3, since: 2024, recent: false, icon: <DatabaseIcon className="h-5 w-5" /> },
  { name: "Three.js", level: 2, since: 2025, recent: false, icon: <BoxesIcon className="h-5 w-5" /> },
];

/* =========================
   UI 컴포넌트
   ========================= */
const LevelDots = ({ level }) => (
  <div className="flex items-center gap-1" aria-label={`숙련도 ${level}/5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`h-1.5 w-1.5 rounded-full ${i < level ? "bg-gray-900" : "bg-gray-300"}`}
      />
    ))}
  </div>
);

// 각 아이템만 강조되는 작은 카드
const SkillPill = ({ s }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="group relative flex items-center gap-3 rounded-xl border border-gray-200 bg-white/70 px-3 py-2 shadow-sm/25 backdrop-blur-sm hover:border-gray-300 hover:shadow md:px-4"
    title={s.note || s.name}
  >
    {/* 아이콘 + recent dot */}
    <div className="relative">
      <div className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-gray-200 bg-white">
        {s.icon}
      </div>
      <AnimatePresence>
        {s.recent && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500"
          />
        )}
      </AnimatePresence>
    </div>

    {/* 텍스트 */}
    <div className="min-w-0 flex-1">
      <div className="flex items-baseline justify-between gap-3">
        <p className="truncate text-sm font-medium text-gray-900">{s.name}</p>
        {s.since && (
          <span className="hidden shrink-0 text-[10px] text-gray-500 md:inline">{`since ${s.since}`}</span>
        )}
      </div>
      <div className="mt-1 flex items-center justify-between">
        <LevelDots level={s.level} />
        {s.recent && <span className="text-[10px] text-emerald-600">recent</span>}
      </div>
    </div>

    {/* hover glow */}
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 transition group-hover:ring-2 group-hover:ring-gray-900/10" />
  </motion.div>
);

const SectionTitle = ({ children }) => (
  <h3 className="relative mb-5 pl-3 text-lg font-bold text-gray-900 md:mb-6">
    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-gray-900" />
    {children}
  </h3>
);

/* =========================
   메인 컴포넌트 (JSX)
   ========================= */
export default function Stack() {
  const [onlyRecent, setOnlyRecent] = React.useState(false);
  const [view, setView] = React.useState("grid"); // "grid" | "list"

  const langs = onlyRecent ? LANGUAGES.filter((s) => s.recent) : LANGUAGES;
  const tools = onlyRecent ? TOOLS.filter((s) => s.recent) : TOOLS;

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* 헤더 */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Skills</h2>
          </div>

          {/* 컨트롤: 최근만 보기 / 레이아웃 전환 */}
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setOnlyRecent((v) => !v)}
              className={`rounded-full border px-3 py-1.5 transition ${
                onlyRecent
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
              }`}
            >
              {onlyRecent ? "최근만 보기" : "전체 보기"}
            </button>
            <div className="hidden h-6 w-px bg-gray-200 md:block" />
            <div className="hidden items-center gap-1 md:flex">
              <button
                onClick={() => setView("grid")}
                aria-pressed={view === "grid"}
                className={`rounded-full px-2 py-1 text-xs ${
                  view === "grid" ? "bg-gray-900 text-white" : "text-gray-600"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setView("list")}
                aria-pressed={view === "list"}
                className={`rounded-full px-2 py-1 text-xs ${
                  view === "list" ? "bg-gray-900 text-white" : "text-gray-600"
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-12 md:mb-16">
          <SectionTitle>Languages</SectionTitle>
          <div
            className={
              view === "grid"
                ? "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4"
                : "flex flex-col gap-3"
            }
          >
            {langs.map((s) => (
              <SkillPill key={s.name} s={s} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <SectionTitle>Tools</SectionTitle>
          <div
            className={
              view === "grid"
                ? "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4"
                : "flex flex-col gap-3"
            }
          >
            {tools.map((s) => (
              <SkillPill key={s.name} s={s} />
            ))}
          </div>
        </div>

        {/* 범례 */}
        <div className="mt-10 flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <LevelDots level={5} />
            <span>숙련도 1~5</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span>최근 사용</span>
          </div>
        </div>
      </div>
    </section>
  );
}
