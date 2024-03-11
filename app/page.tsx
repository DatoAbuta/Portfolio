"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { data } from "./data";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

type SubmitType = {
  email: string;
  name: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required("First Name Is Empty")
    .matches(/^[a-zA-Z]+$/, "Only letters are allowed"),
  email: yup
    .string()
    .required("Looks Like This Is Not An Email")
    .email("Email Isn't Valid"),
  message: yup.string().required("Cannot Be Empty"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SubmitType) => {
    console.log(data);
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_fcz9f4e", "template_iw96yur", form.current, {
          publicKey: "ivP0zlBBE87ZvuzHc",
        })
        .then((el) => {console.log(el);
        },
          (error) => {console.log(error, error.text);});
    }
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

        <section className="projectss md:grid md:grid-cols-2 md:gap-5 md:ml-[20px] xl:grid-cols-3 xl:ml-[100px]">
          {data.map((el) => (
            <motion.div
              key={el.name}
              className="mb-10"
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileHover={{
                scale: 1.1,
              }}
              initial={{
                opacity: 0,
                x: 100,
                y: 100,
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
      <footer className="flex items-center flex-col gap-5 xl:flex xl:flex-row xl:justify-center xl:items-center w-full">
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
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
            sendEmail(e);
          }}
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
            type="text"
            placeholder="NAME"
            {...register("name")}
            whileHover={{ scale: "1.1" }}
            name="user_name"
          />
          {errors.name && (
            <p className="errori" style={{ color: "red" }}>
              {errors.name.message}
            </p>
          )}
          <motion.input
            type="email"
            placeholder="EMAIL"
            {...register("email")}
            whileHover={{ scale: "1.1" }}
            name="user_email"
          />
          {errors.email && (
            <p className="errori" style={{ color: "red" }}>
              {errors.email.message}
            </p>
          )}
          <motion.input
            style={{ height: "107px" }}
            type="text"
            placeholder="MESSAGE"
            {...register("message")}
            whileHover={{ scale: "1.1" }}
          />
          {errors.message && (
            <p className="errori" style={{ color: "red" }}>
              {errors.message.message}
            </p>
          )}
          <button className="btn mt-5 pb-2">Send Message</button>
        </motion.form>
      </footer>
    </>
  );
}
