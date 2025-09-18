import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ThankYouTrigger () {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 0.6,              // 섹션의 60%가 보이면 true
    margin: "0px 0px -15% 0px"// 하단에서 살짝 여유 두고 발동
  });

  return (
    <section
      id="thankyou"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 bg-white"
    >    
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden:  { opacity: 0, y: 22 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"      
      >
        <h2
          className="text-5xl md:text-6xl font-en-serif font-medium text-gray-900"
        >
          Thank you
        </h2>
        <p className="mt-4 text-gray-600 font-kr-serif">
          봐주셔서 감사합니다. 더 나은 결과로 보답하겠습니다.
        </p>
      </motion.div>
    </section>
  );
}

