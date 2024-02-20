
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import avatar from "../../public/avatar-girl.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={darkMode ? "dark" : ""}>
      <div
        className=" bg-white px-5 md:px-20 lg:px-20 dark:bg-gray-900"
      >
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">parasolya</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:fill-white" />
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md text-white ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Olga Pysarenko</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Full stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus odio obcaecati fugit, vero ex, ducimus minus facilis ab, architecto delectus illo quas. Consequuntur laboriosam ad harum nobis officiis modi.</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillLinkedin />
              <AiFillYoutube />
              <FaTelegramPlane />
            </div>
            <div className="mx-auto relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
              <Image alt="photo" src={avatar} objectFit="cover" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beuautifil Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white">
              <Image src={code} alt="code" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beuautifil Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white">
              <Image src={consulting} alt="consulting" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beuautifil Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap py-10">
            <div className="basis-1/3 flex-1">
              <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image src={web1} alt="web1" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image src={web2} alt="web2" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image src={web3} alt="web3" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image src={web4} alt="web4" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image src={web5} alt="web5" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image src={web6} alt="web6" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

        </section>
      </div>
    </main>

  );
}
