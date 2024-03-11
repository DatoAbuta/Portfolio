"use client";

import { data } from "./data";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";

export default function Home() {
  const form = useRef(null);

  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [nameEr, setNameEr] = useState("");
  const [EmailEr, setEmailEr] = useState("");
  const [MsgEr, setMsgEr] = useState("");

  const [confetti, setConfetti] = useState(false);

  function validateForm() {
    if (!formState.user_name) {
      setNameEr("Cannot Be Empty");
      return false;
    } else {
      setNameEr("");
    }

    if (!formState.user_email) {
      setEmailEr("Cannot Be Empty");
      return false;
    } else {
      setEmailEr("");
    }

    if (!formState.message) {
      setMsgEr("Cannot Be Empty");
      return false;
    } else {
      setMsgEr("");
    }

    setFormState({
      user_name: "",
      user_email: "",
      message: "",
    });

    setConfetti(!confetti);

    return true;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!form.current) return;

    emailjs
      .sendForm("service_fcz9f4e", "template_iw96yur", form.current, {
        publicKey: "ivP0zlBBE87ZvuzHc",
      })
      .then((el) => {
        console.log(el);
      })
      .catch((err) => {
        console.log(err);
      });

      setTimeout(() => {
        setConfetti(false)
      }, 10000);
  };

  return (
    <>
      <section>
        <motion.header
          className="mt-5 xl:flex xl:gap-[716px] xl:justify-center xl:items-center"
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
            <a href="https://www.facebook.com/davitabutidze.48" target="_blank">
              <img className="social" src="/facebook.svg" alt="" />
            </a>
            <a href="https://www.instagram.com/davidabutidzee/" target="_blank">
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
          className="md:flex md:flex-row-reverse xl:justify-center xl:items-center"
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
              className="w-[174px] h-[306px] mt-5 vaxo xl:ml-20"
              src="/me.png"
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
            <a
              href="https://www.linkedin.com/in/dato-abutidze-9056aa294/"
              target="_blank"
            >
              <h3 className="contact mb-[10px]">CONTACT ME</h3>
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
          <div className="xl:w-[345px]">
            <h2 className="lang xl:w-[125px]">HTML</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </div>
          <div className="xl:w-[345px]">
            <h2 className="lang mt-6 xl:w-[185px]">TailWind CSS</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </div>
          <div className="xl:w-[345px]">
            <h2 className="lang mt-6 xl:w-[125px]">JavaScript</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </div>
          <div className="xl:w-[345px]">
            <h2 className="lang mt-6 xl:w-[125px]">React</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </div>
          <div className="xl:w-[345px]">
            <h2 className="lang mt-6 xl:w-[125px]">TypeScript</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </div>
          <div className="xl:w-[345px]">
            <h2 className="lang mt-6 xl:w-[125px]">Next.js</h2>
            <p className="exp mb-10 xl:w-[345px]">1 Year Experience</p>
          </div>
          <div></div>
        </motion.section>

        <section className="flex gap-[71px] justify-center items-center mt-20 mb-10">
          <div>
            <h1 className="projects">Projects</h1>
          </div>
          <div>
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
      <footer className="flex items-center flex-col gap-5 xl:flex xl:flex-row xl:justify-center xl:items-center w-full relative">
      {confetti ? <Confetti
          style={{ height: "100%", left: "50%", transform: "translateX(-50%)" }}
          width={window.innerWidth}
        /> : null}
        <motion.div
          className="xl:flex xl:flex-col xl:justify-center xl:items-left"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <h1 className="cont mt-[60px] xl:m-0 xl:mb-[36px]">Contact</h1>
          <p className="desc xl:mb-[36px]">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <motion.input
            onChange={handleChange}
            value={formState.user_name}
            type="text"
            style={{ color: "#FFF" }}
            placeholder="NAME"
            name="user_name"
            whileHover={{scale: "1.1"}}
          />
          <p className="errori" style={{ color: "red" }}>
            {nameEr}
          </p>
          <motion.input
            onChange={handleChange}
            value={formState.user_email}
            type="email"
            placeholder="EMAIL"
            style={{ color: "#FFF" }}
            name="user_email"
            whileHover={{scale: "1.1"}}
          />
          <p className="errori" style={{ color: "red" }}>
            {EmailEr}
          </p>
          <motion.input
            onChange={handleChange}
            value={formState.message}
            style={{ height: "107px", color: "#FFF" }}
            type="text"
            placeholder="MESSAGE"
            name="message"
            whileHover={{scale: "1.1"}}
          />
          <p className="errori" style={{ color: "red" }}>
            {MsgEr}
          </p>
          <button className="btn mt-5 pb-2">Send Message</button>
        </motion.form>
      </footer>
    </>
  );
}
