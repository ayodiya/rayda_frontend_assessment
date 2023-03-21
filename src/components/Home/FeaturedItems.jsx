import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import laptopImage from '../../assets/images/laptopImage.png'

export default function FeaturedItems () {
  return (
    <Box
      sx={{
        paddingTop: { xs: '40px' },
        paddingBottom: { xs: '70px' }
      }}
    >
      <Box
        sx={{
          display: { md: 'flex' },
          justifyContent: { md: 'space-between' },
          paddingTop: { md: '50px' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 600,
            color: 'primary.main',
            fontSize: '16px',
            alignSelf: { md: 'center' }
          }}
        >
          Featured Items
        </Box>
        <Box
          sx={{
            paddingTop: { xs: '30px', md: '0px' },
            display: 'flex',
            justifyContent: 'center'
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
                fontWeight: 600,
                color: 'primary.tet',
                fontSize: '14px',
                alignSelf: 'center'
              }}
            >
              View Auction
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          paddingTop: '40px'
        }}
      >
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <Grid key={index} item xs={12} md={3}>
              <Paper
                sx={{
                  border: '1px solid #D0D5DD',
                  padding: '12px',
                  borderRadius: '12px'
                }}
              >
                <Stack spacing={2}>
                  <Box>
                    <img src={laptopImage} alt='' width='100%' height='100%' />
                  </Box>
                  <Stack spacing={2} direction='row'>
                    <Avatar sx={{
                      bgcolor: '#F2F4F7',
                      color: '#475467',
                      fontSize: '14px'
                    }}
                    >OP
                    </Avatar>
                    <Box
                      sx={{
                        alignSelf: 'center',
                        color: 'primary.main',
                        fontWeight: 400,
                        fontSize: { md: '12px' }
                      }}
                    > Koray Okumus
                      <span
                        style={{ color: '#98A2B3' }}
                      >(Highest Bidder)
                      </span>
                    </Box>
                  </Stack>
                  <Box
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      fontSize: '14px',
                      width: '70%'
                    }}
                  >
                    Phone 8 - 256GB, 4G LTE, Green (Refurbished)
                  </Box>
                  <Stack direction='row' spacing={1}>
                    <Box
                      sx={{
                        color: 'primary.tet'
                      }}
                    >
                      Current Bid:
                    </Box>
                    <Box
                      sx={{
                        fontWeight: 700,
                        color: 'primary.tet'
                      }}
                    >
                      ₦37,000
                    </Box>
                  </Stack>
                  <Box>
                    <Button
                      disableElevation
                      sx={{
                        backgroundColor: 'primary.sec',
                        textTransform: 'none',
                        width: '100%',
                        borderRadius: '8px',
                        '&:hover': {
                          backgroundColor: 'primary.sec'
                        }
                      }}
                      variant='contained'
                    >
                      Add to wishlist
                    </Button>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
