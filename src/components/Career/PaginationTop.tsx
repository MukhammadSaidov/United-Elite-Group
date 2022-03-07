/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Drawer from './Modal';


interface PaginationTopProps {
    itemsCount1: any
    itemsCount2: any
    itemsTotal: any
    prevClick: any
    nextClick: any
}

const PaginationTop: React.FC<PaginationTopProps> = (props) => {
    return (
        <Box sx={{gridGap:"25px"}} display="flex" flexDirection="column" >
            <Box borderBottom="1px solid #C4C4C4" padding="10px 0" justifyContent="space-between" display={{xs:"flex", md:"none" }} >
                <Typography fontSize="18px" color="#000">Filter by</Typography>
                <Drawer/>
            </Box>
            <Box justifyContent="space-between" display="flex" borderBottom="1px solid #C4C4C4">
                <Box>
                    <Typography>
                        Showing {props.itemsCount1}-{props.itemsCount2} of {props.itemsTotal}  
                    </Typography>
                </Box>
                <Box width={{xs:"initial",md:"30%"}} display="flex" justifyContent="space-between" >
                    <Box display={{xs:"none", md:"block"}} >
                        <Drawer/>
                    </Box>
                    <Box>
                        {props.prevClick}
                        {props.nextClick}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PaginationTop;