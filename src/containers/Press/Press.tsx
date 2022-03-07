/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, Grid, Typography, Button } from "@mui/material";
import styles from './Press.module.css'
import mainData from './PressData.json'
import NextLink from 'next/link'

interface PressProps {
    
}

const Press: React.FC<PressProps> = () => {
    return (
        <>
            <Typography
                margin={{xs: "60px 0px ", sm: "60px 0px", md: "200px 0 50px", mdP:"250px 0 87px 0", lg: "250px 0 87px 0", lgP: "250px 0 87px 0", xl: "250px 0 87px 0"}}
                fontSize={{xs: "24px", sm: "24px", md: "36px", mdP: "36px",  lg: "36px", lgP: "36px", xl: "36px"}}
                fontWeight="500"
                textAlign="center"
            >
                News & Press
            </Typography> {/* Title */}

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                gap="15px"
            >
                {mainData.map((item, idx) => (
                    <PressComponent 
                        key={idx}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                        date={item.date}
                    />
                ))}
            </Box>

        <Box 
            margin="111px 0"
            display="flex" 
            justifyContent="center"
            alignItems="center"
        >
            <NextLink href="/press">
                <Button 
                    className={styles.view__btn}
                    sx={{
                        width:{xs: "290px", sm: "350px", smP: "350px", md: "350px", mdP: "300px", lg: "372px", lgP: "372px", xl: "372px"}, 
                        height: {xs: "50px", sm: "50px", md: "60px", mdP: "60px" , lg: "70px", lgP: "70px", xl: "70px"}
                    }} 
                    variant="outlined"
                >
                    View All
                </Button>
            </NextLink>
        </Box>{/* View All */}
        </>
    );
};

export default Press;

type Props = {
    img: string;
    title: string;
    text: string;
    date: string;
}

const PressComponent = (props: Props) => {
    return (
        <>
            <Box
                className={styles.container}
                position="relative"
                width={{xs: "290px", sm: "290px", md:"350px", mdP: "450px", lg: "450px", lgP: "450px", xl: "450px"}}
                height={{xs: "340px", sm: "340px", smP: "340px", mdP: "340px", lg: "300px", lgP: "300px", xl: "300px"}}
                overflow="hidden"
            >
                <img 
                    className={styles.press__img}
                    width="100%" height="100%" 
                    style={{objectFit: "cover"}}
                    src={props.img} 
                    alt={props.title}
                /> 

                <Box className={styles.main} display={{xs:'block',mdPP:'none'}}>
                   <Box className={styles.main__item}>
                    <Typography
                            fontSize="18px"
                            fontWeight="500"
                            color="#fff"
                            textAlign="center"
                            mb="10px"
                        >
                            {props.title}
                        </Typography> {/* Title */}

                        <Typography
                            width={{xs: "245px", sm: "245px", md: "300px", mdP: "350px", lg: "350px", lgP: "350px", xl: "350px"}}
                            fontSize={{xs: "24px", sm: "24px", md: "27px", lg: "27px", lgP: "27px", xl: "27px"}}
                            fontWeight="500"
                            color="#fff"
                            textAlign="center"
                            mb="10px"
                        >
                            {props.text}
                        </Typography> {/* Text */}

                        <Typography
                            fontSize="18px"
                            fontWeight="500"
                            color="#fff"
                            textAlign="center"

                        >
                            {props.date}
                        </Typography> {/* Date */}
                   </Box>
                </Box>
            </Box>
        </>
    )
}
