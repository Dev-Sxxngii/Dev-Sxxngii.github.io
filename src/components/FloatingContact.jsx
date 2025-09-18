import { Github, Mail } from "lucide-react";

export default function FloatingContact() {
  return (
    <div
      className="
        fixed z-40
        right-5 bottom-8   /* 모든 화면 크기에서 우측 하단 고정 */
      "
    >
      <div className="flex flex-col gap-3">
        {/* Email */}
        <a
          href="mailto:developer@example.com"
          aria-label="Email"
          title="Email"
          className="
            inline-flex items-center justify-center
            h-11 w-11 rounded-full
            bg-white border border-gray-200 shadow-sm
            text-gray-700 hover:text-gray-900 hover:bg-gray-50
            focus:outline-none focus:ring-2 focus:ring-gray-300
            transition
          "
        >
          <Mail className="h-5 w-5" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/your-id"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="
            inline-flex items-center justify-center
            h-11 w-11 rounded-full
            bg-white border border-gray-200 shadow-sm
            text-gray-800 hover:text-gray-900 hover:bg-gray-50
            focus:outline-none focus:ring-2 focus:ring-gray-300
            transition
          "
        >
          <Github className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
