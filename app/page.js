"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaEnvelope, FaGithub, FaLinkedin, FaYoutube, FaHtml5, FaCss3Alt, FaJava, FaJs, FaPython, FaReact, FaNodeJs, FaGit, FaGithubSquare } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
// import { VscAdd } from "react-icons/vsc";
// import Sivisual

export default function Home() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Whether animation should only happen once
      easing: "ease-in-out", // Animation easing
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setStep(1); // First move up
      setTimeout(() => {
        setStep(2); // Expand width & rotate
      }, 200);
    } else {
      setStep(1); // First reset rotation & width
      setTimeout(() => {
        setStep(0); // Then reset translateY
      }, 200);
    }
  }, [isOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setScrolling(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="bg-gray-900 text-white min-h-screen flex relative">
      {/* Sidebar for Icons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed left-12 top-96 hidden lg:flex flex-col items-center z-30 space-y-4 text-gray-400"
      >
        <Link href="https://github.com/krishna3032004" target="_blank" rel="noreferrer" data-aos="fade-up" className="cursor-pointer text-2xl hover:text-cyan-400"><FaGithub /></Link>
        <Link href="https://www.linkedin.com/in/krishna-gupta-445a75274" target="_blank" rel="noreferrer" className="text-2xl hover:text-cyan-400"><FaLinkedin /></Link>
        <Link href="https://www.instagram.com/_krishnaa30_/" target="_blank" rel="noreferrer" className="text-2xl hover:text-cyan-400"><FaInstagram /></Link>
        {/* <Link href="#" className="text-2xl hover:text-cyan-400"><FaYoutube /></Link> */}
        <div className="w-0.5 h-40 bg-gray-500 mt-4"></div>
      </motion.div>

      {/* Right Side Email */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed right-12 top-96 hidden lg:flex flex-col w-4 items-center z-30 space-y-4 text-gray-400"
      >
        <Link href="mailto:krishnagupta30mar@gmail.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 rotate-90 mb-4">krishnagupta30mar@gmail.com</Link>
        <div className="w-0.5 h-40 bg-gray-500 mt-24"></div>
      </motion.div>

      <div className="w-full fixed h-screen flex md:hidden duration-300 z-20" style={{
        transform: isOpen ? "translateX(0px) translateZ(0px)" : "translateX(100%) translateZ(0px)",
      }}>
        <div className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"></div>
        <div className="w-3/4 h-full bg-[rgb(17,35,64)] flex flex-col  justify-center items-center space-y-8 font-sans">
          <Link href="#" className="flex flex-col text-center space-y-2">
            <span onClick={(e) => {
              handleScroll(e, "about")
              setIsOpen(false)
            }} className="text-white font-Text2 text-sm sm:text-base hover:text-[rgb(100,255,218)] hover:cursor-pointer duration-300">About</span>
          </Link>
          <Link href="#" className="flex flex-col text-center space-y-2">
            <span onClick={(e) => {
              handleScroll(e, "skills")
              setIsOpen(false)
            }} className="text-white font-Text2 text-sm sm:text-base hover:text-[rgb(100,255,218)] hover:cursor-pointer duration-300">Skills</span>
          </Link>
          <Link href="#" className="flex flex-col text-center space-y-2">
            <span onClick={(e) => {
              handleScroll(e, "projects")
              setIsOpen(false)
            }} className="text-white font-Text2 text-sm sm:text-base hover:text-[rgb(100,255,218)] hover:cursor-pointer duration-300">Projects</span>
          </Link>
          <Link href="#" className="flex flex-col text-center space-y-2">
            <span onClick={(e) => {
              handleScroll(e, "contact")
              setIsOpen(false)
            }} className="text-white font-Text2 text-sm sm:text-base hover:text-[rgb(100,255,218)] hover:cursor-pointer duration-300">Contact</span>
          </Link>
          <Link href="/resume.pdf" target="_blank" rel="noreferrer">
            <button className="rounded border font-Text2 cursor-pointer  border-[rgb(100,255,218)] hover:bg-[rgb(21,48,64)] py-2 sm:py-4 px-5 sm:px-10 text-xs text-[rgb(100,255,218)]">Resume</button>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center text-center ">
        <header
          className={`fixed top-0 w-full p-4  z-20   transition duration-200 ${isOpen ? "bg-[rgba(17,24,39,0)]" : "bg-[rgb(17,24,39,0.6)]"} ${scrolling ? "-translate-y-full" : "translate-y-0"}`}
        >
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            {/* <div className="text-2xl font-bold text-cyan-400">K</div> */}
            <div className="w-10">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradientK" x1="0%" y1="0%" x2="50%" y2="50%">
                    <stop offset="0%" style={{ stopColor: "#64ffda", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#b19cd9", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M 10 10 L 10 90 M 10 50 L 90 10 L 50 50 L 90 90"
                  stroke="url(#gradientK)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="md:hidden  text-white space-y-2 left-0 hover:cursor-pointer mt-2">
              <div className="flex justify-end">
                <div className="w-8 h-0.5 rounded bg-[rgb(100,255,218)] transition-normal duration-100" style={{
                  transform:
                    step === 0
                      ? "none"
                      : step === 1
                        ? "translateY(10px)"
                        : "translateY(10px) rotate(45deg) translateZ(0px)",
                }} ></div>
              </div>
              <div className="flex justify-end " style={{ opacity: isOpen ? 0 : 1 }} >
                <div className="w-6 h-0.5 rounded bg-[rgb(100,255,218)]"></div>
              </div>
              <div className="flex justify-end">
                <div className="w-4 h-0.5 rounded bg-[rgb(100,255,218)]  transition-normal duration-50 "
                  style={{
                    width: step === 2 ? "150%" : "50%",
                    transform:
                      step === 0
                        ? "none"
                        : step === 1 && isOpen
                          ? "translateY(-10px)"
                          : step === 1 && !isOpen
                            ? "translateY(-10px) rotate(0deg) translateZ(0px)"
                            : "translateY(-10px) rotate(-45deg) translateZ(0px)",
                  }} ></div>
                {/* <div className="w-4 h-0.5 rounded bg-[rgb(100,255,218)]" style="width:50%; transform: none;"></div> */}
              </div>
            </div>
            <div className="space-x-7 md:flex hidden flex-row items-center">
              {/* <a href="#about">About</a>
              <a href="#experience">Skills</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a> */}
              <button onClick={(e) => handleScroll(e, "about")} className="text-white hover:text-cyan-400 transition cursor-pointer">
                About
              </button>
              <button onClick={(e) => handleScroll(e, "skills")} className="text-white hover:text-cyan-400 transition cursor-pointer">
                Skills
              </button>
              <button onClick={(e) => handleScroll(e, "projects")} className="text-white hover:text-cyan-400 transition cursor-pointer">
                Projects
              </button>
              <button onClick={(e) => handleScroll(e, "contact")} className="text-white hover:text-cyan-400 transition cursor-pointer">
                Contact
              </button>
              <Link href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
                <button className="border px-5 py-2 rounded border-cyan-400 hover:bg-[rgb(21,48,64)] cursor-pointer">Resume</button>
              </Link>
            </div>
          </nav>
        </header>


        <main data-aos="fade-up" className="h-full flex flex-col items-start justify-center px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52 text-left   aos-init aos-animate">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-cyan-400 text-xl">Hi, my name is</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">Krishna Gupta.</motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="text-gray-400 font-bold text-2xl lg:text-6xl sm:text-4xl md:text-5xl mt-4">Bringing ideas to life with code.</motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }} className=" leading-relaxed   text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider ">
            I&apos;m a <span className="text-cyan-400">Full Stack Web Developer</span> with a passion for creating <span className="text-cyan-400">innovative and performance-driven applications. </span>
            With expertise in both <span className="text-cyan-400">front-end</span> and <span className="text-cyan-400">back-end development</span>,
            I work with a diverse range of technologies, including <span className="text-cyan-400">web3</span> and traditional web applications. I enjoy solving
            challenging projects that drive <span className="text-cyan-400">innovation</span> and deliver high-quality results.  My approach is rooted in <span className="text-cyan-400">problem-solving </span>
            —crafting efficient<span className="text-cyan-400"> backend architectures</span>, integrating <span className="text-cyan-400">  APIs, </span>and ensuring smooth <span className="text-cyan-400">front-end </span>experiences. I am excited to contribute to dynamic projects that push the boundaries of technology.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            href={"/resume.pdf"} target="_blank" rel="noopener noreferrer"
            className="mt-12 border-2 border-cyan-400 text-cyan-400 px-4 sm:px-8 py-3 sm:py-4 rounded-lg  text-center"
          >
            Check out my resume!
          </motion.a>
        </main>


        <main id="about" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary Aos-init aos-animate ">
          {/* <main id="about" className="h-full flex flex-col lg:flex-row items-center justify-center pt-40 max-w-5xl mx-auto text-left"> */}
          <div data-aos="fade-up" className="flex flex-col space-y-16 px-4 sm:px-0 w-full sm:w-[500px]  md:w-[700px] lg:w-[900px] ">
            <div className="flex flex-row items-center  ">
              <div className="flex flex-row  items-center mr-4 ">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="flex-none  opacity-85 font-bold tracking-wider text-xl sm:text-2xl text-cyan-400">About Me</motion.h2>

              </div>
              <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-9"></div>
            </div>
            <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 items-center md:items-start  md:space-x-8 sm:space-x-2 ">
              {/* <div className="lg:w-3/5"> */}
              <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="text-gray-300 text-justify  leading-relaxed ">

                  Hello! My name is Krishna, and I&apos;m a passionate <span className="text-cyan-400">Full-Stack Web Developer </span>  with a strong <span className="text-cyan-400">problem-solving </span>mindset. My journey into the world of technology began with a curiosity for building things that not only function efficiently but also provide an outstanding user experience. I specialize in  <span className="text-cyan-400">Next.js, React.js, Node.js, Express.js, </span>and <span className="text-cyan-400">MongoDB</span>, crafting high-performance web applications that seamlessly merge design and functionality.
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }} className="text-gray-300 text-justify mt-6 leading-relaxed ">
                 
                  Beyond <span className="text-cyan-400">coding </span>, I have a keen interest in <span className="text-cyan-400">Data Structures and Algorithms </span>, constantly honing my <span className="text-cyan-400">problem-solving </span> skills to build better, more efficient applications. Throughout my education and self-learning, I have worked on multiple projects, including <span className="text-cyan-400">Opulenza </span>, a fully functional e-commerce platform deployed on <span className="text-cyan-400">Vercel </span>, as well as a <span className="text-cyan-400">Dermatology platform </span> ,which connect the patient with dermotologist, each demonstrating my ability to blend technology with real-world solutions.
                </motion.p>
              </div>

              <motion.div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72  sm:w-[70%] w-[82%] sm:h-[370px] h-[80vw]  justify-center items-center flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8 }}>
                <motion.div
                  className="group-hover:translate-x-3 border-cyan-400 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 translate-x-6  translate-y-5 rounded"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                ></motion.div>
                <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
                  {/* <div className="absolute w-full h-[36vh] group-hover:opacity-0 bg-[rgb(100,255,218)] opacity-10 duration-300 rounded overflow-hidden"></div> */}
                  <Image
                    src="/photo.jpg"
                    alt="Profile Picture"
                    width={400}
                    height={400}
                    // className=" rounded-lg "
                    className=" rounded-lg transition-all duration-500 md:brightness-80 md:group-hover:brightness-95"
                  /></div>

              </motion.div>
            </div>

            {/* <motion.div 
            className="relative group overflow-hidden rounded-lg mt-10 lg:mt-0 lg:w-2/6"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.8 }}
          >
            <motion.div 
              className="absolute inset-0 border-4 border-cyan-400 transition-all duration-500 group-hover:-translate-x-5 group-hover:-translate-y-5"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            ></motion.div>
            <Image 
              src="/photo.jpg" 
              alt="Profile Picture" 
              width={400} 
              height={400} 
              className=" rounded-lg transition-all duration-500 group-hover:brightness-75"
            />
          </motion.div> */}
          </div>
        </main>

        <section id="skills" data-aos="fade-up" className="py-16 mt-20 px-4 max-w-5xl mx-auto">
          {/* <h2 className="text-4xl font-bold text-cyan-400 text-center mb-8">Skills</h2> */}
          <div className="flex flex-row items-center justify-center mb-20 md:px-0 ">
            <div className="bg-gray-400 h-[0.2px] w-full mr-5 xl:w-1/3 md:w-1/2"></div>
            <h2 className=" font-bold tracking-wider text-cyan-400 text-lg md:text-3xl flex items-center justify-center w-36 opacity-85">Skills</h2>
            <div className="bg-gray-400 h-[0.2px] w-full ml-5 xl:w-1/3 md:w-1/2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm text-center">
            {/* Languages */}
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <FaHtml5 className="text-3xl mr-2" /> HTML
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <FaCss3Alt className="text-3xl mr-2" /> CSS
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <FaJava className="text-3xl mr-2" /> Java
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <FaJs className="text-3xl mr-2" /> JavaScript
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <FaPython className="text-3xl mr-2" /> Python
            </div>
            {/* Technologies */}
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <SiTailwindcss className="text-3xl mr-2" /> Tailwind CSS
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <FaReact className="text-3xl mr-2" /> React.js
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <SiNextdotjs className="text-3xl mr-2" /> Next.js
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <FaNodeJs className="text-3xl mr-2" /> Node.js
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <SiExpress className="text-3xl mr-2" /> Express.js
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <SiMongodb className="text-3xl mr-2" /> MongoDB
            </div>
            {/* Tools */}
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <FaGit className="text-3xl mr-2" /> Git
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
              <FaGithubSquare className="text-3xl mr-2" /> GitHub
            </div>
            {/* <div className="flex items-center justify-center bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-cyan-400 transition duration-300">
            <VscAdd className="text-3xl mr-2" /> VS Code
          </div> */}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" data-aos="fade-up" className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full   2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4">
          {/* <section id="projects" className="py-16 px-4 max-w-7xl mx-auto"> */}
          <div className="flex flex-row items-center mb-20 md:px-0 ">
            <h2 className=" font-bold tracking-wider text-cyan-400 text-lg md:text-3xl flex items-start w-44 md:w-48 opacity-85">Projects</h2>
            <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
          </div>
          <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">


            <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
              {/* <div className="relative md:grid md:grid-cols-12 w-full md:h-96 aos-init aos-animate"> */}
              <div className="hidden bg-AAprimary z-10  py-4  absolute md:grid grid-cols-12 w-full h-full  content-center ">
                <div className="relative rounded w-full h-full  col-span-7 ">
                <Link href="https://anandamwellness-xi.vercel.app" target="_blank" rel="noopener noreferrer"><Image src="/anandam2.png" width={500} height={300} className="w-full rounded h-full transition-all duration-500 brightness-60 hover:brightness-90" alt=""></Image></Link>
                </div>
              </div>
              <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                <div className="absolute md:hidden w-full h-full opacity-20 z-0 md:order-2">
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                    <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                    <Link href="https://anandamwellness-xi.vercel.app" target="_blank" rel="noopener noreferrer"><Image src="/getmeacoffee2.png" width={500} height={300} className="w-full h-full" alt=""></Image></Link>
                  </div>
                </div>
                <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 items-start  col-span-8 flex flex-col md:items-end space-y-3">
                  <div className="flex flex-col space-y-1 md:items-end  z-10">
                    {/* <span className="text-[rgb(100,255,218)] text-base items-start flex ">Vision.io</span> */}
                    <Link href="https://anandamwellness-xi.vercel.app" target="_blank" rel="noopener noreferrer">
                      <span className=" md:text-gray-200 text-[rgb(100,255,218)] font-bold text-xl hover:cursor-pointer">Anandam Wellness</span>
                    </Link>
                  </div>
                  <div className="w-full md:bg-[rgb(17,35,64)] rounded-md py-6 md:p-6  z-10">
                    {/* <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">A <span className="text-[rgb(100,255,218)]">full-stack </span>web application built with <span className="text-[rgb(100,255,218)]">Next.js </span> that replicates the core functionalities of <span className="text-[rgb(100,255,218)]">Patreon. </span> This platform allows content creators to receive payments and support from their fans. Fans can make payments, leave messages, and view the top contributions.
                    <span className="text-[rgb(100,255,218)]">top contributions.</span>\
                    </p> */}
                    {/* **Anandam Wellness** is a full-stack telemedicine platform focused on dermatology consultations. It allows users to connect with doctors, chat in real-time, initiate secure video calls, and receive digital prescriptions. Doctors can manage their profiles, which are verified by admins before going live. The platform uses modern web technologies like Next.js, Socket.IO, WebRTC, and Razorpay. */}
                    {/* Anandam Wellness is a feature-rich telemedicine platform built with Next.js (App Router), enabling seamless online consultations between doctors and patients. This project aims to bridge the gap between healthcare providers and patients by offering real-time chat, video consultations, and digital prescriptions — all in a secure and user-friendly interface. */}
                    <p className="text-gray-300 md:text-gray-400 text-left md:text-left "> <span className="text-[rgb(100,255,218)]">Anandam Wellness </span> is a feature-rich telemedicine platform built with  <span className="text-[rgb(100,255,218)]">Next.js </span> (App Router), enabling seamless online consultations between doctors and patients. This project aims to bridge the gap between healthcare providers and patients by offering <span className="text-[rgb(100,255,218)]">real-time chat, video consultations, and digital prescriptions </span>  — all in a <span className="text-[rgb(100,255,218)]">secure</span> and user-friendly interface.
                    <span className="text-[rgb(100,255,218)]"></span>
                    </p>

                    </div><ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end"><span className="pr-4 z-10">React</span><span className="pr-4 z-10">Next.js</span><span className="pr-4 z-10">Next-Auth</span><span className="pr-4 z-10">Mongoose</span><span className="pr-4 z-10">Razorpay</span><span className="pr-4 z-10">Socket.IO</span><span className="pr-4 z-10">Node.js</span><span className="pr-4 z-10">Express</span></ul><div className="z-10 flex fle-row space-x-5 "><Link href="https://github.com/krishna3032004/Anandam-Wellness---a-Dermotology-plateform.git" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link><Link href="https://anandamwellness-xi.vercel.app" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-[rgb(100,255,218)] hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></Link>
                    {/* <Link href="https://www.vision.io" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-[rgb(100,255,218)] hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></Link> */}
                    </div></div>
              </div>
            </div>



            <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
              {/* <div className="relative md:grid md:grid-cols-12 w-full md:h-96 aos-init aos-animate"> */}
              <div className="hidden bg-AAprimary z-10  py-4  absolute md:grid grid-cols-12 w-full h-full  content-center ">
                <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                  <Link href="https://opulenza-psi.vercel.app/" target="_blank" rel="noopener noreferrer"><Image src="/opulenza2.png" width={500} height={300} className="w-full rounded h-full transition-all duration-500 brightness-60 hover:brightness-90" alt=""></Image></Link>
                </div>
              </div>
              <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                <div className="absolute w-full h-full opacity-20 md:hidden z-0 md:order-2">
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                    <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                    <Link href="https://opulenza-psi.vercel.app/" target="_blank" rel="noopener noreferrer"><Image src="/opulenza2.png" width={500} height={300} className="w-full h-full" alt=""></Image></Link>
                  </div>
                </div>
                <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start  space-y-3 md:order-1">
                  <div className="flex flex-col space-y-1  z-10">
                    {/* <span className="text-[rgb(100,255,218)] text-base items-start flex">Vision.io</span> */}
                    <Link href="https://opulenza-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <span className=" md:text-gray-200 text-[rgb(100,255,218)] font-bold text-xl hover:cursor-pointer">Opulenza Shopping</span>
                    </Link>
                  </div>
                  <div className="w-full md:bg-[rgb(17,35,64)] rounded-md py-6 md:p-6  z-10">
                    <p className="text-gray-300 md:text-gray-400 text-left md:text-left "><span className="text-[rgb(100,255,218)]">Opulenza </span>is a fully functional <span className="text-[rgb(100,255,218)]"> ecommerce </span>  web application built with Next.js, featuring comprehensive <span className="text-[rgb(100,255,218)]">authentication</span> , user management, product browsing, shopping <span className="text-[rgb(100,255,218)]">cart </span> functionality, secure payment processing, and more. The platform also includes a <span className="text-[rgb(100,255,218)]">basic chatbot </span>that provides <span className="text-[rgb(100,255,218)]">general </span> information and assists users with common queries, improving user interaction.
                    </p></div><ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start"><span className="pr-4 z-10">Next.js</span><span className="pr-4 z-10">Next-Auth</span><span className="pr-4 z-10">Razorpay</span><span className="pr-4 z-10">Gemini</span><span className="pr-4 z-10">Nodemailer</span><span className="pr-4 z-10">Mongodb</span></ul><div className="z-10 flex fle-row space-x-5 "><Link href="https://github.com/krishna3032004/Opulenza-shopping-app-using-next.js-.git" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link><Link href="https://opulenza-psi.vercel.app/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-[rgb(100,255,218)] hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></Link></div></div>
              </div>
            </div>



            <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
              {/* <div className="relative md:grid md:grid-cols-12 w-full md:h-96 aos-init aos-animate"> */}
              <div className="hidden bg-AAprimary z-10  py-4  absolute md:grid grid-cols-12 w-full h-full  content-center ">
                <div className="relative rounded w-full h-full  col-span-7 ">
                <Link href="https://github.com/krishna3032004/GetMeACoffee-app-using-next.js.git" target="_blank" rel="noopener noreferrer"><Image src="/getmeacoffee2.png" width={500} height={300} className="w-full rounded h-full transition-all duration-500 brightness-60 hover:brightness-90" alt=""></Image></Link>
                </div>
              </div>
              <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                <div className="absolute md:hidden w-full h-full opacity-20 z-0 md:order-2">
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                    <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                    <Link href="https://github.com/krishna3032004/GetMeACoffee-app-using-next.js.git" target="_blank" rel="noopener noreferrer"><Image src="/getmeacoffee2.png" width={500} height={300} className="w-full h-full" alt=""></Image></Link>
                  </div>
                </div>
                <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 items-start  col-span-8 flex flex-col md:items-end space-y-3">
                  <div className="flex flex-col space-y-1 md:items-end  z-10">
                    {/* <span className="text-[rgb(100,255,218)] text-base items-start flex ">Vision.io</span> */}
                    <Link href="https://github.com/krishna3032004/GetMeACoffee-app-using-next.js.git" target="_blank" rel="noopener noreferrer">
                      <span className=" md:text-gray-200 text-[rgb(100,255,218)] font-bold text-xl hover:cursor-pointer">GetMeACoffee</span>
                    </Link>
                  </div>
                  <div className="w-full md:bg-[rgb(17,35,64)] rounded-md py-6 md:p-6  z-10">
                    <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">A <span className="text-[rgb(100,255,218)]">full-stack </span>web application built with <span className="text-[rgb(100,255,218)]">Next.js </span> that replicates the core functionalities of <span className="text-[rgb(100,255,218)]">Patreon. </span> This platform allows content creators to receive payments and support from their fans. Fans can make payments, leave messages, and view the 
                    <span className="text-[rgb(100,255,218)]"> top contributions.</span>
                    {/* . This showcased our commitment to delivering innovative solutions. */}
                    </p></div><ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end"><span className="pr-4 z-10">React</span><span className="pr-4 z-10">Next.js</span><span className="pr-4 z-10">Next-Auth</span><span className="pr-4 z-10">Mongoose</span><span className="pr-4 z-10">Razorpay</span></ul><div className="z-10 flex fle-row space-x-5 "><Link href="https://github.com/krishna3032004/GetMeACoffee-app-using-next.js.git" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link>
                    {/* <Link href="https://www.vision.io" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-[rgb(100,255,218)] hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></Link> */}
                    </div></div>
              </div>
            </div>



            <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
              {/* <div className="relative md:grid md:grid-cols-12 w-full md:h-96 aos-init aos-animate"> */}
              <div className="hidden bg-AAprimary z-10  py-4  absolute md:grid grid-cols-12 w-full h-full  content-center ">
                <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                  <Link href="https://github.com/krishna3032004/TODO-list-app-using-React-Mongodb.git" target="_blank" rel="noopener noreferrer"><Image src="/todolist.png" width={500} height={300} className="w-full rounded h-full transition-all duration-500 brightness-60 hover:brightness-90" alt=""></Image></Link>
                </div>
              </div>
              <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                <div className="absolute w-full h-full opacity-20 md:hidden z-0 md:order-2">
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                    <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                    <Link href="https://github.com/krishna3032004/TODO-list-app-using-React-Mongodb.git" target="_blank" rel="noopener noreferrer"><Image src="/todolist.png" width={500} height={300} className="w-full h-full" alt=""></Image></Link>
                  </div>
                </div>
                <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start  space-y-3 md:order-1">
                  <div className="flex flex-col space-y-1  z-10">
                    {/* <span className="text-[rgb(100,255,218)] text-base items-start flex">Vision.io</span> */}
                    <Link href="https://github.com/krishna3032004/TODO-list-app-using-React-Mongodb.git" target="_blank" rel="noopener noreferrer">
                      <span className=" md:text-gray-200 text-[rgb(100,255,218)] font-bold text-xl hover:cursor-pointer">TO-DO List Website</span>
                    </Link>
                  </div>
                  <div className="w-full md:bg-[rgb(17,35,64)] rounded-md py-6 md:p-6  z-10">
                    <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">A simple and intuitive  <span className="text-[rgb(100,255,218)]">Todo List </span>application built with <span className="text-[rgb(100,255,218)]">Next.js. </span> This app allows users to manage their daily tasks efficiently by adding, updating, and deleting tasks. With a clean and user-friendly interface, users can keep track of their to-do items and organize their day effectively.
                    </p></div><ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start"><span className="pr-4 z-10">React</span><span className="pr-4 z-10">Mongodb</span><span className="pr-4 z-10">HTML/CSS</span><span className="pr-4 z-10">Javascript</span></ul><div className="z-10 flex fle-row space-x-5 "><Link href="https://github.com/krishna3032004/TODO-list-app-using-React-Mongodb.git" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link>
                    {/* <Link href="https://opulenza-psi.vercel.app/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-[rgb(100,255,218)] hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></Link> */}
                    </div></div>
              </div>
            </div>


            <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
              {/* <div className="relative md:grid md:grid-cols-12 w-full md:h-96 aos-init aos-animate"> */}
              <div className="hidden bg-AAprimary z-10  py-4  absolute md:grid grid-cols-12 w-full h-full  content-center ">
                <div className="relative rounded w-full h-full  col-span-7 ">
                <Link href="https://github.com/krishna3032004/Spotify-clone-.git" target="_blank" rel="noopener noreferrer"><Image src="/spotify.png" width={500} height={300} className="w-full rounded h-full transition-all duration-500 brightness-60 hover:brightness-90" alt=""></Image></Link>
                </div>
              </div>
              <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                <div className="absolute md:hidden w-full h-full opacity-20 z-0 md:order-2">
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                    <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                    <Link href="https://github.com/krishna3032004/Spotify-clone-.git" target="_blank" rel="noopener noreferrer"><Image src="/spotify.png" width={500} height={300} className="w-full h-full" alt=""></Image></Link>
                  </div>
                </div>
                <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 items-start  col-span-8 flex flex-col md:items-end space-y-3">
                  <div className="flex flex-col space-y-1 md:items-end  z-10">
                    {/* <span className="text-[rgb(100,255,218)] text-base items-start flex ">Real Time Music application</span> */}
                    <Link href="https://github.com/krishna3032004/Spotify-clone-.git" target="_blank" rel="noopener noreferrer">
                      {/* <span className=" md:text-gray-200 text-[rgb(100,255,218)] font-bold text-xl hover:cursor-pointer"> */}
                      <span className=" md:text-gray-200 text-[rgb(100,255,218)] font-bold text-xl hover:cursor-pointer">
                        Real Time Music application</span>
                    </Link>
                  </div>
                  <div className="w-full md:bg-[rgb(17,35,64)] rounded-md py-6 md:p-6  z-10">
                    <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">This <span className="text-[rgb(100,255,218)]">Real Music Web Player </span> is a web-based music streaming platform with a <span className="text-[hsl(166,100%,70%)]">Spotify-like interface. </span>  It features a <span className="text-[rgb(100,255,218)]">simple playlist </span> where users can browse, select, and play <span className="text-[rgb(100,255,218)]">songs </span>seamlessly. The design focuses on a smooth user experience, offering an intuitive and engaging way to enjoy music online.
                    </p></div><ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end"><span className="pr-4 z-10">HTML</span><span className="pr-4 z-10">CSS</span><span className="pr-4 z-10">Javascript</span></ul><div className="z-10 flex fle-row space-x-5 "><Link href="https://github.com/krishna3032004/Spotify-clone-.git" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link>
                    {/* <Link href="https://www.vision.io" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-300 hover:text-[rgb(100,255,218)] hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1  hover:scale-110 duration-200"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></Link> */}
                    </div></div>
              </div>
            </div>



          </div>
        </section>






        <div id="contact" data-aos="fade-up" className="pt-16 pb-10 flex flex-col space-y-4 w-full items-center bg-AAprimary aos-init aos-animate">
          {/* <section id="contact" className="py-16 text-white text-center bg-transparent"> */}
          <h2 data-aos="fade-up"
            className="text-cyan-400 text-3xl sm:text-4xl font-bold tracking-wider opacity-85"
            // className="text-4xl text-cyan-400 opacity-85 font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </h2>
          <p data-aos="fade-up"
            className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]"
            // className="mb-6 text-gray-300 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Although I&apos;m always open for any new opportunities, my inbox is open.
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <Link href={"mailto:krishnagupta30mar@gmail.com"} target="_blank" rel="noreferrer">
            <button data-aos="fade-up"
              className=" text-sm text-[rgb(100,255,218)] cursor-pointer border-[rgb(100,255,218)]  px-8 py-4 border-[1.5px] rounded-lg "
              // className="px-6 py-3 border-2 border-teal-400 text-teal-400 rounded-lg transition-all duration-300 transform cursor-pointer"
              whilehover={{ scale: 1.1 }}
            >
              Say Hello
            </button>
            {/* <motion.h2
            className="text-cyan-400 text-3xl sm:text-4xl font-bold tracking-wider opacity-85"
            // className="text-4xl text-cyan-400 opacity-85 font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]"
            // className="mb-6 text-gray-300 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Although I&apos;m always open for any new opportunities, my inbox is open.
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </motion.p>
          <Link href={"mailto:krishnagupta30mar@gmail.com"} target="_blank" rel="noreferrer">
            <motion.button
              className=" text-sm text-[rgb(100,255,218)] cursor-pointer border-[rgb(100,255,218)]  px-8 py-4 border-[1.5px] rounded-lg "
              // className="px-6 py-3 border-2 border-teal-400 text-teal-400 rounded-lg transition-all duration-300 transform cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              Say Hello
            </motion.button> */}
          </Link>
          <div className="mt-28 text-gray-400 text-sm">
            <div className="flex lg:hidden  items-center justify-center gap-4 text-2xl mb-4">
              <Link href="https://github.com/krishna3032004" target="_blank" rel="noreferrer" ><FaGithub className="cursor-pointer hover:text-cyan-400 transition-colors duration-300" /></Link>
              <Link href="https://www.linkedin.com/in/krishna-gupta-445a75274" target="_blank" rel="noreferrer"><FaLinkedin className="cursor-pointer hover:text-cyan-400 transition-colors duration-300" /></Link>
              <Link href="https://www.instagram.com/_krishnaa30_/" target="_blank" ><FaInstagram className="cursor-pointer hover:text-cyan-400 transition-colors duration-300" /></Link>
              {/* <FaYoutube className="cursor-pointer hover:text-cyan-400 transition-colors duration-300" /> */}
            </div>
            <Link href={"https://github.com/krishna3032004/Portfolio-website.git"} target="_blank" rel="noreferrer" className="group">
              <p className="transition-colors duration-300 group-hover:text-cyan-400">Built by Krishna Gupta</p>
              <div className="mt-2 flex items-center justify-center gap-2">
                <FaGithub className="text-gray-400 transition-colors duration-300 group-hover:text-cyan-400" />
                <div

                  className="transition-colors duration-300 group-hover:text-cyan-400"
                >
                  Source code - Github
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
