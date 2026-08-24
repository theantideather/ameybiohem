import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import ImpactDashboard from '../components/ImpactDashboard'
import ResultsChart from '../components/ResultsChart'
import EnvironmentalImpact from '../components/EnvironmentalImpact'
import WaterCredits from '../components/WaterCredits'

export default function ImpactPage() {
  return (
    <div className="bg-ink">
      <div className="pt-36 pb-8 max-w-7xl mx-auto px-6">
        <Reveal>
          <Eyebrow tone="gold">The Impact</Eyebrow>
          <h1 className="text-display-md text-5xl md:text-6xl mt-4 font-bold text-cream tracking-tight">
            Every claim on this site,
            <br />
            traced back to a batch.
          </h1>
          <p className="mt-5 text-mist text-lg leading-relaxed max-w-xl">
            Chemical bill, effluent, water, energy, throughput, speed, the full measured picture
            of what changes when a dyehouse switches to Greenaid.
          </p>
        </Reveal>
      </div>

      <ImpactDashboard />
      <ResultsChart />
      <EnvironmentalImpact />
      <WaterCredits />
    </div>
  )
}
