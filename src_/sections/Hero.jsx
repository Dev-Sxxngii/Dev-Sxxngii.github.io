import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollHint from "../components/ScrollHint";

export default function Hero() {
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
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 flex gap-4">
        <a href="#projects" className="px-4 py-2 rounded-md bg-gray-900 text-white inline-flex items-center gap-2">
          프로젝트 보기 <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#contact" className="px-4 py-2 rounded-md border border-gray-300 text-gray-900">연락하기</a>
      </motion.div>
      <ScrollHint to="#about" />
    </section>
  );
}
