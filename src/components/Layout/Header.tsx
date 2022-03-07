import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
    const router = useRouter();
    const uRouter = router.pathname.slice(1, 4);



    return (
        <Box zIndex='99' margin='0px auto' height={{md:'133px',mdP:'137px',mdPP:'159px',lg:'164px'}} position='fixed' top='0px' width='100%' paddingTop={{md:'15px',mdP:'16px',mdPP:'18px',lg:'20px'}} bgcolor='#002433' display='flex' alignItems='center' justifyContent='space-between' flexDirection='column'>

            <Link passHref={true} href='/'>
                <Box sx={{cursor:'pointer' , marginTop:{md:'4px',mdP:'6px',mdPP:'8px',lg:'10px'}}}>
                    <Image width='150px' height='35px' src='/Layout/SideLogo.svg' alt=""/>
                </Box>
            </Link>

            <Box display='flex'  marginTop={{md:'15px',mdP:'16px',mdPP:'18px',lg:'20px'}} borderTop='0.5px solid #ffffff' width='100%' justifyContent='center'  >
                {fake.map((item, idx) =>(
                    <Link passHref key={idx} href={item.link}>
                        <Button  id={item.name}>
                            <Typography variant="h6" padding={{md:'12px 15px',mdP:'10px 22px',mdPP:'15px 24px',lg:'15px 24px'}} fontFamily="Oswald" color='#fff' bgcolor={uRouter == item.keyrouter  ? "#013B53" : 'none'} fontSize={{md:'13px',mdP:'15px',mdPP:'17px',lg:'18px'}} lineHeight='26,68px'  >{item.name}</Typography>
                        </Button> 
                    </Link>
                ))}

            </Box>
            
        </Box>
    );
};

export default Header;

const fake = [ 
    {name:'Home',       link:'/',           keyrouter:''},
    {name:'Availbability', link:'/availbability', keyrouter:'avi'},
    {name:'Portfolio' , link:'/portfolio',  keyrouter:'por'},
    {name:'Career',     link:'/career',     keyrouter:'car'},
    {name:'Press',      link:'/press',      keyrouter:'pre'},
    {name:'Contacts',   link:'/contacts',   keyrouter:'con'},
]