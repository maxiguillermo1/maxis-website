import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import AtmosphericBackground from '../components/atmospheric-background'
import FloatingNav from '../components/floating-nav'
import FloatingNodeHero from '../components/floating-node-hero'
import SectionShell from '../components/section-shell'
import WorkList from '../components/work-list'
import InfoSection from '../components/info-section'
import ContactLinks from '../components/contact-links'

const Home = () => {
  return (
    <>
      <Head>
        <title>Maxi Guillermo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Maxi Guillermo builds quiet systems for thought, software, and intelligent workflows."
        />
      </Head>

      <AtmosphericBackground />
      <FloatingNav />

      <Box position="relative" zIndex={1} w="100%">
        <FloatingNodeHero />

        <SectionShell id="work" label="Work">
          <WorkList />
        </SectionShell>

        <SectionShell id="info" label="Info">
          <InfoSection />
        </SectionShell>

        <SectionShell id="contact" label="Contact">
          <ContactLinks />
        </SectionShell>
      </Box>
    </>
  )
}

export default Home

export { getServerSideProps } from '../components/chakra'
