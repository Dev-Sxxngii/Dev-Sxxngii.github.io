import { motion } from "framer-motion";
import Chip from "../components/Chip";
import stack from "../data/stack";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 border-y border-gray-200">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}
        // className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-start"
        className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 md:items-end">
        <div className="flex flex-col items-center md:items-start">
          {/* <div className="h-40 w-40 rounded-2xl bg-gray-200 shadow-inner" /> */}
          <img
            src={profile}
            alt="프로필 사진"
            className="h-40 w-40 rounded-2xl object-cover ring-1 ring-gray-200 shadow-inner"
            loading="lazy"
            draggable={false}
          />          
          <div className="mt-4 space-y-1 text-center md:text-left">
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">강규상</p>
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-medium">Web & AI Application Developer</p>
          </div>
        </div>

        {/* <div className="md:col-span-2"> */}
        <div className="md:col-span-2 flex flex-col md:h-full md:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            단순히 동작하는 코드를 넘어서, 읽기 쉽고 관리하기 좋은 코드를 지향하는 개발자입니다.<br />
            사용자가 부담 없이 다가올 수 있는 편리한 경험을 만드는 것을 중요하게 생각하며,<br />
            작은 부분까지 세심하게 신경 써 결과물의 완성도를 높이는 개발자가 되고자 합니다.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
              <p className="text-gray-500 text-sm">학력</p>
              <p className="mt-1 font-medium">한국폴리텍대학 춘천캠퍼스</p>
              <p className="text-sm text-gray-600 mt-1">인공지능 s/w 융합</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
              <p className="text-gray-500 text-sm">관심 분야</p>
              <p className="mt-1 font-medium">AI, 컴퓨터 비전</p>
              <p className="text-sm text-gray-600 mt-1">사용자 동작 기반 인터랙션</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
