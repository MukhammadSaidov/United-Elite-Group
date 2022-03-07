/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Box } from '@mui/system';
import React from 'react';
import PortFolioFilter from './PortFolioFilter';
import styles from '../Press/Press.module.css'
import Typography from '@mui/material/Typography'

interface PortfolioGlobalProps {
    
}

const PortfolioGlobal: React.FC<PortfolioGlobalProps> = () => {

    return (
        <Box>
            {/* Top Filter */}
            <PortFolioFilter/>

            <Box position='relative' margin={{xs:'0px',md:'30px 0px'}} width='100%' display='flex' alignItems={{xs:'center',md:'unset'}} justifyContent={{xs:'unset' , md:'space-between'}} flexDirection={{xs:'column',md:'unset'}}  padding={{xs:'0px 2.5%',mdP:'0px 5%' ,mdPP:'0px 10%'}}  >
                        {/* Content Item */}
                <Box  className={styles.ContainerItem} >
                    {fake.map((item:string , idx:number)=>(
                        <Box key={idx} width={{xs:'90vw', md:'45%',lgP:'30%'}} className={styles.Card} >
                            <Box className={styles.CardImg}>
                                <img className={styles.Scrollimg} src='/Aviability/Rectangle1.png' />
                            </Box>
                            <Typography variant="h6" color="#5C5C5C" fontSize={{xs:'18px',sm:'19px',smP:'24px',md:'13.2px',mdP:'14px',mdPP:'15px',lg:'18px',lgP:'16px',lgPP:'17px',xl:'20px'}}>{item}</Typography>
                        </Box>

                    ))}

                </Box>

                <Box className={styles.BoxMap} >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3022.0367834197605!2d-73.9748099!3d40.7612157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ab1943881ed%3A0xaad1ffde8d00c5b5!2sUnited%20Elite%20Group%20-%20General%20Contractor!5e0!3m2!1sru!2s!4v1646042567113!5m2!1sru!2s" width="100%" height="100%" loading="lazy"></iframe>
                </Box>
            </Box>
            
        </Box>
    );
};

export default PortfolioGlobal;

const fake =[
    '1010 Park Avenue',
    '175 West Jackson Street',
    'Hyatt Times Square',
    'The Kent',
    'One Manhattan Square',
    'The Aldyn',
    '1010 Park Avenue',
    'Four Seasons Resort and Club Dallas at Las Colinas',
    'The Park Hyatt New York',
    'test test test',
    'test test test',
    '1010 Park Avenue',
    '175 West Jackson Street',
    'Hyatt Times Square',
    'The Kent',
]