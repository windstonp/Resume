import type { NextPage } from 'next'
import { ExpertiseSection } from '../components/organisms/expertiseSection'
import { HomePresentation } from '../components/organisms/homePresentation'
import { ReasonsToWorkSection } from '../components/organisms/reasonToWorkSection'

const Home: NextPage = () => {
  return (
    <>
      <HomePresentation/>
      <ReasonsToWorkSection/>
      <ExpertiseSection />
    </>
  )
}

export default Home
