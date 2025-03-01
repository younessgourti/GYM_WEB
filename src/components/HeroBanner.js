import React from 'react'
import { Box , Stack, Typography , Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
import { Padding } from '@mui/icons-material'

const HeroBanner = () => {
  return (
    <Box sx={{ mt :{ lg :'212px' , xs:'70px'}, ml:{sm :'50px'}}}
    position="relative" p={"2px"}>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club 
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px' ,xs:'40px'}}}
        mb="23px" mt="30px">
            Sweat,Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Cheak out the most effective Exercises
        </Typography>
        <button variant="contained" color="error" href="#exercises" 
        sx={{backgroundColor:'#ff2625' , Padding:'10px'}}>
            Expore Exercises
        </button>
        <Typography fontWeight={600} color='#FF2625}' 
        fontSize='200px'
        sx={{ opacity:0.1 , display:{lg:'block', xs:'none'}}}>
            Exercises
        </Typography>
        <img  src='HeroBannerImage' alt='Banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner