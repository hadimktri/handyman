import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeIn, staggerContainer } from "./motions";

export default function Animate({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={fadeIn("up", "tween", 0.2, 0.8)}>
        {children}
      </motion.div>
    </motion.div>
  );
}
