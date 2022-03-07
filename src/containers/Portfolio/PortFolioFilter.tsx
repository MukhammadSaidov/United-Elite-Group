import React from 'react';
import { Box, Button, Drawer, SwipeableDrawer, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../Press/Press.module.css'

interface PortFolioFilterProps {
    
}

const PortFolioFilter: React.FC<PortFolioFilterProps> = () => {

    const [stateButton, setStateButton] = React.useState('1')
    const [stateAll, setStateAll] = React.useState(0)
    
    
    
    
    return (
        <>
            {/* All PC */}
            <Box bgcolor='#002A3B' zIndex='10' className={stateAll == 1 ? styles.AllOn : styles.AllOff} position='absolute' width='100%' padding={{xs:'0px 2.5%',mdP:'0px 5%' ,mdPP:'0px 10%'}} >
                <Box display='flex' alignItems='center' justifyContent='end'  margin='25px 0px' width='100%' >
                    <CloseIcon  onClick={()=> setStateAll(0)} sx={{cursor:'pointer' ,width:{xs:'22px' , sm:'24px' , smP:'26px',md:'22px',mdP:'22px' ,mdPP:'24px',lg:'24px',lgP:'26px',lgPP:'28px',xl:'30px'} , height:{xs:'22px' , sm:'24px' , smP:'26px',md:'22px',mdP:'22px' ,mdPP:'24px',lg:'24px',lgP:'26px',lgPP:'28px',xl:'30px'} , color:'#fff'}} />
                    <Typography onClick={()=> setStateAll(0)} sx={{cursor:'pointer'}} variant="h6" color="#fff" fontWeight='400' fontSize={{xs:'18px' , sm:'20px' , smP:'22px',md:'14px',mdP:'16px' ,mdPP:'17px',lg:'18px',lgP:'19px',lgPP:'21px',xl:'22px'}} fontFamily='Oswald' lineHeight='26,68px' >Close</Typography>
                </Box>

                <Typography marginBottom='5px' variant="h6" color="#fff" fontWeight='500' fontSize={{xs:'16px',md:'14px',mdP:'16px' ,mdPP:'17px',lg:'18px',lgP:'19px',lgPP:'21px',xl:'22px'}} fontFamily='Oswald' lineHeight='26,68px' >Residential</Typography>
                <Box display='flex' justifyContent='space-between' flexWrap='wrap' width='100%' >
                    {dataAllResidential.map((item:string , idx:number)=>(
                        <Typography  sx={{cursor:'pointer' ,"&:hover":{color:'#d6d6d6'} , textAlign:'start'}} width={{xs:'80%',sm:'100%',smP:'45%',md:'23%',}} key={idx} variant="h6" color="#fff" fontWeight='500' fontSize={{xs:"15px",md:'13px',mdP:'14px' ,mdPP:'15px',lg:'16px',lgP:'17px',lgPP:'18px',xl:'18px'}} fontFamily='Contax Sans' lineHeight='22px' marginTop='6px' >{item}</Typography>
                    ))}
                </Box>

                <Typography marginTop='40px' marginBottom='5px' variant="h6" color="#fff" fontWeight='500' fontSize={{xs:'16px',md:'14px',mdP:'16px' ,mdPP:'17px',lg:'18px',lgP:'19px',lgPP:'21px',xl:'22px'}} fontFamily='Oswald' lineHeight='26,68px' >Hospitality</Typography>
                <Box display='flex' justifyContent='space-between' flexWrap='wrap' width='100%' >
                    {dataAllHospitality.map((item:string , idx:number)=>(
                        <Typography  sx={{cursor:'pointer' ,"&:hover":{color:'#d6d6d6'} , textAlign:'start'}} width={{xs:'80%',sm:'100%',smP:'45%',md:'23%',}} key={idx} variant="h6" color="#fff" fontWeight='500' fontSize={{xs:"15px",md:'13px',mdP:'14px' ,mdPP:'15px',lg:'16px',lgP:'17px',lgPP:'18px',xl:'18px'}} fontFamily='Contax Sans' lineHeight='22px' marginTop='6px' >{item}</Typography>
                    ))}
                </Box>

                <Typography marginTop='40px' marginBottom='5px' variant="h6" color="#fff" fontWeight='500' fontSize={{xs:'16px',md:'14px',mdP:'16px' ,mdPP:'17px',lg:'18px',lgP:'19px',lgPP:'21px',xl:'22px'}} fontFamily='Oswald' lineHeight='26,68px' >Commercial</Typography>
                <Box display='flex' justifyContent='space-between' flexWrap='wrap' width='100%' >
                    {dataAllCommercial.map((item:string , idx:number)=>(
                        <Typography  sx={{cursor:'pointer' ,"&:hover":{color:'#d6d6d6'} , textAlign:'start'}} width={{xs:'80%',sm:'100%',smP:'45%',md:'23%',}} key={idx} variant="h6" color="#fff" fontWeight='500' fontSize={{xs:"15px",md:'13px',mdP:'14px' ,mdPP:'15px',lg:'16px',lgP:'17px',lgPP:'18px',xl:'18px'}} fontFamily='Contax Sans' lineHeight='22px' marginTop='6px' >{item}</Typography>
                    ))}
                </Box>

                <Typography marginTop='40px' marginBottom='5px' variant="h6" color="#fff" fontWeight='500' fontSize={{xs:'16px',md:'14px',mdP:'16px' ,mdPP:'17px',lg:'18px',lgP:'19px',lgPP:'21px',xl:'22px'}} fontFamily='Oswald' lineHeight='26,68px' >Mixed Use</Typography>
                <Box  paddingBottom='50px' display='flex' justifyContent='space-between' flexWrap='wrap' width='100%' >
                    {dataAllMixedUse.map((item:string , idx:number)=>(
                        <Typography  sx={{cursor:'pointer' ,"&:hover":{color:'#d6d6d6'} , textAlign:'start'}} width={{xs:'80%',sm:'100%',smP:'45%',md:'23%',}} key={idx} variant="h6" color="#fff" fontWeight='500' fontSize={{xs:"15px",md:'13px',mdP:'14px' ,mdPP:'15px',lg:'16px',lgP:'17px',lgPP:'18px',xl:'18px'}} fontFamily='Contax Sans' lineHeight='22px' marginTop='6px' >{item}</Typography>
                    ))}
                </Box>

            </Box>
        
                        {/* Fillter PC And Mobile */}
            <Box zIndex='1' width={{xs:'95%',mdP:'90%' ,mdPP:'80%'}} margin='0px auto' >
                {/* PC Filter */}
                <Box 
                    display={{xs:'none',md:'flex'}} 
                    padding={{md:'18px 0px',mdP:'20px 0px',lg:'22px 0px',lgP:'25px 0px',lgPP:'28px 0px',xl:'30px 0px'}} 
                    borderBottom='1px solid #C4C4C4' 
                    justifyContent='space-between'
                    zIndex='1'
                    >
                    <Typography 
                        width={{md:'8%'}} textAlign='start' variant="h5" fontSize={{md:'12px',mdP:'13px',mdPP:'13px',lg:'15px',lgP:'16px',lgPP:'17px',xl:'18px'}} 
                        lineHeight='24px' fontFamily='Montserrat' fontWeight='400' color="#000000" marginRight='2px'
                        >Filter by</Typography>
                    <Box display='flex' width={{md:'85%',lg:'80%%',lgP:'72%'}} alignItems='center' justifyContent='space-between'>
                        {fakeTextMobileFilter.map((item:string , idx:any)=>(
                            <Typography 
                                zIndex='1'
                                key={idx} 
                                sx={{cursor:'pointer' ,"&:hover":{color:'#54697A'} , textAlign:'center'}} 
                                border='1px solid' 
                                borderColor={stateButton == idx ? '#003F79' : '#fff'}  
                                onClick={()=>setStateButton(idx)} 
                                textAlign='start' 
                                variant="h5" 
                                fontSize={{md:'12px',mdP:'13px',lg:'15px',lgP:'16px',lgPP:'17px',xl:'18px'}} 
                                lineHeight='24px' 
                                fontFamily='Oswald' 
                                fontWeight='600' 
                                color="#000000" 
                                textTransform='uppercase'
                                padding={{md:'0px 5px',mdP:'0px 9px',lg:'0px 10px',lgP:'0px 12px',lgPP:'0px 13px',xl:'0px 14px'}} 
                            >{item}</Typography>
                        ))}
                    </Box>
                    <Box zIndex='1' width={{md:'15%',mdP:'14%',lg:'20%'}}>
                        <Link passHref={true} href='#'>
                            <Typography 
                                zIndex='1'
                                className={styles.All} 
                                onClick={()=>setStateAll(1)} 
                                sx={{cursor:'pointer' ,"&:hover":{color:'#54697A'}}}  
                                textAlign='end' 
                                justifyContent='flex-end' 
                                display='flex' 
                                variant="h5" 
                                fontSize={{md:'14px',mdP:'16px' ,mdPP:'17px',lg:'18px',lgP:'19px',lgPP:'21px',xl:'22px'}} 
                                lineHeight='24px' 
                                fontFamily='Oswald' 
                                fontWeight='bold' 
                                color="#000000" 
                                textTransform='uppercase'
                                >view all</Typography>
                        </Link>
                    </Box>
                </Box>


                
                {/* Mobile Filter */}
                <Box display={{xs:'flex' , md:'none'}} alignItems='center' justifyContent='space-between' margin={{xs:'0px 12px 0px 12px',sm:'0px 15px 0px 18px',smP:'0px 12px 0px 18px'}} padding='10px 0px' borderBottom='1px solid #C4C4C4'>
                    <Typography width={{md:'9%',mdP:'7%'}} textAlign='start' variant="h5" fontSize={{xs:'14px',sm:'16px',smP:'18px'}} lineHeight='24px' fontFamily='Montserrat' fontWeight='400' color="#000000" marginRight='2px'>Filter by</Typography>
                    <MobileFilter state={stateButton} newState={setStateButton}/>
                </Box>
                <Box margin='0px auto' width='95%' display={{xs:'flex' , md:'none'}} >
                    <Button onClick={()=> setStateAll(1)}  sx={{width:'100%' , height:'60px'}}>view all</Button>
                </Box>
            </Box>
        </>
    );
};

export default PortFolioFilter;

    {/* Mobile Filter Drawer */}
function MobileFilter( props:any) {
    const [state, setState] = React.useState({right: false,});
    const toggleDrawer =
        (anchor: 'right', open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
        setState({ ...state, ['right']: open });
    };

    return (
      <div>
        {(['right'] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button sx={{width:"22px",height:'14px',display:'flex',alignItems:'end' , flexDirection:'column',padding:'0px' }}  onClick={toggleDrawer(anchor, true)}>
                <Image  height='14px' width='22px' src='/Portfolio/Filter.svg' alt="" />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
                <Box padding='20px 20px 0px 20px'  height='100%' width='100vw' >
                    
                    <Box  alignItems='center'  display='flex' flexDirection='column'>
                        <Link passHref={true} href='/'>
                            <Image width='150px' height='35px' src='/Layout/SideLogoGray.svg' alt=""/>
                        </Link>      
                    </Box>

                    <Box onClick={toggleDrawer(anchor, false)} display='flex' alignItems='center' justifyContent='end' sx={{cursor:'poniter'}} marginTop='40px' >
                        <CloseIcon sx={{width:{xs:'22px' , sm:'24px' , smP:'26px'} , height:{xs:'22px' , sm:'24px' , smP:'26px'} , color:'#737373'}} />
                        <Typography variant="h6" color="#737373" fontWeight='400' fontSize={{xs:'18px' , sm:'20px' , smP:'22px'}} fontFamily='Oswald' lineHeight='26,68px' >Close</Typography>
                    </Box>

                    <Box  alignItems='center'  display='flex' flexDirection='column' marginTop='20px'>
                        {fakeTextMobileFilter.map((item : string , idx:any)=>(
                            <Typography 
                                key={idx} 
                                sx={{textTransform:'uppercase',cursor:'pointer' ,'&:hover':{color:'#54697A'}}}  
                                border='1px solid' 
                                borderColor={props.state == idx ? '#003F79' : '#fff'}  
                                onClick={()=>props.newState(idx)} 
                                fontSize={{xs:'16px',sm:'18px',smP:'20px'}}
                                lineHeight='25px'
                                fontFamily='Oswald'
                                fontWeight='400'
                                color="#000000"
                                textAlign='center'
                                variant="h5"
                                width='150px'
                                padding='5px 10px'
                                marginTop='23px'
                            >{item}</Typography>
                        ))}
                    </Box>

                </Box>
  
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
}

const fakeTextMobileFilter = ['all','residental','commercial','mixed use','hospitality','for sale','for rent','for sold','coming soon']

const dataAllResidential=['1010 Park Avenue' ,'995 Fifth Avenue','United Elite Utah','The Avery','212 East 47th','Altair 18/20','Four Seasons Resort and Club Dallas at Las Colinas','The Belnord','31 West 11th' ,'Ariel East','Four Seasons Vail','The Carlton House','330 East 72nd Street','Ariel West','One Manhattan Square','The Kent','50 West 66th Street','Barnegat 67','One Riverside Park','The Lofts Pier Village','535 West End Avenue','Brooklyn Point','One57','The Lucida','555TEN','Central Park Tower','The Aldyn','The Orion','70 Charlton','EVGB','The Ashley','The Rushmore',]
const dataAllHospitality=['Four Seasons Resort and Club' ,'Four Seasons Vail','Hyatt Times Square','The Park Hyatt New York','Dallas at Las Colinas','Hard Rock Hotel','Intercontinental Hotel and Residences','W Hotel Times Square',]
const dataAllCommercial=['175 West Jackson Street','Harlem Headquarters','The International Gem Tower','']
const dataAllMixedUse=['EVGB','Intercontinental Hoteland Residences','One57','']