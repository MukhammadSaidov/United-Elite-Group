/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography'

interface OneImGProps {
    img: string
    text: string
    key: any
}

const OneImG: React.FC<OneImGProps> = (props) => {
    return (
        <Box >
            <Box display="flex" alignItems="center"  key={props.key} flexDirection="column" sx={{gridGap:"25px"}} >
                <img style={{width:"100%"}} src={props.img} alt="IMG" />
                <Typography 
                    fontSize={{xs:"12px", md:"18px"}}
                    textAlign={{xs:"center", md:"start"}}
                    >
                    {props.text}
                </Typography>
            </Box>
        </Box>
    );
};

export default OneImG;