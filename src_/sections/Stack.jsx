import React from "react";
import { motion } from "framer-motion";

// 임시 SVG (지금은 전부 python.svg 가리키지만, 실제 파일로 교체하면 됨)
import python from "../assets/python.svg";
import js from "../assets/python.svg";
import ts from "../assets/python.svg";
import reactIcon from "../assets/python.svg";
import node from "../assets/python.svg";
import docker from "../assets/python.svg";
import postgres from "../assets/python.svg";
import git from "../assets/python.svg";

// 데이터는 URL만 들고 있게
const LANGUAGES = [
  { name: "TypeScript", iconSrc: ts },
  { name: "Python", iconSrc: python },
  { name: "JavaScript", iconSrc: js },
  { name: "SQL", iconSrc: postgres }, // 예시: SQL은 postgres 아이콘 재사용
];

const TOOLS = [
  { name: "React", iconSrc: reactIcon },
  { name: "Node.js", iconSrc: node },
  { name: "Docker", iconSrc: docker },
  { name: "Git", iconSrc: git },
  { name: "PostgreSQL", iconSrc: postgres }, // 겹치는 아이콘 재사용
  { name: "Three.js", iconSrc: js },         // 임시로 js 아이콘 재사용
];

function SkillPill({ s }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex items-center gap-3 rounded-xl border border-gray-200 bg-white/70 px-3 py-2 shadow-sm/25 backdrop-blur-sm hover:border-gray-300 hover:shadow md:px-4"
    >
      {/* 아이콘 */}
      <div className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-gray-200 bg-white">
        {/* Vite 기본 svg import는 URL이므로 <img src=...> 로 렌더링 */}
        <img src={s.iconSrc} alt="" className="h-5 w-5" />
      </div>

      {/* 텍스트 */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900">{s.name}</p>
      </div>

      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 transition group-hover:ring-2 group-hover:ring-gray-900/10" />
    </motion.div>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="relative mb-5 pl-3 text-lg font-bold text-gray-900 md:mb-6">
      <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-gray-900" />
      {children}
    </h3>
  );
}

export default function Stack() {
  return (
    <section id="skill" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Skills</h2>
        </div>

        <div className="mb-12 md:mb-16">
          <SectionTitle>Languages</SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            {LANGUAGES.map((s) => (
              <SkillPill key={s.name} s={s} />
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Tools</SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            {TOOLS.map((s) => (
              <SkillPill key={s.name} s={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
