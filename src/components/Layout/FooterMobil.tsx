import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import styles from '../../../styles/Home.module.css'
interface FooterMobilProps {
    
}

const FooterMobil: React.FC<FooterMobilProps> = () => {
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

                <Box className={styles.bgimageMobil}  padding={{xs:'50px 10px',sm:'55px 15px',smP:'65px 20px'}} >

                    <Box padding={{xs:'30px 0px',sm:'14px 0px',smP:'15px 0px'}} alignItems='center' display='flex' justifyContent='space-between' flexDirection='column'> 
                        <Typography  fontSize={{xs:'22px',sm:'24px',smP:'26px'}} lineHeight={{xs:'30px',sm:'33px',smP:'33,46px'}} variant="h6" color="#FFFFFF">Register for United </Typography>
                        <Typography  fontSize={{xs:'22px',sm:'24px',smP:'26px'}} lineHeight={{xs:'30px',sm:'33px',smP:'33,46px'}} variant="h6" color="#FFFFFF">Elite News Updates</Typography>
                    </Box>
                    
                    <form action="" onSubmit={onSubmitForm} style={{width:'100%'}}>
                        <Box  sx={{gridGap:'15px'}} display='flex' alignItems='center' justifyContent='space-between' flexDirection='column' height='auto' width={{xs:'100%',sm:'80%',smP:'70%'}} margin='0px auto'>
                            <input type="text" value={name} onChange={()=>onChangeName(event)} className={styles.inputMobil} placeholder='Name'/>
                            <input type="email" value={email} onChange={()=>onChangeEmail(event)} className={styles.inputMobil} placeholder='Email'/>
                            <Button type='submit' sx={{width:'100%',color:'#003F79' , bgcolor:'#ffffff' ,"&:hover":{bgcolor:"#ffffff"} , fontSize:{xs:'14px',sm:'15px',smP:'16px'} , height:'50px'}} >submit</Button>
                        </Box>
                    </form>

                </Box>

                <Box padding={{xs:'13px 0px',sm:'14px 0px',smP:'15px 0px'}} bgcolor="#FFF" alignItems='center' display='flex' justifyContent='space-between' flexDirection='column'>
                    <Typography variant="h6" color="#5C5C5C" fontSize={{xs:'10px',sm:'11px',smP:'12px'}}>© 2022 United Elitel Development. All Rights Reserved</Typography>
                    <Typography variant="h6" color="#5C5C5C" fontSize={{xs:'10px',sm:'11px',smP:'12px'}}> Terms of Use | Privacy Policy</Typography>
                </Box>
                

            </Box>
            
        </>
    );
};

export default FooterMobil;