import { useRef } from "react";
import { useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

const Navbar = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      e.target instanceof Node &&
      ref.current &&
      e.target.contains(ref.current)
    ) {
      setShow(false);
    }
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor">
      <Container className="h-full py-1 font-titleFont flex items-center justify-between">
        {/* ============ Logo Start here ============ */}
        <a href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <img className="w-14" src={"/assets/images/logo.png"} alt="logo" />
          </motion.div>
        </a>
        {/* ============ Logo End here ============== */}
        {/* ============ ListItem Start here ======== */}
        <div className="hidden md:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <a
              className="flex items-center gap-1 font-medium text-textDark hover:text-textPink cursor-pointer duration-300 nav-link"
              href="#home"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </a>
            <a
              className="flex items-center gap-1 font-medium text-textDark hover:text-textPink cursor-pointer duration-300 nav-link"
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textPink mr-1">01.</span>
                About
              </motion.li>
            </a>
            <a
              className="flex items-center gap-1 font-medium text-textDark hover:text-textPink cursor-pointer duration-300 nav-link"
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-textPink mr-1">02.</span>
                Experience
              </motion.li>
            </a>
            <a
              className="flex items-center gap-1 font-medium text-textDark hover:text-textPink cursor-pointer duration-300 nav-link"
              href="#project"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textPink mr-1">03.</span>
                Projects
              </motion.li>
            </a>
            <a
              className="flex items-center gap-1 font-medium text-textDark hover:text-textPink cursor-pointer duration-300 nav-link"
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-textPink mr-1">04.</span>
                Contact
              </motion.li>
            </a>
          </ul>
          <a href="/assets/Safira_Sari_Resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textPink text-[13px] border border-textPink hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* ============== Small Icon Start here =========== */}
        <div
          onClick={() => setShow(true)}
          className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-textPink cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textPink inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textPink inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textPink inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              ref={ref}
              onClick={handleClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute md:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col items-end"
            >
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-cardBg flex flex-col items-center px-4 py-10 relative"
              >
                <MdOutlineClose
                  onClick={() => setShow(false)}
                  className="text-3xl text-textPink cursor-pointer hover:text-red-500 absolute top-4 right-4"
                />
                <div className="flex flex-col items-center gap-7">
                  <ul className="flex flex-col text-base gap-7">
                    <a
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textPink cursor-pointer duration-300 nav-link"
                      href="#home"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.1,
                          ease: "easeIn",
                        }}
                      >
                        Home
                      </motion.li>
                    </a>
                    <a
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textPink cursor-pointer duration-300 nav-link"
                      href="#about"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.2,
                          ease: "easeIn",
                        }}
                      >
                        <span className="text-textPink">01.</span>
                        About
                      </motion.li>
                    </a>
                    <a
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textPink cursor-pointer duration-300 nav-link"
                      href="#experience"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.3,
                          ease: "easeIn",
                        }}
                      >
                        <span className="text-textPink">02.</span>
                        Experience
                      </motion.li>
                    </a>
                    <a
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textPink cursor-pointer duration-300 nav-link"
                      href="#project"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.4,
                          ease: "easeIn",
                        }}
                      >
                        <span className="text-textPink">03.</span>
                        Projects
                      </motion.li>
                    </a>
                    <a
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textPink cursor-pointer duration-300 nav-link"
                      href="#contact"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.5,
                          ease: "easeIn",
                        }}
                      >
                        <span className="text-textPink">04.</span>
                        Contact
                      </motion.li>
                    </a>
                  </ul>
                  <a href="/assets/Safira_Sari_Resume.pdf" target="_blank">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, ease: "easeIn" }}
                      className="w-32 h-10 rounded-md text-textPink text-[13px] border border-textPink hover:bg-hoverColor duration-300"
                    >
                      Resume
                    </motion.button>
                  </a>
                  <div className="flex gap-4">
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, ease: "easeIn" }}
                      href="https://github.com/safirasari"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textPink text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textPink cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <TbBrandGithub />
                      </span>
                    </motion.a>
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9, ease: "easeIn" }}
                      href="https://www.linkedin.com/in/safira-sari/"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textPink text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textPink cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <SlSocialLinkedin />
                      </span>
                    </motion.a>
                  </div>
                </div>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, ease: "easeIn" }}
                  className="text-sm w-72 tracking-widest text-textPink text-center mt-4"
                  href="mailto:safira2517@gmail.com"
                >
                  <p>safira2517@gmail.com</p>
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* ============== Small Icon End here ============= */}
      </Container>
    </div>
  );
};

export default Navbar;
