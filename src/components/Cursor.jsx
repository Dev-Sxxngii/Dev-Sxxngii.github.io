import { motion } from "framer-motion";

export default function Cursor({ blink = true }) {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: blink ? [1, 0, 1] : 1 }}
      transition={{ repeat: blink ? Infinity : 0, duration: 0.9 }}
      className="inline-block w-1 h-5 md:h-6 bg-gray-900 ml-0.5 align-middle"
    />
  );
}