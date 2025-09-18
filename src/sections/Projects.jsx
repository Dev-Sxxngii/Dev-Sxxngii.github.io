import { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import Chip from "../components/Chip";
import ProjectModalDoc from "../components/ProjectModalDoc";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Projects
          </h2>
          <p className="text-sm text-gray-500">최근 작업 중심</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group h-full cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white h-full flex flex-col shadow-sm transition hover:bg-gray-50 hover:shadow-lg">
                <div className="h-40 bg-gray-200 group-hover:opacity-90 transition" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      {/* <ProjectModal project={selected} onClose={() => setSelected(null)} /> */}
      <ProjectModalDoc project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
