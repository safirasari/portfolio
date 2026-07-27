import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section id="home" className="py-10 md:py-24 flex flex-col gap-4 lg:gap-8">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textPink"
      >
        Hi! My name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Safira Sari.
        <span className="text-textDark mt-2 lg:mt-4">
          Nice to meet you!
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        As a Full Stack Developer, I've worked on both frontend and backend systems, 
        namely TypeScript, React, Next.js, PostgreSQL, and Python. 
        With a love for solving problems, I enjoy implementing new features and fixing bugs.{" "}
      </motion.p>
      
      <a href="/assets/Safira_Sari_Resume.pdf" target="_blank">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, ease: "easeIn" }}
          className="w-52 h-14 text-sm font-titleFont border border-textPink rounded-md text-textPink tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my Resume!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
