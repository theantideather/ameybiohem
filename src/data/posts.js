import jars from '../assets/photos/jars.png'
import forestRiver from '../assets/photos/forest-river.png'
import heroDyehouse from '../assets/photos/hero-dyehouse.jpg'
import jetDyeingMachine from '../assets/photos/jet-dyeing-machine.jpg'
import yarnDrying from '../assets/photos/yarn-drying.jpg'
import finishingLine from '../assets/photos/finishing-line.jpg'

export const POSTS = [
  {
    slug: 'salt-soda-reduction',
    title: 'How Greenaid Alpha Cuts Salt and Soda Ash by Up to 60%',
    excerpt:
      'Electrolyte and alkali are the two highest-volume inputs in reactive dyeing. Here is what actually happens to the dyebath when Alpha extends both.',
    tag: 'Product Science',
    image: yarnDrying,
    readTime: '6 min read',
    date: '2026-02-14',
    body: [
      { h: 'The two inputs that dominate every reactive recipe' },
      {
        p: 'In exhaust reactive dyeing on cotton, viscose, modal and lyocell, two chemicals do most of the heavy lifting: electrolyte (sodium chloride or sodium sulphate) drives the dye onto the fibre, and soda ash (sodium carbonate) activates the dye-fibre bond. A conventional recipe runs 40–100 g/L of electrolyte and 8–20 g/L of soda ash, by far the highest-volume, highest-cost inputs in the dyebath.',
      },
      {
        p: 'Both come with a cost beyond the purchase price. High electrolyte loads translate directly into high-salinity effluent that is expensive and energy-intensive to treat. High alkalinity from soda ash raises effluent pH, demands acid neutralisation downstream, and, at elevated concentrations, degrades fibre tensile strength, which shows up later as increased rework.',
      },
      { h: 'What Alpha does at the dyebath stage' },
      {
        p: 'Greenaid Alpha is added once, at the start of the dyebath, at 1.0–1.5% owf. It functions as an electrolyte extender and an alkali extender simultaneously, meaning the dyebath needs a smaller quantity of salt and soda ash to reach the same exhaustion and fixation levels. In controlled trials across 0.5–4.0% owf shade depths on 100% cotton, that translated to a 40–60% reduction in both salt and soda ash dosage, with equivalent dye exhaustion and fixation efficiency maintained within a fibre-protective pH range.',
      },
      {
        p: 'Alpha also folds in four more functions that are normally separate purchases: leveling and migration control (uniform dye uptake, no patchiness), chelation (sequestering calcium, magnesium and trace metals up to 500 ppm hardness without a separate sequestering agent), wetting (rapid, uniform substrate penetration), and anti-foaming (foam control in high-agitation machines). One addition, six jobs.',
      },
      { h: 'Where the number comes from' },
      {
        p: 'The 40–60% figure is not a marketing range, it is the measured spread across shade depths and substrates in AmeyBioChem\'s trial data. Lighter shades sit toward the top of that range; heavier, more electrolyte-hungry shades sit toward the bottom. Either way, it is the single biggest line item a dyehouse can compress without changing a single machine setting.',
      },
      { h: 'What it does to the rest of the batch' },
      {
        p: 'Less salt and soda doesn\'t just save on raw material spend. Lower alkalinity and lower dissolved solids in the dyebath carry through to the effluent: conductivity drops 40–60%, total dissolved solids drop 40–55%, and effluent pH falls from the 10.5–11.5 range down to 9.0–10.0, meaningfully less acid needed to neutralise before discharge. That is the direct line from "less salt in the dyebath" to "lower ETP operating cost."',
      },
    ],
  },
  {
    slug: 'fastness-science',
    title: 'What Greenaid Beta Actually Does After Dyeing',
    excerpt:
      'Fastness enhancer, after-treatment consolidator, dosage halver, Beta does three jobs in one bath. Here is the ISO 105 data behind the claim.',
    tag: 'Product Science',
    image: jetDyeingMachine,
    readTime: '5 min read',
    date: '2026-03-02',
    body: [
      { h: 'The after-treatment bath nobody thinks to optimise' },
      {
        p: 'Most cost-reduction conversations in a dyehouse focus on the dyebath itself, salt, soda, dye. But a standard recipe also runs 3–4 more products through the after-treatment stage: a cationic dye-fixative, a soaping/washing-off agent, a neutralising agent (acetic acid), and a softener. Each has its own purchase cost, dosing routine and inventory line.',
      },
      { h: 'What Beta replaces' },
      {
        p: 'Greenaid Beta is applied once, post-dyeing, at 1.0–1.5% owf, in a bath run at 40–60°C for 15–20 minutes. It acts as a colour-fastness enhancer and after-treatment consolidator: every one of those four after-treatment auxiliaries can run at roughly 50% of its conventional dosage, 0.5–1.0% owf fixative instead of 1.0–2.0%, 0.5–1.0 g/L soaping agent instead of 1.0–2.0 g/L, 0.25–0.75 g/L acetic acid instead of 0.5–1.5 g/L, 0.5–1.5% owf softener instead of 1.0–3.0%, without compromising fastness ratings or fabric handle.',
      },
      { h: 'The fastness data' },
      {
        p: 'Bonding residual unfixed dye to the fibre surface is Beta\'s other job, and it shows up directly in ISO 105 testing. Across controlled trials (minimum three replicate dyeings per condition, 100% cotton): wash fastness, shade change improves from grade 3–4 to grade 4–5; wash fastness, cotton staining improves from 3–4 to 4–5; rub fastness dry improves from 3–4 to 4–5; rub fastness wet improves from 2–3 to 3–4; perspiration fastness improves from 3–4 to 4–5. Lightfastness, already strong at 4–5, is maintained rather than traded away. Shade depth (K/S) improves by roughly 20% over baseline in the same trials.',
      },
      { h: 'Why that matters on the shop floor' },
      {
        p: 'A rub-wet fastness jump from grade 2–3 to 3–4 is the difference between a fabric that stains lighter garments in the wash and one that doesn\'t, the kind of defect that triggers a customer rejection, not just a quality note. Combined with the auxiliary dosage cut, Beta is doing double duty: fewer chemicals bought, and fewer batches sent back for rework.',
      },
      {
        p: 'That second effect is measurable too, first-time-right rate rises from an 82–88% baseline to 90–96% with the full Alpha + Beta system, and rework/re-dyeing rate falls from 5–10% to 2–4%.',
      },
    ],
  },
  {
    slug: 'roi-economics',
    title: 'The Real ROI: Why Dyehouses Break Even in 2–4 Months',
    excerpt:
      'A cost category breakdown of what changes, raw material, water, energy, effluent treatment and rework, when a dyehouse switches to Greenaid.',
    tag: 'Economics',
    image: finishingLine,
    readTime: '7 min read',
    date: '2026-03-18',
    body: [
      { h: 'Why "cheaper chemicals" is the wrong frame' },
      {
        p: 'The instinct when evaluating a new auxiliary system is to compare its price per kilogram against what it replaces. That comparison misses most of the actual economics. Greenaid\'s savings show up across six separate cost categories, and the incremental cost of the product itself is only fully understood against all six, not against a single line item.',
      },
      { h: 'Category by category' },
      {
        p: 'Salt and soda ash purchase: with Greenaid, dosage runs at 40–60% of the conventional basis, a direct cut to the two highest-volume raw materials in the recipe.',
      },
      {
        p: 'Wetting, chelating, leveling and anti-foam agents: four separate product purchases collapse into functions integrated inside Alpha, one fewer set of products to procure, store, dose and train staff on.',
      },
      {
        p: 'After-treatment auxiliaries (fixative, soaping agent, acid, softener): roughly 50% of conventional spend, with Beta doing the consolidating.',
      },
      {
        p: 'Water consumption: rinse cycles drop from a 4–6 standard down to 2–3, for a 25–33% water saving per batch, which also reduces the volume an ETP has to process.',
      },
      {
        p: 'Fuel and energy per batch: cycle duration runs roughly 20–25% shorter, which translates proportionally into less boiler and steam time per kilogram dyed.',
      },
      {
        p: 'Effluent treatment cost: 40–60% lower dissolved solids and lower alkalinity both reduce the chemical and energy cost of getting discharge to compliant condition.',
      },
      {
        p: 'Production throughput: a shorter cycle means roughly 25% more batches per shift from the same machines and the same staff, capacity gained without a rupee of capital investment.',
      },
      {
        p: 'Rework and re-dyeing cost: rework rate falls from a 5–10% baseline to 2–4%, which is real cost recovered on every batch that no longer needs a second run.',
      },
      { h: 'Where the 2–4 month figure comes from' },
      {
        p: 'None of these six categories is large enough on its own to justify a process change overnight. Compounded across every batch, from day one of full-scale implementation, they are. Based on field implementation experience across AmeyBioChem\'s installed base, most dyehouses recover the incremental cost of switching to Greenaid Alpha & Beta, relative to the auxiliaries it displaces, within 2 to 4 months.',
      },
      {
        p: 'Use the calculator on this page with your own batch weight and daily batch count to see what that looks like at your own scale, in rupees per batch, per kilogram, per day and per month.',
      },
    ],
  },
  {
    slug: 'effluent-and-etp-load',
    title: 'Why Your Effluent Bill Drops Before Your ETP Does',
    excerpt:
      'Less salt and soda in the dyebath means less load on your effluent treatment plant, conductivity, TDS and pH all come down together. Here is what changes and why.',
    tag: 'Compliance',
    image: forestRiver,
    readTime: '5 min read',
    date: '2026-04-02',
    body: [
      { h: 'What actually loads up an ETP' },
      {
        p: 'Every dyehouse owner already knows the pattern: heavier dyeing months mean heavier ETP bills. Most of that load isn\'t the dye, it\'s the salt and soda ash sitting in the discharge water after the batch is done. Conventional reactive dyeing effluent runs 12,000–25,000 μS/cm conductivity, 8,000–18,000 mg/L total dissolved solids, and pH 10.5–11.5. Every one of those numbers is a direct cost at the ETP, more chemical to neutralise, more energy to treat, more sludge to dispose of.',
      },
      { h: 'What changes with Greenaid' },
      {
        p: 'Because Alpha cuts salt and soda dosage 40–60% at the dyebath stage, the discharge carries less of both downstream. In trial data: conductivity drops to 5,000–12,000 μS/cm (a 40–60% reduction), total dissolved solids drop to 3,500–9,000 mg/L (40–55%), and effluent pH comes down to 9.0–10.0, meaningfully less acid needed to neutralise before you can discharge. Rinse cycles drop from the standard 4–6 down to 2–3, so there is also less total volume for the ETP to process in the first place.',
      },
      { h: 'The compliance angle' },
      {
        p: 'None of this requires a new ETP, a new discharge permit, or a new process. It requires less coming in on the front end of your dyehouse, which shows up as less to treat on the back end. Effluent toxicity moves from a Moderate-to-High baseline to Low-to-Moderate, roughly a 60% reduction, which is the kind of number that matters when a pollution control board audit comes around, and the formulation itself carries zero APEO or NPE content, so there is nothing on the restricted-substance list to explain either.',
      },
      { h: 'What this doesn\'t change' },
      {
        p: 'It doesn\'t replace your ETP, and it isn\'t a certification. It\'s a reduction in what your ETP has to work with, batch after batch, which is usually the cheapest compliance improvement available to a dyehouse, because it doesn\'t need capital spend to get it.',
      },
    ],
  },
  {
    slug: 'application-protocol-walkthrough',
    title: 'One Dyebath, Two Additions: The Complete Application Protocol',
    excerpt:
      'Seven steps, same machine, same operators. A plain walkthrough of exactly when Alpha goes in, when Beta goes in, and what to watch for at each stage.',
    tag: 'Application',
    image: jetDyeingMachine,
    readTime: '5 min read',
    date: '2026-05-10',
    body: [
      { h: 'Nothing about your machine changes' },
      {
        p: 'This is the question every production manager asks first: do we need new equipment, a new machine profile, a new shift pattern? No. Greenaid Alpha & Beta drop into the exhaust reactive dyeing sequence you already run, jet, soft-flow, winch, whatever you have. What changes is what goes into the bath and how much of it.',
      },
      { h: 'The seven steps' },
      { p: '1. Add Greenaid Alpha at 1.0–1.5% owf to the dyebath at pH 6.5–7.5, before dye addition.' },
      { p: '2. Add dye at 40°C and run 10–15 minutes for a uniform strike, Alpha\'s leveling function is already working here.' },
      { p: '3. Add salt at 40–60% of your normal dosage. Not your full normal amount, this is the point of the whole protocol.' },
      { p: '4. Add soda ash, also at 40–60% of normal dosage, to fix the dye.' },
      { p: '5. Drain and hot rinse at 70–80°C for 10–15 minutes.' },
      { p: '6. Run the Beta bath at 40–60°C for 15–20 minutes, at 1.0–1.5% owf, with every after-treatment auxiliary, fixative, soaping agent, acetic acid, softener, dosed at 50% of normal.' },
      { p: '7. Final rinse at 40–50°C for 10 minutes. Fabric is ready for finishing.' },
      { h: 'What operators should watch for on the first few batches' },
      {
        p: 'Shade should build normally through steps 2–4, if it looks under-exhausted at the usual check point, don\'t add extra salt out of habit; give it the remaining time in the cycle first, since Alpha\'s exhaustion curve isn\'t identical to a full-salt bath. At step 6, resist the instinct to add full-dose auxiliaries "just to be safe", that\'s the dosage the trial data is built on, and over-dosing won\'t improve fastness, it just spends more chemical for the same result.',
      },
      {
        p: 'Most dyehouses run their first 2–3 batches side by side with their conventional recipe before switching over completely, which is exactly what a trial batch with our Application Technician is for.',
      },
    ],
  },
  {
    slug: 'genuine-or-rebranded',
    title: "Genuine or Rebranded? How to Check What's Actually in Your Drum",
    excerpt:
      "If a distributor sold you a salt-and-soda reducer under a different name, there's a good chance AmeyBioChem made it. Here's how manufacturer and distributor actually split up in this industry.",
    tag: 'Trust & Sourcing',
    image: jars,
    readTime: '4 min read',
    date: '2026-06-01',
    body: [
      { h: 'A drum rarely tells you who made it' },
      {
        p: 'Textile auxiliaries in India move through a layered supply chain. A manufacturer formulates and produces a chemistry; a distributor buys it, often relabels the drum with their own trade name, and sells it into dyehouses across their territory. This is completely normal in the industry, most dyehouses have never met the actual manufacturer of half the chemicals on their shelf.',
      },
      { h: 'Where AmeyBioChem sits in that chain' },
      {
        p: 'AmeyBioChem formulates and manufactures Greenaid Alpha & Beta. We also work with distributors and channel partners who sell this same system under their own names, into their own customer base. If you\'re running a salt-and-soda-reduction auxiliary right now and you\'re not sure who actually made it, there\'s a real chance it traces back to us, a growing share of the reactive dyeing auxiliary sold in India\'s major textile clusters runs on a small number of manufacturer formulations behind a much larger number of distributor labels.',
      },
      { h: 'Why this is worth checking' },
      {
        p: 'It matters for two practical reasons. First, technical support: if something needs troubleshooting, a shade shift, a fastness issue, a dosage question, the fastest answer usually comes from whoever actually formulated the product, not the reseller. Second, pricing: a distributor\'s margin sits on top of the manufacturer\'s price, and a dyehouse buying direct from the source is a different conversation than buying through two layers of markup.',
      },
      { h: 'How to check' },
      {
        p: 'Ask your current supplier directly who manufactures what you\'re using. If the answer is vague, or if the performance numbers on your product sheet look close to the ones on this page, 40–60% salt and soda reduction, ~50% cut in after-treatment auxiliaries, 2–4 month payback, it\'s worth a direct conversation with us. We\'ll tell you plainly whether it\'s our formulation or not.',
      },
    ],
  },
  {
    slug: 'case-study-bhilwara',
    title: 'Field Trial Spotlight: A Spinning & Weaving Mill in Bhilwara, Rajasthan',
    excerpt:
      'Rajasthan\'s spinning and weaving belt runs hard water and high-volume reactive batches. Here is what a trial batch looked like on the floor of a mid-sized Bhilwara mill.',
    tag: 'Case Study',
    image: yarnDrying,
    readTime: '5 min read',
    date: '2026-07-08',
    body: [
      { h: 'Why Bhilwara is a demanding test case' },
      {
        p: 'Bhilwara is one of India\'s largest spinning and weaving clusters, and its process water tends to run harder than the coastal textile belts, which matters, because water hardness is exactly what Alpha\'s chelation function is built to handle. A mid-sized spinning and weaving mill in the district agreed to run a side-by-side trial batch: their standard reactive recipe on one machine, Greenaid Alpha & Beta on an identical batch alongside it.',
      },
      { h: 'What the trial protocol looked like' },
      {
        p: 'The mill ran its usual electrolyte-heavy recipe as the control, then repeated the batch on comparable fabric and shade depth using the standard 7-step Greenaid protocol, Alpha at the dyebath, Beta post-dyeing, both auxiliary sets dosed down per the published ranges. Process water hardness meant the trial also served as a direct test of Alpha\'s chelation claim (stable up to 500 ppm CaCO₃) under real, not laboratory, water conditions.',
      },
      { h: 'What changed' },
      {
        p: 'Salt and soda ash dosage came down within the standard 40–60% range with no separate chelating or sequestering agent added, Alpha\'s built-in water-hardness handling did that job. Cycle time tracked the ~25% reduction seen across other trial sites, and the mill\'s own quality check found shade consistency across the batch at least as tight as their conventional run, with no additional leveling agent needed.',
      },
      { h: 'What this doesn\'t claim' },
      {
        p: 'This is one trial batch, not a certified audit, and every mill\'s water, machine and dye class will shift the exact numbers. What it does show: the chelation function isn\'t just a lab spec, it holds up against genuinely hard process water, which is the condition a lot of Rajasthan\'s spinning and weaving belt actually runs in.',
      },
    ],
  },
  {
    slug: 'case-study-ichalkaranji',
    title: 'Field Trial Spotlight: A Powerloom Processing Unit in Ichalkaranji',
    excerpt:
      "Ichalkaranji runs on high machine density and tight turnaround. What happens to a processing unit's shift output when the dyeing cycle gets a quarter shorter?",
    tag: 'Case Study',
    image: finishingLine,
    readTime: '4 min read',
    date: '2026-07-22',
    body: [
      { h: 'A cluster built on throughput' },
      {
        p: 'Ichalkaranji\'s textile processing units are dense and fast-moving, machine utilisation and turnaround per shift matter as much as the dyeing itself. A processing unit there ran a Greenaid trial specifically to see what a shorter cycle actually does to a real production day, not just a single batch.',
      },
      { h: 'What the trial measured' },
      {
        p: 'Beyond the standard salt, soda and auxiliary dosage comparison, this trial tracked batches completed per shift across a full working day, conventional recipe on one line, Greenaid on a matched line, same operators rotating between both to control for shift-to-shift variation.',
      },
      { h: 'What changed' },
      {
        p: 'The shorter cycle time, in line with the ~25% reduction seen across trial sites, translated directly into more completed batches on the Greenaid line by the end of the shift, without adding a second shift or new machinery. The unit\'s existing after-treatment sequence needed no changes beyond dosing fixative, soaping agent and softener at the reduced Beta protocol.',
      },
      { h: 'The practical takeaway' },
      {
        p: 'For a cluster where machine-hours are the real constraint on output, the throughput gain mattered more to this unit than the raw chemical saving, both were real, but it was the extra completed batches per shift that changed how they thought about the switch.',
      },
    ],
  },
  {
    slug: 'case-study-vijayawada',
    title: 'Field Trial Spotlight: A Reactive Dyeing Unit in Vijayawada, Andhra Pradesh',
    excerpt:
      "As reactive dyeing capacity grows along the Krishna belt, one Vijayawada unit tested Greenaid against its standard process, and against its effluent treatment cost.",
    tag: 'Case Study',
    image: forestRiver,
    readTime: '4 min read',
    date: '2026-08-05',
    body: [
      { h: 'A newer processing base with the same old cost pressure' },
      {
        p: 'Andhra Pradesh\'s textile processing capacity has grown steadily along the Krishna belt, and Vijayawada-area units carry the same salt, soda and effluent cost pressure as any established cluster. A reactive dyeing unit here ran a Greenaid trial with a specific focus: what does the reduced salt and soda load do to their effluent treatment cost, not just their raw material bill.',
      },
      { h: 'What the trial measured' },
      {
        p: 'Alongside the standard dosage comparison, the unit tracked effluent conductivity and rinse-cycle count before and after, the two numbers that feed most directly into ETP operating cost. This matched the site-agnostic ranges published on this page: conductivity reduction in the 40–60% band, rinse cycles down from a 4–6 baseline to 2–3.',
      },
      { h: 'What changed' },
      {
        p: 'The unit\'s own effluent readings tracked the published range closely, and the reduced rinse-cycle count was the change floor staff noticed fastest, fewer manual rinse-water changeovers per batch, which is as much a labour-time saving as a water saving. Fastness results on their reactive shade range came back at the higher end of the typical +0.5–1.0 grade improvement.',
      },
      { h: 'Why this trial matters beyond one unit' },
      {
        p: 'As newer processing clusters like this one scale up, they\'re building ETP capacity from a more recent baseline, which means a lower-salinity, lower-alkalinity input from day one has a compounding effect on what treatment infrastructure they actually need to build.',
      },
    ],
  },
  {
    slug: 'case-study-solapur',
    title: 'Field Trial Spotlight: Reactive Dyeing at Home, in Solapur',
    excerpt:
      "AmeyBioChem is headquartered in Solapur. Naturally, some of the longest-running Greenaid trial data comes from the mills a few kilometres from our own plant.",
    tag: 'Case Study',
    image: jars,
    readTime: '5 min read',
    date: '2026-08-12',
    body: [
      { h: 'Home ground' },
      {
        p: 'AmeyBioChem, and Amey ChemTech before it, has manufactured out of Solapur, Maharashtra since 1997. It is also home to a dense cluster of towelling, terry and home-textile processing units, several of which have been running Alpha and Beta the longest of any site in our network, simply because they are close enough for our own technical team to visit every week.',
      },
      { h: 'Why proximity matters for a trial' },
      {
        p: 'Most trial batches elsewhere in this series are single side-by-side comparisons. Solapur units have had the advantage of iteration, early batches, feedback, adjustment, repeat, over multiple production cycles rather than one measured run. That makes it the closest thing we have to a long-run reference site rather than a single trial snapshot.',
      },
      { h: 'What the extended data shows' },
      {
        p: 'Across repeated batches, salt and soda ash reduction has held inside the standard 40–60% range batch after batch, not just on a single well-controlled trial run, which is the more meaningful test of whether a result is repeatable rather than a one-off. First-time-right rate has tracked at or above the 90–96% range reported elsewhere on this site, and the towelling units in particular reported no change to their pile handle or absorbency, a fabric-specific quality check that matters more here than in wovens.',
      },
      { h: 'The honest caveat' },
      {
        p: 'Solapur is not a neutral test site, it is where our own technical team lives, which means support response time here is faster than anywhere else we sell into. Take the consistency of these numbers as a best-case reference for what\'s achievable with close technical support, not necessarily what every new site sees in its first month.',
      },
    ],
  },
  {
    slug: 'case-study-amravati',
    title: 'Field Trial Spotlight: A Processing Unit in Amravati, Maharashtra',
    excerpt:
      "Vidarbha's textile processing base is smaller than Mumbai's or Solapur's, but it runs the same reactive dyeing cost pressure. Here's what changed at one Amravati unit.",
    tag: 'Case Study',
    image: heroDyehouse,
    readTime: '4 min read',
    date: '2026-08-19',
    body: [
      { h: 'A smaller cluster with the same numbers to watch' },
      {
        p: 'Amravati sits in Maharashtra\'s Vidarbha region, a smaller reactive dyeing base than the state\'s western textile belt, but one where raw material cost matters just as much to a unit\'s margins. A processing unit here ran a Greenaid trial focused squarely on the raw material bill: what salt, soda ash and auxiliary spend actually looks like on a monthly invoice, not just a single batch.',
      },
      { h: 'What the trial measured' },
      {
        p: 'Rather than a single comparison batch, this unit tracked chemical procurement across a full production month, one month on their conventional recipe, the next on Greenaid Alpha & Beta, same average production volume across both.',
      },
      { h: 'What changed' },
      {
        p: 'Monthly salt and soda ash purchase volume dropped in line with the 40–60% dosage reduction seen across other sites, and the unit\'s after-treatment auxiliary purchases, fixative, soaping agent, softener, came down by roughly half, consistent with the Beta protocol. For a smaller unit where procurement is managed manually rather than through a large purchasing department, the more compressed monthly chemical order was, in the owner\'s own account, as valuable operationally as the rupee saving itself.',
      },
      { h: 'What this tells us about smaller clusters' },
      {
        p: 'The economics don\'t require a large-scale operation to show up, a smaller unit with tighter month-to-month cash flow felt the reduced procurement volume directly, which suggests the case for switching isn\'t just about clusters with the highest total dyeing volume.',
      },
    ],
  },
]

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug)
}
