import { motion } from "framer-motion";
import Chip from "../components/Chip";
import stack from "../data/stack";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 border-y border-gray-200">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}
        // className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-start"
        className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 md:items-end">
        <div className="flex flex-col items-center md:items-start">
          <div className="h-40 w-40 rounded-2xl bg-gray-200 shadow-inner" />
          <div className="mt-4 space-y-1 text-center md:text-left">
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">강규상</p>
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-medium">AI · Full-stack Student Developer</p>
          </div>
        </div>

        {/* <div className="md:col-span-2"> */}
        <div className="md:col-span-2 flex flex-col md:h-full md:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Python과 JavaScript(React/Next.js), Node.js로 제품을 만들고, 머신러닝으로 문제 해결을 시도합니다.
            재사용 가능한 컴포넌트와 접근성, 데이터 파이프라인의 단순함을 중요하게 생각합니다.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
              <p className="text-gray-500 text-sm">학력</p>
              <p className="mt-1 font-medium">인공지능 전공 (학부)</p>
              <p className="text-sm text-gray-600 mt-1">알고리즘 · 데이터분석 · 웹공학</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
              <p className="text-gray-500 text-sm">관심 분야</p>
              <p className="mt-1 font-medium">LLM UX, MLOps, 데이터 시각화</p>
              <p className="text-sm text-gray-600 mt-1">가벼운 모델 서빙 · 성능 튜닝</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
