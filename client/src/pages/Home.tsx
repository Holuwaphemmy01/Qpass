import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { CategorySection } from '../components/CategorySection'
import { FeaturedInstitutions } from '../components/FeaturedInstitution'
import { HowItWorks } from '../components/HowItWorks'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CategorySection/>
      <FeaturedInstitutions/>
      <HowItWorks/>
    </div>
  )
}

export default Home
