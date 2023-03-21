import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import gradientHeroImage from '../../assets/images/gradientHeroImage.png'
import logo from '../../assets/images/logo.png'
import dotIcon from '../../assets/images/dotIcon.svg'
import acceptIcon from '../../assets/images/acceptIcon.svg'

export default function HeroSection () {
  return (
    <>
      <Box
        sx={{ display: { xs: 'flex', md: 'none' } }}
      >
        <Paper
          sx={{
            padding: '10px',
            borderRadius: '12px'
          }}
          elevation={2}
        >
          <Box
            sx={{
              paddingTop: '30px'
            }}
          >
            <img
              style={{ borderRadius: ' 10px' }}
              alt='' src={gradientHeroImage} width='100%' height='100%'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <img src={logo} alt='' width='30%' height='100%' />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: '#101828',
              fontWeight: 600,
              fontSize: '16px'
            }}
          >
            Starts in: 3 days : 2 hours : 24 minutes
          </Box>
          <Box
            sx={{
              paddingTop: '10px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#FFFAEB',
                borderRadius: '16px',
                width: '30%'
              }}
            >
              <Box
                sx={{
                  paddingRight: '5px'
                }}
              >
                <img src={dotIcon} alt='' width='40%' height='100%' />
              </Box>
              <Box
                sx={{
                  color: '#B54708',
                  fontWeight: 600
                }}
              >Live
              </Box>
            </Box>
            <Box
              sx={{
                paddingLeft: '10px',
                color: '#475467'
              }}
            >
              Layers Auction
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '25px',
              paddingBottom: '25px'
            }}
          >
            <Box
              sx={{
                border: '1px solid #D0D5DD',
                width: '50%',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '5px',
                paddingBottom: '5px'
              }}
            >
              <Box>
                <img src={acceptIcon} alt='' width='90%' height='100%' />
              </Box>
              <Box
                sx={{
                  paddingLeft: '20px',
                  fontWeight: 600,
                  color: '#344054'
                }}
              >
                Accept Invite
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        <Paper
          sx={{
            padding: '24px',
            borderRadius: '12px',
            width: '100%',
            paddingBottom: '130px'
          }}
          elevation={2}
        >
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <img
              style={{ borderRadius: '12px' }}
              src={gradientHeroImage} alt='' width='100%' height='100%'
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                paddingLeft: '20px'
              }}
            >
              <img src={logo} alt='' width='60%' height='100%' />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                left: '25%',
                paddingTop: '20px'
              }}
            >
              <Box
                sx={{
                  fontWeight: 600,
                  color: '#101828',
                  fontSize: '24px'
                }}
              >
                Starts in: 3 days : 2 hours : 24 minutes
              </Box>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#FFFAEB',
                    borderRadius: '16px',
                    width: '30%'
                  }}
                >
                  <Box
                    sx={{
                      paddingRight: '5px'
                    }}
                  >
                    <img src={dotIcon} alt='' width='60%' height='100%' />
                  </Box>
                  <Box
                    sx={{
                      color: '#B54708',
                      fontWeight: 600
                    }}
                  >
                    Not Live
                  </Box>
                </Box>
                <Box
                  sx={{
                    paddingLeft: '10px',
                    color: '#475467'
                  }}
                >
                  Layers Auction
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                left: '86%',
                paddingTop: '20px'
              }}
            >
              <Box
                sx={{
                  border: '1px solid #D0D5DD',
                  width: '150px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '5px',
                  paddingBottom: '5px'
                }}
              >
                <Box
                  sx={{
                    paddingRight: '6px'
                  }}
                >
                  <img src={acceptIcon} alt='' width='100%' height='100%' />
                </Box>
                <Box
                  sx={{
                    // paddingLeft: '20px',
                    fontWeight: 600,
                    color: '#344054',
                    fontSize: '14px',
                    alignSelf: 'center'
                  }}
                >
                  Accept Invite
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  )
}
