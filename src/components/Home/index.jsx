import Container from '@mui/material/Container'
import HeroSection from './HeroSection'

export default function Home () {
  return (
    <Container
      sx={{
        paddingTop: '50px'
      }}
      maxWidth='lg'
    >
      <HeroSection />
    </Container>
  )
}
