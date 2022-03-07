/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import { Fade, Typography } from '@mui/material';
import { Box } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import data from './api/oneimg.json'
import four from './api/fourimages.json'
import OneImG from '../../components/Landing/OneImgCard';
import FullWidthTabs from '../../components/Landing/Tabs';
import MobAccordeon from '../../components/Landing/MobAccordeon';
import testData from "./api/accData.json"
import Link from 'next/link';

interface LandingProps {
    
}

  
const Landing: React.FC<LandingProps> = () => {

    const [fade, setFade] = useState(false)

    const transition = () => {
        if(window?.scrollY >= 270){
            setFade(true)
        } else {
            setFade(false)
        }
    }

    useEffect(() => {
        window?.addEventListener("scroll", transition)
        return () => {
            window?.addEventListener("scroll", transition)        
        }
    }, []);

   const myRef:React.MutableRefObject<any> = useRef()

   function smoothScroll() {
    myRef.current.scrollIntoView({ behavior: 'smooth', })
   }

   const myRef1:React.MutableRefObject<any> = useRef()

   function smoothScroll1() {
    myRef1.current.scrollIntoView({ behavior: 'smooth'})
   }


    return (
        <Box >
            <video loop autoPlay muted style={{position:"fixed", zIndex:"-1", top:"0", left:"0", width:"100%", height:"100%", objectFit:"cover"}} >
                <source src="https://extell.nyc3.digitaloceanspaces.com/extell-corp/overview.webm" type='video/webm' />
                <source src="https://extell.nyc3.digitaloceanspaces.com/extell-corp/overview.mp4" type='video/mp4' />
            </video>
            <Fade in={fade == false} timeout={200}>
                <Box sx={{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.15))"}} >
                    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" position="relative"  >
                        <Box display="flex" flexDirection="column" textAlign="center" alignItems="center" marginBottom="200px" >
                            <Box width={{xs:"200px", md:"340px", lg:"384px"}} > 
                                <Link href="/">
                                    <img src="/Landing/bigLogo.svg" width="100%" alt="/LOGO"  />
                                </Link>
                            </Box>
                            <Typography fontSize={{xs:"20px", sm:"25px", md:"36px"}} width={{xs:"70%", md:"100%"}} marginTop={{xs:"22px"}} color="#fff">
                                Developing the Future of New York City
                            </Typography>
                        </Box>
                        <Box onClick={smoothScroll} position="fixed" display="flex" flexDirection="column" alignItems="center" left="50%" bottom="-20px" margin="0 auto" sx={{ transform:"translate(-50%, -50%)"}} >
                            <Typography 
                                fontFamily="Oswald" 
                                fontSize={{xs:"16px", md:"20px", mdPP:"22px"}} 
                                color="#AAA9AC"
                                sx={{"&:hover":{opacity:"0.7", transition:".3s ease", cursor:"pointer"}}}
                            >
                                SCROLL DOWN
                            </Typography>
                            <Box display="flex" alignItems="center" width={{xs:"40px"}} >
                                <KeyboardArrowDownIcon fontSize='large' sx={{fill:"#AAA9AC", "&:hover":{opacity:"0.7", transition:".3s ease", cursor:"pointer"}, width:"100%"}} /> 
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Fade>
            <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                bgcolor="#E5E5E5" 
                textAlign="center" 
                height={{xs:"80vh", sm:"100vh"}}
                sx={{backgroundImage:"url(/Landing/towers.svg)", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}                 
                position="relative"
            >
                <Box maxWidth={{xs:"85%", md:"70%", mdPP:"55%"}} ref={myRef} paddingTop={{xs:"40px", sm:"80px", md:"100px"}} >
                    <Typography 
                        fontFamily="Alegreya Sans" 
                        fontSize={{mdP:"96px", sm:"46px", xs:"36px"}} 
                        color="#fff" 
                        fontWeight="500"
                        margin={{xs:"20px 0", mdP:"60px 0"}}
                    >
                        See us in AD
                    </Typography>
                    <Typography  
                        fontSize={{md:"24px", sm:"18px", xs:"15px"}}
                        lineHeight={{md:"36px"}}
                        color="#fff"
                    >
                        Founded in 2012, United Elite Group is a New York City contractor and 
                        construction manager that has built an  unmatched reputation for 
                        turning our client’s luxury condo, co-op, and townhome renovation visions
                        into reality. Our high level of personalized service, attention to detail, and 
                        veteran staff of highly skilled project managers  and tradesmen drive 
                        incredible results in timeframes that delight.
                    </Typography>
                    <Box onClick={smoothScroll1} position="absolute" display="flex" flexDirection="column" alignItems="center" left="50%" bottom="-20px" margin="0 auto" sx={{transform:"translate(-50%, -50%)"}} >
                        <Typography 
                            fontFamily="Oswald" 
                            fontSize={{xs:"16px", md:"20px", mdPP:"22px"}} 
                            color="#AAA9AC"
                            sx={{"&:hover":{opacity:"0.7", transition:".3s ease", cursor:"pointer"}}}
                        >
                            SCROLL DOWN
                        </Typography>
                        <Box display="flex"  alignItems="center" width={{xs:"40px"}} >
                            <KeyboardArrowDownIcon fontSize='large' sx={{fill:"#AAA9AC", "&:hover":{opacity:"0.7", transition:".3s ease", cursor:"pointer"}, width:"100%"}} /> 
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box bgcolor="#E5E5E5" ref={myRef1} height={{xs:"0", md:"60px"}}></Box>
            <Box bgcolor="#E5E5E5" >
                <Box 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center" 
                    margin="0 auto" 
                    maxWidth={{xs:"90%", mdP:"70%", mdPP:"50%"}}
                >
                    <Box height="" marginTop="1px"></Box>
                    <Typography 
                        fontFamily="Alegreya Sans" 
                        textTransform="uppercase" 
                        fontSize={{xs:"26px", md:"50px", mdPP:"64px"}} 
                        color="#3F3F3F"
                        marginTop={{xs:"50px", md:"100px"}}
                        >
                        company overview
                    </Typography>
                    <Box 
                        display="flex" 
                        width="100%" 
                        flexDirection={{xs:"column", mdP:"row"}} 
                        padding={{xs:"0 20px", mdP:"0"}} 
                        marginBottom={{xs:"34px", mdP:"75px"}} 
                        justifyContent="space-between" 
                    >
                        <Box 
                            display="flex" 
                            flexDirection="column" 
                            justifyContent="center" 
                            alignItems={{xs:"center", mdP:"initial"}}   
                        >
                            {/* <Box display="flex" width="100%"  > */}
                                <Typography 
                                    display="flex" 
                                    fontSize={{xs:"64px", mdP:"144px"}} 
                                    fontWeight="500" 
                                    fontFamily="Oswald" 
                                >
                                    8M
                                    <Typography fontSize={{xs:"64px", mdP:"144px"}} fontWeight="200" className='bot_sad' >
                                        +
                                    </Typography>
                                </Typography>
                            {/* </Box> */}
                            <Box>
                                <Typography fontSize={{xs:"20px", mdP:"36px"}} textAlign={{xs:"center", md:"initial"}} lineHeight={{xs:"22px", mdP:"48px"}} width={{xs:"100%", mdP:"70%"}} >
                                    Satisfied customers
                                </Typography>
                            </Box>
                            
                        </Box>
                        <Box margin="33px 0 8px" borderBottom="2px solid #D7D7D7" display={{xs:"block", mdP:"none"}}></Box>
                        <Box display="flex" flexDirection="column" alignItems={{xs:"center", mdP:"initial"}}  >
                            <Typography display="flex" fontSize={{xs:"64px", mdP:"144px"}} fontWeight="500" fontFamily="Oswald" >
                                2012
                            </Typography>
                            <Typography fontSize={{xs:"20px", mdP:"36px"}} alignSelf="center" lineHeight={{xs:"22px", mdP:"48px"}} >
                                Year founded
                            </Typography>
                        </Box>
                    </Box>
                    <Typography  
                        fontSize={{md:"24px", sm:"18px", xs:"15px"}}
                        lineHeight={{xs:"36px"}}
                        textAlign="center"
                        marginBottom={{xs:"34px", mdP:"75px"}}
                    >
                        Founded in 2012, United Elite Group is a New York City contractor and 
                        construction manager that has built an  unmatched reputation for 
                        turning our client’s luxury condo, co-op, and townhome renovation visions
                        into reality. Our high level of personalized service, attention to detail, and 
                        veteran staff of highly skilled project managers  and tradesmen drive 
                        incredible results in timeframes that delight.
                    </Typography>
                    <Typography  
                            fontSize={{md:"24px", sm:"18px", xs:"15px"}}
                            lineHeight={{xs:"36px"}}
                            textAlign="center"
                            marginBottom={{xs:"34px", md:"75px"}}
                            id="ax"
                        >
                            We simply love what we do, we take pride in 
                            making our clients happy, and we let our 
                            reviews speak for themselves
                    </Typography>
                </Box>
                <Box>
                    {/* Slider */}
                </Box>
                <Box display="flex" flexDirection="column" bgcolor="#E5E5E5" textAlign="center" padding={{md:"50px 80px", xs:"50px 20px"}} sx={{gridGap:"40px"}}  >
                    <Typography fontSize={{xs:"24px", md:"44px", lg:"60px"}} maxWidth={{xs:"100%", mdPP:"40%", lg:"50%"}} margin="0 auto" fontWeight="500" fontFamily="Alegreya Sans">
                        THE THREE PILLARS OF OUR PHILOSOPHY
                    </Typography>
                    <Box display="grid" gap="25px" maxWidth="2000px" margin="0 auto" width="100%" gridTemplateColumns={{xs:"repeat(1, 1fr)", smP:"repeat(2, 1fr)", mdPP:"repeat(3, 1fr)"}} alignItems="center" justifyContent="space-between" >
                        {data.map((item, idx)=>
                            <Box key={idx}>
                                <OneImG 
                                    key={idx}
                                    img={item.img} 
                                    text={item.text}
                                />
                            </Box>
                        )}
                    </Box>
                </Box> 
                <Box display="flex" maxWidth="2000px" margin="0 auto" flexDirection="column" bgcolor="#E5E5E5" textAlign="center" padding={{md:"50px 80px", xs:"50px 20px"}}  sx={{gridGap:"40px"}} >
                    <Typography textTransform="uppercase" fontSize={{xs:"24px", md:"44px", lg:"60px"}} fontWeight="500" fontFamily="Alegreya Sans">
                        THE united elite DIFFERENCE
                    </Typography>
                    <Box display="grid"  gap="25px" width="100%" gridTemplateColumns={{xs:"repeat(1, 1fr)", smP:"repeat(2, 1fr)", mdPP:"repeat(4, 1fr)"}} >
                        {four.map((items, idx)=>
                            <Box key={idx}>
                                <img style={{width:"100%"}} src={items.four} alt="" />
                            </Box>
                        )}
                    </Box>
                    <Typography  
                        fontSize={{md:"24px", sm:"18px", xs:"15px"}}
                        lineHeight={{xs:"36px"}}
                        textAlign="start"
                    >
                        The philosophy of perfection  elevates and distinguishes ever United Elite development.This passionoriginates 
                        from founder Barnetts international work in the diamond industry.We are guided by a focus on delivering 
                        timeless craftmanship, and every aspect of every project is considered.
                    </Typography>
                    <Typography  
                        fontSize={{md:"24px", sm:"18px", xs:"15px"}}
                        lineHeight={{xs:"36px"}}
                        textAlign="start"
                        marginBottom={{xs:"0", md:"65px"}}
                    >
                        The philosophy of perfection  elevates and distinguishes ever United Elite development.This passionoriginates 
                        from founder Barnetts international work in the diamond industry.We are guided by a focus on delivering 
                        timeless craftmanship, and every aspect of every project is considered.
                    </Typography>
                </Box>
            </Box>
            <Box bgcolor="#E5E5E5" paddingBottom="150px" padding={{md:"20px 80px", xs:"20px 20px"}} >
                {testData.map((item, idx)=>
                    <Box key={idx} >        
                        <FullWidthTabs 
                            legal={item.legal} 
                            finance={item.finance} 
                            dev={item.dev} 
                            acquisitions={item.acquisitions} 
                            marketing={item.marketing} 
                            design={item.design} 
                            sales={item.sales}
                            />
                        <MobAccordeon 
                            legal={item.legal} 
                            finance={item.finance} 
                            dev={item.dev} 
                            acquisitions={item.acquisitions} 
                            marketing={item.marketing} 
                            design={item.design} 
                            sales={item.sales}
                        />
                    </Box>
                
                )}
            </Box>
        </Box>
    );
};

export default Landing;
