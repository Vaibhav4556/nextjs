import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Vaibhav | Resume</title>
        <meta
          name="description"
          content="I’m a full stack web developer specializing in building and occasionally designingexceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Vaibhav Burde</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/vaibhav-burde-394121120/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Vaibhav4556"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Software Engineer dedicated to improving skills through hands-on
          learning and development work. Proficient in mobile and desktop
          development environments. Adept at using HTML5, JavaScript and other
          programming languages to produce clean code. Well-organized and
          collaborative with strong communication and analytical abilities.
          Having worked as a Digital Associate role, where i worked on define
          set of instructions to collect ground truth data for the product
          development.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> AWS
            <span className="px-2">|</span> RESTAPI
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Biztransights Solutions
            </span>
            <span className="px-2"> Web Developer|</span>Nagpur, India
          </p>
          <p className="py-1 italic">
            
          </p>
          
        
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Amazon Web Services</span>
            <span className="px-2">|</span>Chennai, India
          </p>
          <p className="py-1 italic">Digital Associate</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Work on defined set of instructions to collect ground truth data
              for the product development.
            </li>
            <li>
              Perform execution and report results accurately. Understand
              procedures and guidelines for new tasks / releases
            </li>
            <li>
              Use software tools for data capture and comply with the processes
              of the organization on a daily basis Be comfortable with capturing
              results, communicating and escalating failures and providing
              individual status reports and adhering to Productivity and Quality
              base lines.
            </li>
          
          </ul>
        </div>

        {/* Personal Experience */}
        
      </div>
    </>
  );
};

export default resume;
