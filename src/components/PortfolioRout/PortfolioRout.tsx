/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import Link from 'next/link';

type Props = {
    navbar: boolean;
    carousel: boolean;
    title: string;
    city: string;
    img: string;
    text: string;
}


const PortfolioRout = (props: Props) => {
    return (
        <Box 
            marginTop={{xs: "20px", md: "40px", mdP: "40px", lg: "79px", lgP: "79px", xl: "79px"}}
            width="100%"
            maxWidth='1300px'
            margin="0 auto"
        >
            {props.navbar == true ? <NavInfo /> : ""}
            
            <Box 
                marginTop={{xs: "20px", md: "40px", mdP: "40px", lg: "100px", lgP: "130px", xl: "130px"}}
                justifyContent={{xs: "center", md:"center", mdP: "center", lg:"flex-start", lgP: "flex-start", xl: "flex-start"}}
                alignItems={{xs: "center", md:"center", mdP: "center", lg:"flex-start", lgP: "flex-start", xl: "flex-start"}}
                display="flex"
                flexDirection={{xs: "column", sm: "column", md: "column", mdP: "column", lg: "row", lgP: "row", xl: "row"}} 
                marginBottom="50px"
            >
                <Box mb={{xs: "10px", sm: "73px"}}>
                    <Typography
                        fontSize={{xs: "24px", sm: "24px", smP: "24px", md: "30px", mdP: "30px", lg: "48px", xl: "48px"}}
                        fontWeight="500"
                        color="#000"
                        textAlign={{xs: "center", sm: "center", md: "center", mdP: "center", lg: "left", lgP: "left", xl: "left"}}
                    >
                        {props.title}
                    </Typography>

                    <Typography 
                        mt="20px"
                        fontWeight="bold"
                        fontSize={{xs: "16px", sm: "16px", smP: "16px", md: "25px", mdP: "25px", lg: "30px", xl: "30px"}}
                        textAlign={{xs: "center", sm: "center", md: "center", lg: "left", lgP: "left", xl: "left"}}
                        color="#000"
                    >
                        {props.city}
                    </Typography>

                    <Box
                        display="flex"
                        justifyContent={{xs: "center", sm: "center", smP: "center", md: "flex-start", mdP: "flex-start", lg:"flex-start", lgP: "flex-start", xl: "flex-start"}}
                        alignItems={{xs: "center", sm: "center", smP: "center"}}
                    >
                        <Typography 
                            mt="30px"
                            fontSize="22px"
                            fontFamily="Montserrat"
                            fontWeight="400"
                            width={{xs: "288px", sm: "288px", smp: "288px", md:"500px", mdP: "650px", lg:"650px", lgP: "650px", xl: "650px"}}
                            textAlign={{xs: "center", sm: "center", md: "center", mdP: "center", lg: "left", lgP: "left", xl: "left"}} 
                            color="#5C5C5C"
                        >
                            {props.text}
                        </Typography>
                    </Box>
                </Box> {/* Text Box */}

                {props.carousel == true ? 
                    <Box
                        display="flex"
                        justifyContent={{xs: "center", sm: "center", smP: "center"}}
                        alignItems={{xs: "center", sm: "center", smP: "center", mdP: "flex-start"}}
                        ml={{ xs: "0px", sm: "0px", md: "0px", mdP: "0px", lg:"180px", lgP: "180px", xl: "180px"}}
                        mb={{mdP: "60px"}}
                    >
                        <Box
                            width={{xs: "300px", sm: "350px", md: "450px", mdP: "500px",  lg:"450px", lgP: "450px", xl: "450px"}}
                            height={{xs: "auto",  lg: "600px", lgP: "600px", xl: "600px"}}
                        >
                            <Carousel
                                swipeable={true}
                                emulateTouch={true}
                                autoPlay={true}
                                showArrows={true}
                                showStatus={false}
                                showIndicators={true}
                                showThumbs={false}
                                transitionTime={400}
                                infiniteLoop={true}
                                interval={5000}
                            >
                                <img 
                                    width="100%" height="100%" 
                                    style={{objectFit: "cover"}}
                                    src="/Carousel/brooklyn.svg"
                                    // src={props.img} 
                                    alt={props.title}
                                /> 
                                <img 
                                    width="100%" height="100%" 
                                    src="/Carousel/new-york.svg"
                                    style={{objectFit: "cover"}}
                                    // src={props.img} 
                                    alt={props.title}
                                /> 
                                <img 
                                    width="100%" height="100%" 
                                    src="/Carousel/manhattan.svg"
                                    style={{objectFit: "cover"}}
                                    // src={props.img} 
                                    alt={props.title}
                                />
                            </Carousel> {/* Carousel */}
                        </Box> 
                    </Box>  : 
                    <Box 
                        width={{xs: "300px", sm: "300px", md: "450px", mdP: "500px",  lg:"450px", lgP: "450px", xl: "450px"}}
                        height={{xs: "400px", sm: "400px", smP: "500px", md: "500px", mdP: "600px", lg: "600px", lgP: "600px", xl: "600px"}}
                        ml={{ xs: "0px", sm: "0px", md: "0px", mdP: "0px", lg:"180px", lgP: "180px", xl: "180px"}}
                    >
                        <img width="100%" height="100%" style={{objectFit:"cover"}}  src={props.img} alt={props.title} />
                    </Box>
                } {/*  */}
            </Box> 
        </Box> /*  */
    );
};

export default PortfolioRout;

/* Nav Info */
const NavInfo = () => {

    return (
        <>
            <Box
                display={{xs: "none", sm: "none", smP: "none", md: "none", mdP: "flex", lg:"flex", xl: "flex"}}
                alignItems="center"
                justifyContent="space-between"
                padding="10px 15px"
                sx={{borderBottom: "1px solid #C4C4C4 "}}
            >
                <Link passHref={true} href="/portfolio">
                    <Button>
                        <Typography variant="h6" >Back to Portfolio</Typography>
                    </Button> 
                </Link>

                <Box display="flex" alignItems="center" width="400px" justifyContent="space-between">
                    <Button>
                        <Typography variant="h6" >Previous</Typography>
                    </Button> 
                    <Button>
                        <Typography variant="h6" >Next</Typography>
                    </Button> 
                </Box> {/*  */}
                <Link passHref={true} href="/portfolio">
                    <Button>
                        <Typography variant="h6" >View All</Typography>
                    </Button>
                </Link> 
            </Box> {/* Desktop Version */}
            
            <Box
                display={{xs: "block", sm: "block", smP: "block", md: "block", mdP: "none", lg:"none", xl: "none"}}
            >
                <Box display="flex" alignItems="center" justifyContent="center" sx={{borderBottom: "1px solid #C4C4C4 "}} >
                    <Link passHref={true} href="/portfolio">
                        <Button>
                            <Typography variant="h6" color="#000" fontSize="16px" fontWeight="normal" >Back to Portfolio</Typography>
                        </Button> 
                    </Link>
                </Box> {/*  */}

                <Box padding="10px" display="flex" alignItems="center" justifyContent="space-between" sx={{borderBottom: "1px solid #C4C4C4 "}}>
                    <Button>
                        <Typography variant="h6" fontSize="14px" fontWeight="600" color="#272727" >Previous</Typography>
                    </Button> 
                    <Button>
                        <Typography variant="h6" fontSize="14px" fontWeight="600" color="#272727" >Next</Typography>
                    </Button> 
                </Box> {/* Prev Next */}

                <Box mt="22px" display="flex" alignItems="center" justifyContent="center">
                    <Link passHref={true} href="/portfolio">
                        <Button>
                            <Typography variant="h6" color="#000" fontSize="18px" fontWeight="600" textTransform="uppercase" >View All</Typography>
                        </Button> 
                    </Link>
                </Box> {/* View All */}

            </Box> {/* Mobile Version */}
        </>
    )
}