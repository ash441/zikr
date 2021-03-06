import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'

import { Services } from './components/services'
import { Rabbani } from './components/Rabbani'
import { Testimonials } from './components/testimonials'


import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
     
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      {/* <About data={landingPageData.About} /> */}
      <Rabbani />
      <Testimonials data={landingPageData.Testimonials} />
     
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
