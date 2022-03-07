/* eslint-disable @next/next/no-img-element */
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface PaginationBottomProps {
    itemsCount1: any
    itemsCount2: any
    itemsTotal: any
    prevClick: any
    nextClick: any
}

const PaginationBottom: React.FC<PaginationBottomProps> = (props) => {
    return (
        <Box>
            <Box padding="30px 0" justifyContent="space-between" display="flex">
                <Box>
                    <Typography>
                        Showing {props.itemsCount1}-{props.itemsCount2} of {props.itemsTotal}  
                    </Typography>
                </Box>
                <Box>
                    <Box>
                        {props.prevClick} 
                        {props.nextClick} 
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PaginationBottom;