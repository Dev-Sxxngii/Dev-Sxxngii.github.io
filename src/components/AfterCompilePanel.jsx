// src/components/AfterCompilePanel.jsx
import { motion } from "framer-motion";
import { User, BadgeCheck, FolderGit2 } from "lucide-react";

export default function AfterCompilePanel() {
  const items = [
    { href: "#about", title: "소개", desc: "프로필과 현재 관심사", icon: User },
    { href: "#skill", title: "스킬", desc: "언어 · 툴 · 경험 정리", icon: BadgeCheck },
    { href: "#projects", title: "프로젝트", desc: "최근 작업과 실험 위주", icon: FolderGit2 },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mt-15 w-full max-w-3xl"
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {items.map(({ href, title, desc, icon: Icon }) => (
          <a
            key={title}
            href={href}
            className="group rounded-xl border border-gray-200 p-4 text-left transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/40"
          >
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-gray-500" />
              <h3 className="text-sm font-semibold">{title}</h3>
            </div>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">{desc}</p>
            <span className="mt-2 inline-block text-xs text-gray-500 transition group-hover:translate-x-0.5">
              바로 가기 →
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
