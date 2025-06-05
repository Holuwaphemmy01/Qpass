import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { CategorySection } from '../components/CategorySection'
import { FeaturedInstitutions } from '../components/FeaturedInstitution'
import { HowItWorks } from '../components/HowItWorks'
import { BookingProcess } from '../components/BookingProcess'
import { FeatureSection } from '../components/FeatureSectiont'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CategorySection/>
      <FeaturedInstitutions/>
      <HowItWorks/>
      <BookingProcess/>
      <FeatureSection/>

    </div>
  )
}

export default Home
