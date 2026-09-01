import React from 'react'

function Footer() {
  return (
    <>
    <hr className='text-white/15 mb-16 ' />
    <div className='flex justify-center mb-16'>
      <div className='w-full max-w-4xl mx-6'>
        <div className='flex gap-24 sm:gap-32 mb-16'>
          <div className='flex flex-col gap-6'>
            <h3 className='font-inter text-xs font-semibold text-base-content/50'>MAIN</h3>
            <a className='hover:underline transition font-semibold font-bricolage' href="">Work</a>
            <a className='hover:underline transition font-semibold font-bricolage' href="">Info</a>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='font-inter text-xs font-semibold text-base-content/50'>CONTACT</h3>
            <a className='hover:underline transition font-semibold font-bricolage' href="">GitHub</a>
            <div className='tooltip' data-tip="prasadbahekar108@gmail.com"><a className='hover:underline transition font-semibold font-bricolage' href="">Email</a></div>
          </div>
        </div>
        <h2 className='font-normal sm:font-semibold font-bricolage mb-1'>© 2026 Prasad Bahekar. All Rights Reserved.</h2>
        <p className='font-bricolage text-base-content/60 text-sm'>Made with love and time</p>
      </div>
    </div>
    </>
  )
}

export default Footer