import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["TypeScript", "React", "Next.js",],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    skills: ["GitHub", "n8n", "Figma"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto py-12 lg:py-24 flex flex-col gap-12"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full lg:w-2/3 text-base text-textDark font-bodyFont flex flex-col gap-6"
        >
          <p>
            Hello! I'm Safira Sari, and I’m passionate about continuously 
            learning about tech and crafting high-quality products.

            
          </p>
          <p>
            Today, I’ve had the privilege of working at an{" "}
            <span className="text-textPink">
              advertising agency, a startup, a major corporation, and a
              student-led design studio.
            </span>{" "}
            Testing
            Code reviews


            add stats of bugs fixes

            love improving processes
          </p>
          <p>
            Outside of coding, video games have always been one of my favorite hobbies. 
            I play MOBAs and strategy games such as Teamfight Tactics (TFT), in which I've achieved the 
            highest tier - Challenger - in multiple sets, with my highest peak being rank 77 in North America.
            {/* <br /> */}
            I also love attending live concerts of musical artists I follow (my sisters call me a "Ticketmaster Winner" 
            for consistently securing tickets during competitive ticket sales).
            Another interest of mine is shopping while exploring fashion trends as I refine my own personal style. 
            Although it's less of a hobby, trying out new food and recipes is super fun for me!
          </p>
          <p>
            My passion for learning pushes me to continuously aim for growth and improvement.
          </p>
          {/* <p className="font-titleFont font-semibold text-textLight">
            Here are some technologies I’ve been working with recently:
          </p> */}


{/* vertical stack */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[750px]">
  {skillGroups.map((group, groupIndex) => (
    <motion.div
      key={group.category}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: groupIndex * 0.12,
      }}
      className="space-y-5"
    >
      <h3 className="text-sm uppercase tracking-[0.25em] font-semibold text-textPink">
        {group.category}
      </h3>

      <div className="flex flex-col gap-3">
        {group.skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            className="
              relative
              px-4 py-2.5
              rounded-lg

              bg-white/80
              backdrop-blur-sm

              border border-gray-200
              shadow-[0_3px_15px_rgba(0,0,0,0.04)]

              text-sm text-gray-700 font-medium

              hover:text-textPink
              hover:border-textPink
              hover:shadow-[0_8px_25px_rgba(236,72,153,0.12)]

              transition-all duration-300
              cursor-default
            "
          >
            <span className="absolute left-0 top-0 h-full w-[2px] bg-textPink scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  ))}
</div>


        </motion.div>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full lg:w-1/3 h-96 relative group"
        >
          <div className="absolute w-full h-96 rounded-lg overflow-hidden shadow-navbarShadow">
            <img
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              src={"/assets/images/profile.png"}
              alt="Profile Image"
            />
          </div>
          <div className="hidden lg:block absolute inset-0 border-2 border-textPink rounded-lg -translate-x-3 -translate-y-3 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
