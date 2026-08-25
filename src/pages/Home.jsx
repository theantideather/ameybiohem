import { useSeo } from '../hooks/useSeo'
import Hero from '../components/Hero'
import ImpactDashboard from '../components/ImpactDashboard'
import ResultsChart from '../components/ResultsChart'
import SavingsCalculator from '../components/SavingsCalculator'
import Solution from '../components/Solution'
import Manufacturer from '../components/Manufacturer'
import Process from '../components/Process'
import GlassHero from '../components/GlassHero'
import SpecTables from '../components/SpecTables'
import EnvironmentalImpact from '../components/EnvironmentalImpact'
import IndiaPresence from '../components/IndiaPresence'
import GlobalReach from '../components/GlobalReach'
import Stats from '../components/Stats'
import Press from '../components/Press'
import BlogTeaser from '../components/BlogTeaser'
import MouseTrailCTA from '../components/MouseTrailCTA'

export default function Home() {
  useSeo({
    title: 'Greenaid Alpha & Beta, Reactive Dyeing Auxiliary by AmeyBioChem',
    description:
      'Reactive dyeing chemicals that cut salt and soda ash use, save water and speed up jigger and jet dyeing. Made in Solapur, India by AmeyBioChem.',
    path: '/',
  })
  return (
    <>
      <Hero />
      <Press />
      <ImpactDashboard />
      <ResultsChart />
      <SavingsCalculator />
      <Solution />
      <Manufacturer />
      <Process />
      <GlassHero />
      <SpecTables />
      <EnvironmentalImpact />
      <IndiaPresence />
      <GlobalReach />
      <Stats />
      <BlogTeaser />
      <MouseTrailCTA />
    </>
  )
}
