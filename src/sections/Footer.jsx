import { useState } from 'react'

function Footer({ setCurrentPage }) {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    await navigator.clipboard.writeText("prasadbahekar108@gmail.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className='relative'>
      <hr className='text-white/15 mb-16 ' />
      <div className='flex justify-center mb-16'>
        <div className='w-full max-w-4xl mx-6'>
          <div className='flex gap-24 sm:gap-32 mb-16'>
            <div className='flex flex-col gap-6'>
              <h3 className='font-inter text-xs font-semibold text-base-content/50'>MAIN</h3>
              <button className='hover:underline text-left transition font-semibold font-bricolage' onClick={() => setCurrentPage("Work")} >Work</button>
              <button className='hover:underline text-left transition font-semibold font-bricolage' onClick={() => setCurrentPage("Info")} >Info</button>
            </div>
            <div className='flex flex-col gap-6'>
              <h3 className='font-inter text-xs font-semibold text-base-content/50'>CONTACT</h3>
              <a className='hover:underline transition font-semibold font-bricolage' href='https://github.com/prasadbahekar' target='_blank' >GitHub</a>
              <div className={`tooltip ${copied && 'tooltip-primary'}`} data-tip={copied ? "Copied!" : "prasadbahekar108@gmail.com"}><button onClick={copyText} className='cursor-pointer hover:underline transition font-semibold font-bricolage'>Email</button></div>
            </div>
          </div>
          <h2 className='font-normal sm:font-semibold font-bricolage mb-1'>© 2026 Prasad Bahekar. All Rights Reserved.</h2>
          <p className='font-bricolage text-base-content/60 text-sm'>Made with love and time</p>
        </div>
      </div>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-125 rounded-full bg-indigo-500/15 blur-[100px]" />
      </div>
    </ div>
  )
}

export default Footer