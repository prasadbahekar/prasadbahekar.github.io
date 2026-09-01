import { ArrowRight } from 'lucide-react'

function WorkCard({ cardData }) {

  return (
    <a href={cardData.url} target='_blank' className='max-w-208 mx-4 sm:mx-12 p-1 sm:p-2 border border-white/15 rounded-3xl'>
      <div className={'bg-linear-to-b sm:from-zinc-800 sm:via-zinc-950 sm:to-black hover:to-black w-full overflow-hidden group border border-white/20 hover:border-white/50 p-6 sm:p-8 cursor-pointer rounded-2xl bg-gray-500/10 transition duration-500 ' + cardData.color}>
        <div className='flex justify-between items-top -mb-1'>
          <h2 className='font-inter text-lg sm:text-xl sm:font-semibold mb-2'>{cardData.title}</h2>
          <ArrowRight className='group-hover:translate-x-1 hover:scale-110 transition duration-400 mt-1 ease-in size-5 sm:size-6' />
        </div>
        <p className='text-base-content/60 font-bricolage mb-3 text-sm sm:text-base'>{cardData.description}</p>
        <div className='flex gap-2 sm:-mb-4 -ml-1'>
          {
            cardData.tags.map((tag) => <p key={tag} className='badge bg-base-300 p-3 text-base-content/60 text-sm'>{tag}</p> )
          }
        </div>
        <img src={cardData.image} alt="" className='w-full translate-y-8 mt-2 sm:translate-y-14 sm:rounded-2xl group-hover:translate-y-10 transition duration-400' />
      </div>
    </a>
  )
}

export default WorkCard