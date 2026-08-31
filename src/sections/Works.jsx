import React from 'react'
import WorkCard from '../components/WorkCard'
import { cardsData } from '../constants/data'

function Works() {
  return (
    <div className='min-h-screen flex items-center justify-center gap-16 flex-col sm:mt-16'>
      {
        cardsData.map((cardData) => <WorkCard cardData={cardData} />)
      }
    </div>
  )
}

export default Works