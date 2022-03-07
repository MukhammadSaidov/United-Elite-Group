import { Box, Button, SwipeableDrawer, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

interface HeaderMobilProps {
    
}

const HeaderMobil: React.FC<HeaderMobilProps> = () => {
   

    return (
        <Box  bgcolor='#002433' display={{xs:"flex", mdP:"none"}} justifyContent="space-between" padding={{xs:'10px 0px 10px 15px',sm:'15px 5px 15px 25px',smP:'20px 7px 20px 30px'}} >
            <Box width={{xs:'50%', sm:'40%', smP:'30%', md:'25%'}}>
                <Link passHref={true} href="/"  >
                    <Image width='130px' height='30px' src='/Layout/SideLogo.svg' alt="" />
                </Link>
            </Box>
            <SwipeableTemporaryDrawer/>
        </Box>
    );
};

export default HeaderMobil;


type Anchor = 'top' | 'left' | 'bottom' | 'right';

function SwipeableTemporaryDrawer() {
    const router = useRouter();
    const uRouter = router.pathname.slice(1, 4);
    
    const [state, setState] = React.useState({
        top: false,
      });
    
      const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };
    
      const list = (anchor: Anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box bgcolor='#002433' justifyContent="space-between" display="flex" alignItems="center" padding={{xs:'10px 20px 10px 10px',sm:'15px 25px 15px 35px',smP:'20px 25px 20px 40px'}} >
                <Box width={{xs:'50%', sm:'40%', smP:'30%', md:'25%'}}>
                    <Link passHref={true} href="/me/dashboard"  >
                        <Image width='130px' height='30px' src='/Layout/SideLogo.svg' alt="" />
                    </Link>
                </Box>
                <Image width='20px' height='20px' src='/Layout/Closs.svg' onClick={toggleDrawer(anchor, false)} alt="" />
            </Box>      
            <Box display="flex" flexDirection="column" height="100%" sx={{ bgcolor:'#002A3C'}} >
                {fake.map((item , idx)=>(
                    <Link key={idx} href={item.link} passHref={true} >
                        <Typography sx={{padding:{xs:'10px 10px',sm:'13px 35px',smP:'15px 40px'}}} bgcolor={item.keyrouter == uRouter ? '#013B53' : '#002A3C' } variant="h6" fontWeight="500" color="#FFFFFF" fontSize={{xs:'16px', sm:'17px', smP:'18px'}} >{item.name}</Typography>
                    </Link>

                ))}
            </Box>
        </Box>
      );
    
      return (
        <div>
          {(['top'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button style={{height:"20px", width:"20px"}} onClick={toggleDrawer(anchor, true)}>
                <Image width='20px' height='20px' src='/Layout/menu.svg' alt="" />
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      );
}

const fake = [ 
    {name:'Home',       link:'/',           keyrouter:''},
    {name:'Availbability', link:'/availbability', keyrouter:'avi'},
    {name:'Portfolio' , link:'/portfolio',  keyrouter:'por'},
    {name:'Career',     link:'/career',     keyrouter:'car'},
    {name:'Press',      link:'/press',      keyrouter:'pre'},
    {name:'Contacts',   link:'/contacts',   keyrouter:'con'},
]