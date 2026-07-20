import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section id="project" className="lg:px-20 py-24">
      <SectionTitle title="Some Projects I've Worked On" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/safirasari"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/projectN8N.png"}
                alt="Lien Waiver Processor"
              />
              <div className="absolute w-full h-full bg-textPink/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textPink text-sm tracking-wide">
                AI-Powered Workflow
              </p>
              <h3 className="text-2xl font-bold">Lien Waiver Processor</h3>
            </div>
            <p className="bg-cardBg text-sm md:text-base p-2 md:p-6 rounded-md">
              An AI-powered n8n pipeline that leverages {" "}
              <span className="text-textPink">OpenAI </span>
              to parse Outlook emails and integrates QuickBooks APIs to {" "}
              <span className="text-textPink">automate check audits</span>, evaluate signing eligibility, and 
              flag unpaid invoices with interactive Slack webhook notifications.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>PostgreSQL</li>
              <li>n8n</li>
              <li>OpenAI</li>
              <li>QuickBooks</li>
              <li>Slack</li>
              <li>Outlook</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textPink duration-300"
                href="https://github.com/safirasari"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/safirasari/group-to-go"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/projectGTG.png"}
                alt="Group to Go (GTG)"
              />
              <div className="absolute w-full h-full bg-textPink/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textPink text-sm tracking-wide">
                Event Planner
              </p>
              <h3 className="text-2xl font-bold">Group to Go (GTG)</h3>
            </div>
            <p className="text-sm md:text-base bg-cardBg p-2 md:p-6 rounded-md xl:-mr-16">
              All-in-one platform for {" "}
              <span className="text-textPink">planning hangouts and events</span> within your social circle.
              Group to Go, also known as GTG, is an event planner that includes many features, such as {" "}
              <span className="text-textPink">user registration, group management, scheduling, expense tracking</span> and more, within a single website!
              Figma was used to create {" "}
              <span className="text-textPink">wireframes & prototypes.</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Firebase</li>
              <li>JavaScript</li>
              <li>Figma</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textPink duration-300"
                href="https://github.com/safirasari/group-to-go"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/safirasari/facial-expression-recognition"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/projectFACIAL.jpg"}
                alt="Facial Expression Recognition"
              />
              <div className="absolute w-full h-full bg-textPink/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textPink text-sm tracking-wide">
                AI Model
              </p>
              <h3 className="text-2xl font-bold">Facial Expression Recognition</h3>
            </div>
            <p className="text-sm md:text-base bg-cardBg  p-2 md:p-6 rounded-md">
              An AI model using Python and PyTorch to {" "}
              <span className="text-textPink">classify facial expressions in images </span> by implementing and tuning a
              Convolutional Neural Network (CNN) with Skorch. Evaluated model performance using Scikit-learn and {" "}
              <span className="text-textPink">visualized data metrics such as accuracy, precision, recall, and F1-score</span> with
              <span className="text-textPink"> Matplotlib</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Python</li>
              <li>PyTorch</li>
              <li>Scikit-learn</li>
              <li>Matplotlib</li>
              <li>Skorch</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textPink duration-300"
                href="https://github.com/safirasari/facial-expression-recognition"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
