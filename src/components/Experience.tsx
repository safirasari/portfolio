import { FaBriefcase, FaGraduationCap, FaRegCalendarAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const timelineItems = [
  {
    type: "experience",
    title: "Full Stack Developer",
    place: "RentAll Construction Inc.",
    date: "2024 - 2026",
    description:
      "Maintained an in-house rental brokerage platform using Next.js and TypeScript that facilitated 21,000+ construction equipment rentals for 2,200+ contractors.",
  },
  {
    type: "experience",
    title: "Systems Support Agent",
    place: "Concordia University",
    date: "2023 - 2023",
    description:
      "Resolved incidents by providing technical support with SAP solutions and analyzed data trends of the services delivered.",
  },
  {
    type: "education",
    title: "Concordia University",
    place: "Bachelor of Computer Science",
    date: "2022 - 2025",
    description:
      "Member of the Institute for Co-operative Education. Recipient of the Gina Cody School Women in Engineering Entrance Scholarship.",
  },
  {
    type: "education",
    title: "John Abbott College",
    place: "DEC in Science",
    date: "2020 - 2022",
    description:
      "Named to the Dean’s List in all 4 semesters for students earning an average of over 80%.",
  },
];


const Experience = () => {
  return (
    <section id="experience" className="py-10 lg:py-24 font-sans">
      <SectionTitle title="My Journey" titleNo="02" />

      <div className="mt-12 mx-auto max-w-4xl relative">
        {/* center line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-cardBg" />

        <div className="flex flex-col gap-6">
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex w-full items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className={`group relative w-[45%] bg-cardBg/40 p-6 backdrop-blur-md border border-cardBg/20 transition-all duration-300 hover:border-cardBg/20 hover:shadow-lg ${
                    isLeft ? "text-right" : "text-left"
                  }`}
                >
                  {/* Title row */}
                  <div
                    className={`flex items-center gap-2 mb-2 ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    {item.type === "education" ? (
                      <FaGraduationCap className="text-textPink text-sm" />
                    ) : (
                      <FaBriefcase className="text-textPink text-sm" />
                    )}

                    <h3 className="text-xl font-semibold text-textLight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Place */}
                  <p className="text-sm text-textDark/80 font-medium">
                    {item.place}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm text-textDark leading-snug">
                    {item.description}
                  </p>

                  {/* Date */}
                  <div
                    className={`mt-4 flex items-center gap-2 text-sm font-medium text-textDark ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    <FaRegCalendarAlt className="text-textPink" />
                    {item.date}
                  </div>

                </div>

                {/* center dot */}

                <div className="absolute left-1/2 -translate-x-1/2 z-10 flex h-4 w-4 items-center justify-center">
                {/* outer ring */}
                <div className="h-4 w-4 rounded-full border-2 border-textPink bg-bodyColor" />

                {/* inner glow dot */}
                <div className="absolute h-2 w-2 rounded-full bg-textPink shadow-[0_0_8px_rgba(236,72,153,0.7)]" />
              </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;