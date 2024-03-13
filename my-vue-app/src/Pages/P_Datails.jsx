import React from 'react'
import Hero from '../components/Hero/Hero'
import Best_Deal from '../components/Best_Deal/Best_Deal'
import DitailSection from '../components/DitailSection.jsx/DitailSection'

const P_Datails = () => {
  return (
    <div>
      <Hero Page="Single Details" />
      <DitailSection />
      <Best_Deal Space="540 m2" Floor="236th" rooms ="8" 
      Parking ="Yes" Payment ="Bank" info="All Info About Apartment" />
    </div>
  )
}

export default P_Datails