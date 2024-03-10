"use client"

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

type SubmitType = {
  email: string,
  name: string,
  message: string,
}

const schema = yup.object().shape({
  name: yup.string().required('First Name Is Empty').matches(/^[a-zA-Z]+$/, 'Only letters are allowed'),
  email: yup.string().required("Looks like this is not an email").email("Email Isn't Valid"),
  message: yup.string().required("cannot be empty"),
})

export default function Home() {

  const {register, handleSubmit, formState: {errors}} = useForm<SubmitType>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: SubmitType) => {

  console.log(data)

  }


  return (
    <section>
    <header className="mt-5">
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
      <a href="https://www.linkedin.com/in/dato-abutidze-9056aa294/" target="_blank">
        <img className="social" src="/linkedin.svg" alt="" />
      </a>
      <a href="https://github.com/DatoAbuta" target="_blank">
        <img className="social" src="/github.svg" alt="" />
      </a>
      </nav>
    </header>

      <div className="photo flex justify-center items-center">
        <img  className="w-[174px] h-[306px] mt-5 vaxo" src="/me.png" alt="" />
      </div>

      <section className="middle">
        <h1 className="nice mt-10">Nice to meet you! I’m Davit Abutidze.</h1>
        <div className="line1 mb-5"></div>
        <p className="based mb-6">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>

        <h3 className="contact mb-[10px]">CONTACT ME</h3>
        <div className="line2"></div>
      </section >

      <section className="centered" >
        <div className="whiteline mt-20"></div>
        <h2 className="lang mt-10 w-[83px]">HTML</h2>
        <p className="exp">1 Year Experience</p>
        <h2 className="lang mt-6">CSS</h2>
        <p className="exp">1 Year Experience</p>
        <h2 className="lang mt-6">TailWind CSS</h2>
        <p className="exp">1 Year Experience</p>
        <h2 className="lang mt-6">JavaScript</h2>
        <p className="exp">1 Year Experience</p>
        <h2 className="lang mt-6">React</h2>
        <p className="exp">1 Year Experience</p>
        <h2 className="lang mt-6">TypeScript</h2>
        <p className="exp">1 Year Experience</p>
        <h2 className="lang mt-6">Next</h2>
        <p className="exp mb-10">1 Year Experience</p>
        <div className="whiteline"></div>
      </section>

      <section className="flex gap-[71px] justify-center items-center mt-20 mb-10">
      <div>
        <h1 className="projects">Projects</h1>
      </div>
      <div>
        <h3 className="contact mb-[10px]">CONTACT ME</h3>
        <div className="line2"></div>
      </div>
      </section>

      <section className="projectss">
      <div className="mb-10">
        <img src="/projects/first.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://galleryslideshowpage.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/galleryslideshowpage" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/second.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://intro-component-sign-up-form-beta.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/Intro-Component-Sign-Up-Form" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/third.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://askgirlfordate.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/askgirlfordate" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/fourth.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://entertainment-web-xi.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/EntertainmentWeb" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/fifth.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://countries-five-plum.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/countries" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/sixth.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://cards-wheat-delta.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/cards" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/seventh.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://react4-lemon.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/react4" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/eigth.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://reactfirst-gamma.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/reactfirst" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/nineth.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://davaleba22-gamma.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/DictionaryWebPage" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/tenth.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://todos-two-plum.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/todos" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/eleventh.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://random-advice-ten.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/RandomAdvice" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-10">
        <img src="/projects/twelveth.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://shualedurskoi3.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/shualedurskoi3" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      <div className="mb-20">
        <img src="/projects/thirteenth.png" alt="" />
        <h4 className="mt-5 name">Galleria Slideshow Site</h4>
        <h6 className="mt-[7px] langs">TypeScript, TailWind CSS</h6>

        <section className="flex gap-[32px] mt-5">
          <div className="flex flex-col">
          <a href="https://davaleba15-gold.vercel.app/" target="_blank">
            <h2 className="buttons">VIEW PROJECT</h2>
          </a>
          <div className="greenline"></div>
          </div>

          <div className="flex flex-col">
          <a href="https://github.com/DatoAbuta/Davaleba15" target="_blank">
            <h2 className="buttons">VIEW CODE</h2>
          </a>
          <div className="greenline"></div>
          </div>
        </section>
      </div>
      </section>

      <footer className="flex items-center flex-col gap-5">
        <h1 className="cont mt-[60px]">Contact</h1>
        <p className="desc">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center flex-col" action="">
        <input type="text" placeholder="NAME" {...register("name")}/>
        {errors.name && <p className='errori' style={{color: "red"}}>{errors.name.message}</p>}
        <input type="email" placeholder="EMAIL" {...register("email")}/>
        {errors.email && <p className='errori' style={{color: "red"}}>{errors.email.message}</p>}
        <input style={{height: "107px"}} type="text" placeholder="MESSAGE" {...register("message")}/>
        {errors.message && <p className='errori' style={{color: "red"}}>{errors.message.message}</p>}

        <button className="btn mt-5 pb-2">Send Message</button>
      </form>
      </footer>
    </section>
  );
}