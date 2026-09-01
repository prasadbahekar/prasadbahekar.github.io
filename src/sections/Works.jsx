import React from 'react'
import WorkCard from '../components/WorkCard'
import { cardsData } from '../constants/data'

function Works() {
  return (
    <div id='works' className='min-h-screen flex items-center justify-center gap-16 flex-col sm:mt-16 mb-32'>
      {
        cardsData.map((cardData) => <WorkCard key={cardData.title} cardData={cardData} />)
      }
    </div>
  )
}

export default Works