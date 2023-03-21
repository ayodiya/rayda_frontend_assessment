import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Badge from '@mui/material/Badge'
import Divider from '@mui/material/Divider'

import notificationIcon from '../assets/images/notificationIcon.svg'

export default function Navbar () {
  return (
    <Container
      maxWidth='lg'
    >
      <Box
        sx={{
          display: { md: 'flex' },
          justifyContent: { md: 'space-between' },
          paddingTop: { md: '20px' },
          paddingBottom: { md: '20px' }
        }}
      >
        <Box>
          <Box
            sx={{
              paddingTop: { xs: '50px', md: '0px' },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              fontWeight: 600,
              color: '#101828',
              fontSize: '30px'
            }}
          >
            Welcome
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: '#475467',
              fontWeight: 400,
              fontSize: '16px'
            }}
          >
            Your current sales auction and activity.
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignSelf: { md: 'center' }
          }}
        >
          <Badge
            sx={{
              width: { xs: '20%', md: '100%' },
              '& .MuiBadge-badge': {
                backgroundColor: 'red',
                bottom: { xs: '29%', md: '40%' },
                right: { xs: '29%' }
              }
            }}
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={4}
            color='primary'
          >
            <img alt='' src={notificationIcon} width='100%' height='100%' />
          </Badge>
        </Box>
      </Box>
      <Divider />
    </Container>
  )
}
