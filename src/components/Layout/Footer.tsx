import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import styles from '../../../styles/Home.module.css'

interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [obj, setObj] = React.useState({});

    const onChangeName =(event : any)=>{setName(event.target.value)}
    const onChangeEmail =(event : any)=>{setEmail(event.target.value)}

    const onSubmitForm =(event : any)=>{
        event.preventDefault() 
        setObj({name:name,email:email})
    }
  
    return (
        <>
            <Box >

                <Box overflow="hidden" className={styles.bgimage}  padding={{md:'70px 70px',lg:'110px 120px',xl:'110px 120px'}} >

                    <Typography  fontSize={{md:'29px',mdP:'36px',mdPP:'40px',lg:'44px',xl:'48px'}} lineHeight={{md:'45px',mdP:'55px',mdPP:'55px',lg:'60px',xl:'66,91px'}} variant="h6" color="#FFFFFF">Register for  United Elite News Updates</Typography>
                    
                    <form action="" onSubmit={onSubmitForm}>
                        <Box  sx={{gridGap:'20px'}} alignItems='center' display='flex' height={{md:'auto', lg:'70px'}} width={{md:'1100px',xl:'1200px'}} justifyContent={{md:'space-between',lg:'unset'}} flexDirection={{md:'column',lg:'unset'}}>
                            <input type="text" value={name} onChange={()=>onChangeName(event)} className={styles.input} placeholder='Name'/>
                            <input type="email" value={email} onChange={()=>onChangeEmail(event)} className={styles.input} placeholder='Email'/>
                            <Button type='submit' sx={{width:{md:'35%',xl:'30%'},color:'#003F79' ,padding:'15px 150px' , bgcolor:'#ffffff' ,"&:hover":{bgcolor:"#ffffff"} , fontSize:{md:'16px',mdP:'17px',mdPP:'19px',lg:'21px',xl:'22px'},height:{md:'61px',lg:'100%'}}} >submit</Button>
                        </Box>
                    </form>

                </Box>

                <Box padding={{md:'15px 0px',lg:'25px 0px',xl:'30px 0px'}} bgcolor="#FFF" alignItems='center' display='flex' justifyContent='space-between' flexDirection='column'>
                    <Typography variant="h6" color="#5C5C5C" fontSize={{md:'17px',mdP:'18px',mdPP:'20px',lg:'22px',xl:'24px'}}>© 2022 United Elitel Development. All Rights Reserved</Typography>
                    <Typography variant="h6" color="#5C5C5C" fontSize={{md:'17px',mdP:'18px',mdPP:'20px',lg:'22px',xl:'24px'}}> Terms of Use | Privacy Policy</Typography>
                </Box>


            </Box>

            
        </>
    );
};

export default Footer