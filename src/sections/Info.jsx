import logoWhite from "../assets/favicons/logo-dark.png"
import React from "react";

function Info() {
  return (
    <section className="flex min-h-screen pb-8 overflow-hidden px-6 sm:px-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden"> 
            <div className=" absolute left-0 top-1/2 -translate-y-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-indigo-500/13 blur-[100px]" /> 
            <div className=" absolute right-0 top-1/2 -translate-y-1/2 h-125 w-125 translate-x-1/2 rounded-full bg-indigo-500/13 blur-[100px]" /> 
        </div>

        <div className="mx-auto w-full max-w-4xl pt-[35vh]">
            <p className="mb-3 font-bricolage text-sm font-semibold tracking-wide text-base-content/50">About Me</p>
            <h2 className="max-w-4xl font-inter text-3xl leading-tight tracking-tight text-base-content/90 sm:text-4xl md:text-5xl md:leading-[1.15]">
                I create interactive experiences while constantly{" "}
                <span className="font-semibold font-bricolage italic text-primary/80 drop-shadow-[0_0_12px_rgba(99,102,241,0.2)]">learning and building.</span>
            </h2>
            <p className="mt-2 mb-40 text-base-content/50 font-bricolage">
              A 14 year old who is trying is best to upgrade his developing skills
            </p>

            <div className="mockup-browser bg-zinc-800/50 w-full border border-white/2">
              <div className="mockup-browser-toolbar">
                <div className="input">https://about-me.com</div>
              </div>
              <div className="flex sm:flex-row flex-col gap-8 sm:h-128 p-8">
                <div className="h-full p-2 border border-white/4 rounded-3xl">
                  <div className="py-4 h-full w-64 bg-black/50 rounded-2xl flex items-center justify-center">
                    <img src={logoWhite} alt="" className="w-28 select-none" />
                  </div>
                </div>
                <div className="p-2 my-auto">
                  <h3 className="font-inter font-semibold mb-2 text-lg text-base-content/80">About Me</h3>
                  <p className="text-base-content/70 font-bricolage">
                    I'm a <span className="font-semibold"> {(new Date().getFullYear()) - 2012} year old student </span> and developer who enjoys building things on the web. I started with HTML and CSS, moved into JavaScript and React, and I'm currently exploring full-stack development with Next.js, Node.js and MongoDB.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
                    <div className="border border-white/4 hover:border-white/8 transition rounded-xl p-4">
                      <p className="text-xs text-base-content/50">Learning</p>
                      <p className="font-semibold mt-1 text-base-content/70">Backend</p>
                    </div>

                    <div className="border border-white/4 hover:border-white/8 transition rounded-xl p-4">
                      <p className="text-xs text-base-content/50">Based in</p>
                      <p className="font-semibold mt-1 text-base-content/70">India </p>
                    </div>

                    <div className="border border-white/4 hover:border-white/8 transition rounded-xl p-4">
                      <p className="text-xs text-base-content/50">Favorite editor</p>
                      <p className="font-semibold mt-1 text-base-content/70">Zed & VSC</p>
                    </div>

                    <div className="border border-white/4 hover:border-white/8 transition rounded-xl p-4">
                      <p className="text-xs text-base-content/50">Status</p>
                      <p className="font-semibold mt-1 text-base-content/70">Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  );
}

export default Info;