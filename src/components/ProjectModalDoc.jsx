// src/components/ProjectModalDoc.jsx
import { useEffect, useRef } from "react";
import {
  X, Github, Globe, CheckCircle2, Zap, ListChecks, Gauge, ExternalLink, Calendar, Users, Briefcase
} from "lucide-react";

/* ---------- 작은 헬퍼 ---------- */
const HighlightCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-neutral-200 p-4 bg-white/60 dark:bg-neutral-900/60 dark:border-white/10">
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-neutral-500" />
      <h5 className="text-sm font-semibold">{title}</h5>
    </div>
    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{desc}</p>
  </div>
);

const CheckItem = ({ children }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="mt-[2px] h-4 w-4 text-emerald-500" />
    <span>{children}</span>
  </li>
);

const StatPill = ({ label, value }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-800 dark:border-white/10 dark:text-neutral-100">
    <span className="opacity-70">{label}</span>
    <strong className="font-semibold">{value}</strong>
  </span>
);

function NotionIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
      <path d="M8 8h2.6l3.7 5.4V8H16v8h-2.6L9.7 10.6V16H8V8z" fill="#fff" />
    </svg>
  );
}

function getYouTubeId(url = "") {
  const short = /youtu\.be\/([A-Za-z0-9_-]{6,})/i.exec(url);
  if (short) return short[1];
  const long = /(?:youtube\.com|youtube-nocookie\.com).*?[?&]v=([A-Za-z0-9_-]{6,})/i.exec(url);
  if (long) return long[1];
  return null;
}

/* ---------- 본 컴포넌트 ---------- */
export default function ProjectModalDoc({ project, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose?.()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px]"
    >
      {/* 카드 */}
      <div className="relative w-[min(92vw,1100px)] h-[90vh] rounded-2xl border border-neutral-200 bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden dark:bg-neutral-900 dark:border-white/10 dark:ring-white/10">

        {/* 헤더 (sticky) */}
        <header className="sticky top-0 z-20 bg-white dark:bg-neutral-900">
          <div className="relative px-6 pt-5">
            <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{project.desc}</p>

            {/* 스택 뱃지 */}
            {project.stack?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-neutral-200 px-2 py-1 text-xs text-neutral-700 dark:border-white/10 dark:text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* 닫기 버튼 */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-30 rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 transition dark:hover:bg-neutral-800 dark:text-neutral-300 dark:hover:text-white"
              aria-label="닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 border-t border-neutral-200 dark:border-white/10" />
          <div className="h-3 bg-white dark:bg-neutral-900" />
        </header>

        {/* 헤더 아래 전체 스크롤(영상+본문) */}
        <div className="h-[calc(90vh-88px)] overflow-auto px-6 pt-6 pb-20">
          <div className="mx-auto w-full max-w-4xl">
            {/* 영상/커버 */}
            <div className="mb-6 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-neutral-800">
              <div className="w-full aspect-video">
                {(() => {
                  const v = project.video;
                  const ytId = getYouTubeId(v);
                  if (ytId) {
                    const embed = `https://www.youtube-nocookie.com/embed/${ytId}`;
                    return (
                      <iframe
                        src={embed}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    );
                  }
                  if (v) {
                    return (
                      <video
                        src={v}
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    );
                  }
                  if (project.cover) {
                    return (
                      <img
                        src={project.cover}
                        alt={`${project.title} cover`}
                        className="h-full w-full object-cover"
                      />
                    );
                  }
                  return (
                    <div className="flex h-full items-center justify-center text-sm text-neutral-500 dark:text-neutral-300">
                      미디어가 없습니다
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* 하이라이트 3칸 */}
            <div className="mb-6 grid gap-3 sm:grid-cols-3">
              {project.detail?.period && (
                <HighlightCard icon={Calendar} title="기간" desc={project.detail.period} />
              )}
              {project.detail?.team && (
                <HighlightCard icon={Users} title="팀" desc={project.detail.team} />
              )}
              {project.detail?.role && (
                <HighlightCard icon={Briefcase} title="역할" desc={project.detail.role} />
              )}
            </div>

            {/* 핵심 기능 체크리스트 */}
            {project.detail?.features?.length > 0 && (
              <div className="mb-6 rounded-xl border border-neutral-200 p-4 dark:border-white/10">
                <h4 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">핵심 기능</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-[15px] text-neutral-700 dark:text-neutral-300">
                  {project.detail.features.map((f, idx) => <CheckItem key={idx}>{f}</CheckItem>)}
                </ul>
              </div>
            )}

            {/* 목표 */}
            {(project.detail?.goals?.length || project.detail?.goal) && (
              <div className="mb-6 rounded-xl border border-neutral-200 p-4 dark:border-white/10">
                <h4 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">목표</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] text-neutral-700 dark:text-neutral-300">
                  {(project.detail.goals ?? [project.detail.goal]).filter(Boolean).map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 구현 방법 (기존 approach 재사용) */}
            {project.detail?.approach?.length > 0 && (
              <div className="mb-6 rounded-xl border border-neutral-200 p-4 dark:border-white/10">
                <h4 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">구현 방법</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] text-neutral-700 dark:text-neutral-300">
                  {project.detail.approach.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
            )}

            {/* 설계 결정 (추천) */}
            {project.detail?.designDecisions?.length > 0 && (
              <div className="mb-6 rounded-xl border border-neutral-200 p-4 dark:border-white/10">
                <h4 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">설계 결정</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] text-neutral-700 dark:text-neutral-300">
                  {project.detail.designDecisions.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            )}

            {/* 이슈 & 해결 */}
            {/* 문제 & 해결 (좌우 카드) */}
            {(project.detail?.issues?.length || project.detail?.challenges?.length) && (
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">
                  문제 & 해결
                </h4>

                <div className="space-y-3">
                  {(
                    project.detail.issues
                    // 과거 challenges(string[])만 있는 경우 호환
                    ?? project.detail.challenges?.map((c) => ({ issue: c, solution: null }))
                    ?? []
                  ).map((it, i) => (
                    <div key={i} className="grid gap-3 sm:grid-cols-2">
                      {/* 문제 */}
                      <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 dark:border-white/10 dark:bg-neutral-900/60">
                        <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">문제</div>
                        <p className="mt-2 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">
                          {it.issue}
                        </p>
                      </div>

                      {/* 해결 */}
                      <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 dark:border-white/10 dark:bg-neutral-900/60">
                        <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">해결</div>
                        <p className="mt-2 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">
                          {it.solution ?? "해결 내용 정리 예정"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* 노션 CTA */}
            {project.links?.notion && (
              <a
                href={project.links.notion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition dark:border-white/10 dark:text-neutral-200 dark:hover:bg-neutral-800/40"
              >
                노션에서 자세히 보기
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {/* 마지막 여백 */}
            <div className="h-8" />
          </div>
        </div>
      </div>

      {/* 팝업 밖 우하단 플로팅 링크 */}
      {(project.links?.github || project.links?.notion || project.links?.demo) && (
        <div className="fixed right-5 bottom-8 z-[60] flex flex-col gap-3">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              title="Live Demo"
              aria-label="Live Demo"
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
          {project.links?.notion && (
            <a
              href={project.links.notion}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-800 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              title="Notion"
              aria-label="Notion"
            >
              <NotionIcon className="h-5 w-5" />
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
