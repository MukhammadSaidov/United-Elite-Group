import { Box } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import FooterMobil from './FooterMobil';
import Header from './Header';
import HeaderMobil from './HeaderMobil';

interface LayoutProps {
    
}

const Layout: React.FC<LayoutProps> = (props : any) => {


    return (
        <>
            <Box display={{xs:'none',md:'block'}}>
                <Header/>
                    <Box marginTop={{md:'133px',mdP:'137px',mdPP:'159px',lg:'164px'}} >
                        {props.children}
                    </Box>
                <Footer/>
            </Box>

            <Box display={{xs:'block',md:'none'}}>
                <HeaderMobil/>
                    {props.children}
                <FooterMobil/>
            </Box>
        </>
    );
};

export default Layout;
