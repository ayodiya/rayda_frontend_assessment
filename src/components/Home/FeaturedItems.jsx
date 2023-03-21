import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Image from 'mui-image'
import { useGetProductsQuery } from '../../utils/api/apiSlice'

function stringAvatar (name) {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  }
}

export default function FeaturedItems () {
  const {
    data: items,
    isLoading,
    isSuccess,
    isError
  } = useGetProductsQuery()

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

      {isError &&
        <Box
          sx={{
            paddingTop: '300px',
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '20px',
            color: 'primary.main'
          }}
        >
          Server Error, Please try again
        </Box>}

      {isLoading &&
        <Box
          sx={{
            paddingTop: '300px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <CircularProgress />
        </Box>}

      {isSuccess &&
        <Box
          sx={{
            paddingTop: '40px'
          }}
        >
          <Grid container spacing={4}>
            {items?.data?.map(({ bid, name, title, image }, index) => (
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
                      <Image
                        showLoading
                        src={image}
                        alt=''
                        width='100%'
                        height='100%'
                      />
                    </Box>
                    <Stack spacing={2} direction='row'>
                      <Avatar
                        sx={{
                          bgcolor: '#F2F4F7',
                          color: '#475467',
                          fontSize: '14px'
                        }}
                        {...stringAvatar(name)}
                      />
                      <Box
                        sx={{
                          alignSelf: 'center',
                          color: 'primary.main',
                          fontWeight: 400,
                          fontSize: { md: '12px' }
                        }}
                      > {name}
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
                        fontSize: '12px',
                        width: '90%'
                      }}
                    >
                      {title}
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
                        {bid}
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
        </Box>}
    </Box>
  )
}
