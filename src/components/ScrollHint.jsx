import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollHint({ to = "#about" }) {
  return (
    <a href={to} className="absolute bottom-6 inline-flex flex-col items-center text-gray-500 hover:text-gray-700">
      <span className="text-xs mb-1">더 보기</span>
      <motion.div animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.6 }}>
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </a>
  );
}
