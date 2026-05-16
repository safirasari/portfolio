import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="hidden :inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/safirasari" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textPink text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textPink cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/safira-sari/"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textPink text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textPink cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </a>
    </div>
  );
};

export default Footer;
