import React from 'react'
import Slider from '../components/Slider/Slider'
import Featured from '../components/Featured/Featured'
import Video from '../components/Video/Video'
import Villa_info from '../components/Villa_Info/Villa_info'
import Best_Deal from '../components/Best_Deal/Best_Deal'
import Conact_section from '../components/Conact_section/Conact_section'
import Properties_Section from '../components/Properties_Section/Properties_Section'

const Home = () => {
  return (
    <div>
      <Slider />
      <Featured/>
      <Video />
      <Villa_info />
      <Best_Deal Space="185 m2" Floor="26th" rooms ="4" 
      Parking ="Yes" Payment ="Bank" info="Extra Info About Property" />
      <Properties_Section />
      <Conact_section />
      
    </div>
  )
}

export default Home