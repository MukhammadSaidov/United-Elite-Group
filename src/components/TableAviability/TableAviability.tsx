/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


interface TableAviabilityProps {
    fakePhoto:any
    fake:any
    
}

const TableAviability: React.FC<TableAviabilityProps> = (props) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
        };

    
    return (
        <>
        
        


        <Box  marginTop={{xs:'35px',sm:'40px',smP:'45px',md:'50px',mdP:'80px',mdPP:'100px'}}>

            <Box height='auto' minHeight={{xs:'auto',md:'550px'}} alignItems='center'  display='flex' justifyContent='space-between' flexDirection={{xs:'column',mdPP:'unset'}} >
                <Box height={{xs:'400px',sm:'500px',smP:'550px',md:'600px',mdPP:'100%'}} width={{xs:'100%',smP:'80%',md:'70%',mdPP:'20%'}} margin='0px auto'>
                    <img height='100%' width='100%'  src={props.fakePhoto} />
                </Box>

                {/* Pc_Ver */}
                <Box width={{md:'100%',mdPP:'75%'}} display={{xs:'none',md:'block'}} >

                    <Typography textAlign={{xs:'center' , mdPP:'start'}} marginBottom={{xs:'',sm:'',smP:'15px',mdP:'20px',mdPP:'40px'}} marginTop={{xs:'',smP:'12px',mdP:'15px',mdPP:'0px'}}  variant="h6" color="black" fontSize={{xs:'',sm:'',smP:'34px',md:'38px',mdP:'40px',mdPP:'48px'}} lineHeight='66,91px' fontWeight='500' fontFamily='Contax Sans'>Central Park Tower</Typography>

                    <Box display='flex' marginBottom={{xs:'',sm:'',smP:'22px',md:'25px',mdP:'44px',mdPP:'50px'}} justifyContent='space-between'>
                        <Box  display='flex' width='80%' justifyContent='space-between'>
                            <Typography width={{xs:'12%', lgP:'16%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='20,75px' fontWeight='400' fontFamily='Oswald'>RESIDENCE</Typography>
                            <Typography width={{xs:'12%', lgP:'16%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='20,75px' fontWeight='400' fontFamily='Oswald'>BEDS</Typography>
                            <Typography width={{xs:'12%', lgP:'16%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='20,75px' fontWeight='400' fontFamily='Oswald'>BATHS</Typography>
                            <Typography width={{xs:'16%', lgP:'16%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='20,75px' fontWeight='400' fontFamily='Oswald'>AREA</Typography>
                            <Typography width={{xs:'16%', lgP:'16%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='20,75px' fontWeight='400' fontFamily='Oswald'>PRICE</Typography>
                            <Typography width={{xs:'37%', lgP:'25%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='20,75px' fontWeight='400' fontFamily='Oswald'>EST.MONTHLY COMMON CHARGES</Typography>
                        </Box>
                        <Typography width='15%' textAlign='center' variant="h6" component="p" color="black"  fontSize={{smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='20,75px' fontWeight='400' fontFamily='Oswald'>FLOOR PLAN</Typography>
                    </Box>
                        {/* PC_Ver */}
                    {props.fake.map((item:any , idx:any)=>(
                        <Box key={idx} display='flex' alignItems='center' marginBottom='15px'justifyContent='space-between' >
                            <Box display='flex' alignItems='center' width='80%' height='50px' bgcolor={idx % 2 != 0 ? "#FAFAFA" : '#fff'} >
                                <Typography width={{xs:'12%', lgP:'16%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='19.52px' fontWeight='500' fontFamily='Contax Sans'>{item.residence}</Typography>
                                <Typography width={{xs:'12%', lgP:'16%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='19.52px' fontWeight='500' fontFamily='Contax Sans'>{item.beds}</Typography>
                                <Typography width={{xs:'12%', lgP:'16%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='19.52px' fontWeight='500' fontFamily='Contax Sans'>{item.baths}</Typography>
                                <Typography width={{xs:'16%', lgP:'16%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='19.52px' fontWeight='500' fontFamily='Contax Sans'>{item.area}</Typography>
                                <Typography width={{xs:'16%', lgP:'16%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='19.52px' fontWeight='500' fontFamily='Contax Sans'>{item.price}</Typography>
                                <Typography width={{xs:'37%', lgP:'25%'}} textAlign='center' variant="h6" component="p" color="black" fontSize={{sm:'11px',smP:'12px',mdP:'13px',mdPP:'14px'}} lineHeight='19.52px' fontWeight='500' fontFamily='Contax Sans'>{item.charges}</Typography>
                            </Box>
                            
                            <Button sx={{fontSize:{smP:'10px',mdP:'11px',mdPP:'12px', lgP:'15px'} ,border:'1.2px solid #003F79',color:'#003F79', width:'15%',  height: {xs: "35px", sm: "35px", md: "40px", mdP: "45px" , lg: "45px", lgP: "50px", xl: "50px"}, "&:hover":{color:'#fff', bgcolor:"#003F79"}}}  variant="outlined">DOWNLOAD</Button>
                    
                        </Box>
                    ))}

                    <Box display='flex' alignItems='center' paddingTop={{xs:'',sm:'',smP:'',md:'20px',mdP:'28px',mdPP:'30px'}}>
                        <Button sx={{ fontSize:{smP:'10px',mdP:'11px',mdPP:'12px', lgP:'15px'} , marginRight:'15px',border:'1.2px solid #003F79',color:'#003F79', width:'18%',  height: {xs: "35px", sm: "35px", md: "40px", mdP: "45px" , lg: "45px", lgP: "50px", xl: "50px"}, "&:hover":{color:'#fff', bgcolor:"#003F79"}}}  variant="outlined">MORE INFO</Button>
                        <Button sx={{ fontSize:{smP:'10px',mdP:'11px',mdPP:'12px', lgP:'15px'} , border:'1.2px solid #003F79',color:'#003F79', width:'23%',  height: {xs: "35px", sm: "35px", md: "40px", mdP: "45px" , lg: "45px", lgP: "50px", xl: "50px"}, "&:hover":{color:'#fff', bgcolor:"#003F79"}}}  variant="outlined">MORE INFO</Button>
                    </Box>
                </Box>
            </Box>

            
            {/* Mobile_Ver */}
            <Box  width={{xs:'100%',smP:'80%'}} margin='0px auto'  display={{xs:'block',md:'none'}}>

                <Typography marginBottom='15px' marginTop='12px'  variant="h6" color="black" fontSize={{xs:'22px',sm:'25px',smP:'28px'}} lineHeight='33,46px' fontWeight='500' fontFamily='Contax Sans'>Central Park Tower</Typography>

                <Box marginBottom='20px' >
                    {props.fake.map((item:any , idx:any)=>(
                        <Accordion key={idx} expanded={expanded === idx} onChange={handleChange(idx)}>
                            <AccordionSummary
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                sx={{
                                    width:'100%',
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'space-between', 
                                    bgcolor:'#F2F2F2',
                                    height:'40px',
                                    padding:'0px'
                                
                            }}>
                                <Box  padding={{xs:'12px',sm:'22px',smP:'23px 30px'}} width='100%' alignItems='center' justifyContent='space-between' display='flex'>
                                    <Typography width='40%' textAlign='start' variant="h6" color="black" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='16,3px' fontWeight='300' fontFamily='Oswald'>RESIDENCE</Typography>

                                    <Typography textAlign='start' variant="h6" color="#003F79" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='15,33px' fontWeight='500' fontFamily='Contax Sans'>{item.beds} Beds / {item.baths} Baths</Typography>

                                    <Typography textAlign='end' variant="h6" color="#003F79" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='15,33px' fontWeight='500' fontFamily='Contax Sans'>{item.charges.slice(1,2)}M</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails sx={{padding:'0px'}}>

                                <Box padding={{xs:'12px',sm:'22px',smP:'23px 30px'}} width='100%' alignItems='center' justifyContent='space-between' display='flex' height='40px' borderBottom='1px solid #E1E1E1'>
                                    <Typography textAlign='start' variant="h6" color="black" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='16,3px' fontWeight='300' fontFamily='Oswald'>BEDROOMS</Typography>
                                    <Typography textAlign='end' variant="h6" color="#003F79" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='15,33px' fontWeight='500' fontFamily='Contax Sans'>{item.beds}</Typography>
                                </Box>

                                <Box padding={{xs:'12px',sm:'22px',smP:'23px 30px'}} width='100%' alignItems='center' justifyContent='space-between' display='flex' height='40px' borderBottom='1px solid #E1E1E1'>
                                    <Typography textAlign='start' variant="h6" color="black" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='16,3px' fontWeight='300' fontFamily='Oswald'>BATHROOMS</Typography>
                                    <Typography textAlign='end' variant="h6" color="#003F79" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='15,33px' fontWeight='500' fontFamily='Contax Sans'>{item.baths}</Typography>
                                </Box>

                                <Box padding={{xs:'12px',sm:'22px',smP:'23px 30px'}} width='100%' alignItems='center' justifyContent='space-between' display='flex' height='40px' borderBottom='1px solid #E1E1E1'>
                                    <Typography textAlign='start' variant="h6" color="black" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='16,3px' fontWeight='300' fontFamily='Oswald'>AREA</Typography>
                                    <Typography textAlign='end' variant="h6" color="#003F79" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='15,33px' fontWeight='500' fontFamily='Contax Sans'>{item.area}</Typography>
                                </Box>

                                <Box padding={{xs:'12px',sm:'22px',smP:'23px 30px'}} width='100%' alignItems='center' justifyContent='space-between' display='flex' height='40px' borderBottom='1px solid #E1E1E1'>
                                    <Typography textAlign='start' variant="h6" color="black" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='16,3px' fontWeight='300' fontFamily='Oswald'>PRICE</Typography>
                                    <Typography textAlign='end' variant="h6" color="#003F79" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='15,33px' fontWeight='500' fontFamily='Contax Sans'>{item.price}</Typography>
                                </Box>

                                <Box padding={{xs:'12px',sm:'22px',smP:'23px 30px'}} width='100%' alignItems='center' justifyContent='space-between' display='flex' height='40px' borderBottom='1px solid #E1E1E1'>
                                    <Typography textAlign='start' variant="h6" color="black" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='16,3px' fontWeight='300' fontFamily='Oswald'>EST.MONTHLY COMMON CHARGES</Typography>
                                    <Typography textAlign='end' variant="h6" color="#003F79" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='15,33px' fontWeight='500' fontFamily='Contax Sans'>{item.charges}</Typography>
                                </Box>

                                <Box padding={{xs:'12px',sm:'22px',smP:'23px 30px'}} width='100%' alignItems='center' justifyContent='space-between' display='flex' height='40px' borderBottom='1px solid #E1E1E1'>
                                    <Typography textAlign='start' variant="h6" color="black" fontSize={{xs:'11px',sm:'14px',smP:'16px'}} lineHeight='16,3px' fontWeight='300' fontFamily='Oswald'>FLOOR PLAN</Typography>
                                    <Button sx={{fontSize:{xs:'10px',sm:'13px',smP:'15px'} ,color:'#003F79', padding:'0px',  height:{xs: "35px", sm: "35px"}}}  variant="text">DOWNLOAD</Button>
                                </Box>

                            </AccordionDetails>
                        </Accordion>
                    ))}

                </Box>

                <Button sx={{ fontSize:{xs:'14px',sm:'15px'} ,border:'1.2px solid #003F79',color:'#003F79', marginBottom:'12px',  height: {xs: "50px"}, "&:hover":{color:'#fff', bgcolor:"#003F79"}}} fullWidth  variant="outlined">MORE INFO</Button>
                <Button sx={{ fontSize:{xs:'14px',sm:'15px'} ,border:'1.2px solid #003F79',color:'#003F79', marginBottom:'12px',  height: {xs: "50px"}, "&:hover":{color:'#fff', bgcolor:"#003F79"}}} fullWidth  variant="outlined">GO TO PROPERTY SITE</Button>
                
                

            </Box>
        </Box>
        </>
    );
};

export default TableAviability;