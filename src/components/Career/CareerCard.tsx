/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

interface CareerCardProps {
    text: string
    type: string
    about: string
    link: string
}

const CareerCard: React.FC<CareerCardProps> = (props) => {
    return (
        <Box 
            borderBottom="1px solid #C4C4C4" 
            display="flex"
            sx={{gridGap:{md:"10px", xs:"7px"}}}
            padding="20px 0"
        >
            <Box 
                display="flex" 
                flexDirection="column"
                sx={{gridGap:{md:"10px", xs:"7px"}}}
            >
                <Typography
                    fontSize={{xs:"18px", md:"30px"}}
                    fontFamily="Alegreya Sans"
                    color="#000"
                    fontWeight="500"
                >
                    {props.text}
                </Typography>
                <Typography
                    fontSize={{xs:"16px", md:"20px"}}
                    fontFamily="Oswald"
                    color="#000"
                    textTransform="uppercase"
                    fontWeight="300"
                >
                    {props.type}
                </Typography>
                <Box display="flex" sx={{gridGap:"25px"}} alignItems="flex-start" >
                    <Typography
                        fontSize={{xs:"13px", md:"20px"}}
                    >
                        {props.about}
                    </Typography>
                    <Link href={props.link} passHref >
                        <Box display={{xs:"none", md:"flex"}} sx={{cursor:"pointer"}} justifyContent="center" >
                            <img src="/Career/right.svg" alt="" />
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default CareerCard;