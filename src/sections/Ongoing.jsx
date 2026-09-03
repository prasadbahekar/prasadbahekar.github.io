import { ArrowRight } from 'lucide-react'
import React from 'react'

function OngoingProject() {
  return (
    <section className="relative flex min-h-screen overflow-hidden justify-center px-6 pb-8 pt-40 sm:px-10">
        <div className="mx-8 flex w-full max-w-4xl flex-col items-center">
            <h2 className="mb-12 sm:mb-16 font-inter text-2xl font-semibold text-base-content/80">Ongoing Project</h2>
            <div className="mb-8 p-6 sm:p-8 flex w-full gap-8 flex-col md:flex-row rounded-2xl border border-white/16 items-center">
              <img  className='rounded-lg sm:rounded-xl w-92' src="https://play-lh.googleusercontent.com/q5pnOwW1F77_GF3DnrooFIf_vlhayMZNhJDKDFiLrNcvL-goKkJh9GG8cIL6NqrMwn7YbApcOsx_4fjYr6m1ucA=w526-h296-rw" alt="" />
              <div>
                <h3 className='text-lg font-inter text-base-content/80 mb-1'>Geometry Dash - Remake</h3>
                <p className='font-bricolage text-base-content/60 mb-4'>
                  Making a remake of the original Geometry Dash made by Robtop. The project uses React + Vite and Phaser.js. It contains multiple concepts such as player movement, physics, collision detection, level building and game states.
                </p>
                <a href="" className='btn rounded-full btn-sm cursor-not-allowed flex gap-1' aria-disabled="true">
                  View Repository
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default OngoingProject