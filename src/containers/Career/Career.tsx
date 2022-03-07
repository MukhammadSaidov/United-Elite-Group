/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Box, IconButton, InputAdornment, styled, TextField, Typography } from '@mui/material';
import CareerCard from '../../components/Career/CareerCard';
import PaginationTop from '../../components/Career/PaginationTop';
import PaginationBottom from '../../components/Career/PaginationBottom';
import data from "./fake-data.json"

interface CareerProps {
    
}

const CareerTextField = styled(TextField)({
    '& label':{
        color: '#003F79',  
    },
    '&:hover label':{
        color: '#003F79',  
    },
    '& label.Mui-focused': {
      color: '#C4C4C4',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#9B9B9B',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#C4C4C4',
      },
      '&:hover fieldset': {
        borderColor: '#D3D3D3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#9B9B9B',
      },
    },
});


const Career: React.FC<CareerProps> = () => {

    const [len, setLen] = useState(false)

    const [time , setTime ] = useState(1)
    const [count , setCount] = useState(1)

    const lengthBox = [Math.ceil(data.length / 11)]

    const [search, setSearch] = useState("");

    const handleSearchChange = (event: any) => {
        setSearch(event.target.value);
    };

    const emptyClick = () => {
        ""
    }

    const leftClick = () => {
        setTime(0)
        setTimeout(()=>setTime(1),200)
        count!=1?setCount(count-1):setCount(count)
    }
    
    const rightClick = () => {
        setTime(0)
        setTimeout(()=>setTime(1),200)
        count != lengthBox[0] ?  setCount(count+1) : setCount(count)
    }

    return (
        <Box bgcolor="#E5E5E5" padding="0 0 200px 0" >
            <Box 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="center"
                maxWidth="800px"
                padding="0 40px"
                margin="0 auto"
                
            >
                <Typography
                    color="#000000"
                    fontSize={{xs:"24px", md:"36px"}}
                    fontFamily="Alegreya Sans"
                    margin={{xs:"42px 0", md:"115px 0 60px"}}
                >
                    CAREERS
                </Typography>
                
                <CareerTextField 
                    label="Search" 
                    fullWidth
                    onChange={handleSearchChange}
                    InputProps={{
                        endAdornment: <InputAdornment position='end' > <img src="/Career/search.svg" alt="" /></InputAdornment>
                    }}
                />
            </Box>
            <Box marginTop={{xs:"40px", mdP:"112px"}} display="flex" flexDirection="column" maxWidth={{xs:"90%", mdP:"60%"}} margin="0 auto" sx={{gridGap:"20px"}} >
                <PaginationTop 
                    itemsCount1={count} 
                    itemsCount2={''} 
                    itemsTotal={data.length} 
                    prevClick={
                        <IconButton onClick={count==1?emptyClick:leftClick}>
                            <img src="/Career/left.svg" alt=""/>
                        </IconButton>
                    } 
                    nextClick={
                        <IconButton onClick={count==lengthBox[0]? emptyClick: rightClick} >
                            <img src="/Career/right.svg" alt="" />
                        </IconButton>
                    }
                />
                {data.filter((item: any) => {
                    if (search == "") {
                        return item;
                    } else if (item.text.toLowerCase().includes(search.toLowerCase())) {
                        return item;
                    }
                 }).slice((count - 1) * 11  , count * 11 ).map((item, idx)=>
                    <Box key={idx} onClick={()=> setLen(true)} >
                        <CareerCard
                            text={item.text}
                            type={item.type}
                            about={len == false ? item.about.slice(0, 150) + "..." : item.about} 
                            link={''}                        
                        />
                    </Box>
                )}
                <PaginationBottom 
                    itemsCount1={count} 
                    itemsCount2={''} 
                    itemsTotal={data.length} 
                    prevClick={
                        <IconButton onClick={count==1?emptyClick:leftClick}>
                            <img src="/Career/left.svg" alt=""/>
                        </IconButton>
                    } 
                    nextClick={
                        <IconButton onClick={count==lengthBox[0]? emptyClick: rightClick} >
                            <img src="/Career/right.svg" alt="" />
                        </IconButton>
                    }
                />
            </Box>
            
        </Box>
    );
};


export default Career;