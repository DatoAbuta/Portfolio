"use client";

import { data } from "./data";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const scrollable = useRef<HTMLDivElement>(null);
  return (
    <>
      <section>
        <motion.header
          className="mt-5 xl:flex xl:justify-center xl:items-center xl:justify-between"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="flex justify-center items-center">
            <h1 className="text-center">DatoAbuta</h1>
          </div>
          <nav className="flex justify-center items-center gap-3 mt-5">
            <a
              href="https://www.facebook.com/profile.php?id=61552727493722"
              target="_blank"
            >
              <img className="social" src="/facebook.svg" alt="" />
            </a>
            <a href="https://www.instagram.com/cazemosiarule/" target="_blank">
              <img className="social" src="/instagram.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/dato-abutidze-9056aa294/"
              target="_blank"
            >
              <img className="social" src="/linkedin.svg" alt="" />
            </a>
            <a href="https://github.com/DatoAbuta" target="_blank">
              <img className="social" src="/github.svg" alt="" />
            </a>
          </nav>
        </motion.header>

        <motion.section
          className="md:flex md:flex-row-reverse xl:justify-center xl:items-center xl:justify-between"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="photo flex justify-center items-center">
            <img
              className="w-[270px] h-[306px] mt-5 vaxo xl:ml-20"
              src="/mee.png"
              alt=""
            />
          </div>

          <div className="middle">
            <h1 className="nice mt-10 md:w-[445px] xl:w-[800px]">
              Nice to meet you! I’m{" "}
              <span>
                <Typewriter
                  words={["David Abutidze", "Developer"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={70}
                  delaySpeed={1000}
                  cursorColor="blue"
                />
              </span>
            </h1>
            <div className="line1 mb-5"></div>
            <p className="based mb-6">
              Based in the GEO, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <a href="/DA_Resume.pdf" download>
              <button className="contact mb-[10px] cursor-pointer">
                DOWNLOAD CV
              </button>
            </a>
            <div className="line2"></div>
          </div>
        </motion.section>

        <motion.div
          className="flex justify-center items-center flex-col mt-10 mb-5"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <h1>Experience</h1>
          <div className="greenline"></div>

          <div className="linee w-[343px] mt-6 md:w-[706px] xl:w-[1110px]"></div>
        </motion.div>

        <motion.section
          className="flex justify-center items-center flex-col md:grid md:grid-cols-2 md:ml-[40px] xl:ml-[165px] xl:grid-cols-2"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div></div>
          <div></div>
          <motion.div className="xl:w-[345px]" whileHover={{ scale: "1.1" }}>
            <h2 className="lang xl:w-[125px]">HTML</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </motion.div>
          <motion.div className="xl:w-[345px]" whileHover={{ scale: "1.1" }}>
            <h2 className="lang mt-6 xl:w-[185px]">TailWind CSS</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </motion.div>
          <motion.div className="xl:w-[345px]" whileHover={{ scale: "1.1" }}>
            <h2 className="lang mt-6 xl:w-[125px]">JavaScript</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </motion.div>
          <motion.div className="xl:w-[345px]" whileHover={{ scale: "1.1" }}>
            <h2 className="lang mt-6 xl:w-[125px]">React</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </motion.div>
          <motion.div className="xl:w-[345px]" whileHover={{ scale: "1.1" }}>
            <h2 className="lang mt-6 xl:w-[125px]">TypeScript</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </motion.div>
          <motion.div className="xl:w-[345px]" whileHover={{ scale: "1.1" }}>
            <h2 className="lang mt-6 xl:w-[125px]">Next.js</h2>
            <p className="exp mb-10 xl:w-[345px]">1 Year Experience</p>
          </motion.div>
          <motion.div className="xl:w-[345px]" whileHover={{ scale: "1.1" }}>
            <h2 className="lang mt-6 xl:w-[125px]">Nest.js</h2>
            <p className="exp mb-10 xl:w-[345px]">1 Year Experience</p>
          </motion.div>
          <motion.div className="xl:w-[345px]" whileHover={{ scale: "1.1" }}>
            <h2 className="lang mt-6 xl:w-[125px]">MongoDB</h2>
            <p className="exp mb-10 xl:w-[345px]">1 Year Experience</p>
          </motion.div>
          <motion.div className="xl:w-[345px]" whileHover={{ scale: "1.1" }}>
            <h2 className="lang mt-6 xl:w-[125px]">RestAPI</h2>
            <p className="exp mb-10 xl:w-[345px]">1 Year Experience</p>
          </motion.div>
          <motion.div className="xl:w-[345px]" whileHover={{ scale: "1.1" }}>
            <h2 className="lang mt-6 xl:w-[125px]">Express.js</h2>
            <p className="exp mb-10 xl:w-[345px]">1 Year Experience</p>
          </motion.div>
          <div></div>
        </motion.section>

        <section className="flex gap-[71px] justify-center items-center mt-20 mb-10">
          <div>
            <h1 className="projects">Projects</h1>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              if (scrollable.current)
                return scrollable.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
            }}
          >
            <h3 className="contact mb-[10px]">CONTACT ME</h3>
            <div className="line2"></div>
          </div>
        </section>

        <section className="projectss md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {data.map((el) => (
            <motion.div
              key={el.name}
              className="mb-10"
              whileInView={{
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              initial={{
                opacity: 0,
              }}
            >
              <img src={el.photo} alt="" />
              <h4 className="mt-5 name">{el.name}</h4>
              <h6 className="mt-[7px] langs">{el.languages}</h6>

              <section className="flex gap-[32px] mt-5">
                <div className="flex flex-col">
                  <a href={el.live} target="_blank">
                    <h2 className="buttons">VIEW PROJECT</h2>
                  </a>
                  <div className="greenline"></div>
                </div>

                <div className="flex flex-col">
                  <a href={el.git} target="_blank">
                    <h2 className="buttons">VIEW CODE</h2>
                  </a>
                  <div className="greenline"></div>
                </div>
              </section>
            </motion.div>
          ))}
        </section>
      </section>
      <footer
        ref={scrollable}
        className="flex items-center flex-col gap-5 xl:flex xl:flex-row xl:justify-evenly xl:items-center w-full relative"
      >
        <motion.div
          className="flex flex-col justify-start items-start"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <h1 className="cont mt-[60px] xl:m-0 xl:mb-[36px] text-start">
            Contact
          </h1>
          <p className="desc xl:mb-[36px] text-start">
            I would love to hear about your project and how I could help. Please
            contact my anywhere, and I’ll get back to you as soon as possible.
          </p>
        </motion.div>
        <motion.div className="flex items-start justify-start flex-col">
          <div className="lasttt">
            <motion.a
              href="https://www.facebook.com/davidabutidze13"
              target="_blank"
              className="flex justify-center items-center gap-2"
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: 100,
              }}
            >
              <img className="social" src="/facebook.svg" alt="" />
              <h1 className="hover:text-orange-500 ease-out duration-1000">
                David Abutidze
              </h1>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/abuta7_/"
              target="_blank"
              className="flex justify-center items-center gap-2"
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: 100,
              }}
            >
              <img className="social" src="/instagram.svg" alt="" />
              <h1 className="hover:text-orange-500 ease-out duration-1000">
                abuta7_
              </h1>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dato-abutidze-9056aa294/"
              target="_blank"
              className="flex justify-center items-center gap-2"
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: 100,
              }}
            >
              <img className="social" src="/linkedin.svg" alt="" />
              <h1 className="hover:text-orange-500 ease-out duration-1000">
                Dato Abutidze
              </h1>
            </motion.a>
            <motion.a
              href="https://github.com/DatoAbuta"
              target="_blank"
              className="flex justify-center items-center gap-2"
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: 100,
              }}
            >
              <img className="social" src="/github.svg" alt="" />
              <h1 className="hover:text-orange-500 ease-out duration-1000">
                DatoAbuta
              </h1>
            </motion.a>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
