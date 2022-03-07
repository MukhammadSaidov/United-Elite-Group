import React, { useState } from 'react';
import { Button, FormControlLabel, MenuItem, Radio, RadioGroup, styled, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface ContactProps {
    
}


const ContactTextField = styled(TextField)({
    '& value':{
        color:"red",
    },
    '& label':{
        color: '#FFF',  
    },
    '&:hover label':{
        color: '#D3D3D3',  
    },
    '& label.Mui-focused': {
      color: '#9B9B9B',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#9B9B9B',
    },
    '& .MuiOutlinedInput-root': {
        color:"#fff",
      '& fieldset': {
        borderColor: '#FFF',
      },
      '&:hover fieldset': {
        borderColor: '#D3D3D3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#9B9B9B',
      },
    },
});

const Contact: React.FC<ContactProps> = () => {

    const [type, setType] = useState('');
    const [radio, setRadio] = React.useState('home');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameChange = (event: any) => {
        setName(event.target.value)
    }

    const handlePhoneChange = (event: any) => {
        setPhone(event.target.value)
    }

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }

    
    const handleSubmit = (event: any) => {
        event.preventDefault()
    }

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadio((event.target as HTMLInputElement).value);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };

    return (
        <Box sx={{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.15))"}} padding={{xs:"70px 0", md:"100px 0"}} >

            <video loop autoPlay muted style={{position:"fixed", zIndex:"-1", top:"0", left:"0", width:"100%", height:"100%", objectFit:"cover"}} >
                <source src="https://extell.nyc3.digitaloceanspaces.com/extell-corp/overview.webm" type='video/webm' />
                <source src="https://extell.nyc3.digitaloceanspaces.com/extell-corp/overview.mp4" type='video/mp4' />
            </video>
            <Box display="flex" flexDirection="column" margin="0 auto" alignItems="center" maxWidth={{xs:"90%", smP:"60%", mdPP:"60%", lgS:"50%"}} >
                <Typography 
                    fontFamily="Alegreya Sans" 
                    fontSize={{mdP:"64px", sm:"38px", xs:"24px"}} 
                    color="#fff" 
                    fontWeight="500"
                    marginBottom={{xs:"23px", md:"45px"}}
                >
                    Contact Us
                </Typography>
                <Typography  
                    textAlign="center"
                    fontSize={{md:"24px", sm:"18px", xs:"15px"}}
                    lineHeight={{md:"36px"}}
                    width={{xs:"90%", mdPP:"60%"}}
                    color="#fff"
                    fontWeight="700"
                >
                    Feel free give us a call Monday-Friday 9am-6pm,
                    or email us anytime. We are here to help, and
                    look forward to hearing from you!
                </Typography>
            </Box>
            <Box 
                display="flex" 
                marginTop={{xs:"40px", md:"70px"}} 
                justifyContent="space-between" 
                maxWidth={{xs:"90%", mdPP:"60%"}} 
                margin="0 auto" 
                textAlign="center" 
                flexDirection={{xs:"column", mdPP:"row"}} 
            >
                <Box padding="0 20px"  width={{xs:"100%", mdPP:"23%"}}  borderRight={{xs:"none", mdPP:"1px solid #C4C4C4"}} >
                    <a style={{textDecoration:"none", color:"#FFF"}} href="tel:718-439-1222" >
                        <Typography marginBottom="25px" >
                            (718) 439-1222
                        </Typography>
                    </a>
                </Box>
                <Box padding="0 20px 0 0" width={{xs:"100%", mdPP:"36%"}}  borderRight={{xs:"none", mdPP:"1px solid #C4C4C4"}} >
                    <a style={{textDecoration:"none", color:"#FFF"}} href="mailto: nfo@unitedelitegroup.com">
                        <Typography marginBottom="25px" >
                            nfo@unitedelitegroup.com
                        </Typography>
                    </a>
                </Box>
                <Box padding="0 20px" width={{xs:"100%", mdPP:"40%"}} >
                    <a style={{textDecoration:"none", color:"#FFF"}} href="https://g.page/UnitedEliteGroup?share">
                        <Typography marginBottom="25px" >
                            United Elite Group 555 Madison Ave New York, NY, 10022
                        </Typography>
                    </a>
                </Box>
            </Box>
                <Typography 
                    marginTop={{xs:"40px", md:"70px"}} 
                    margin="0 auto" 
                    maxWidth={{xs:"90%", sm:"80%", lg:"47%"}} 
                    color="#FFF" 
                    fontSize={{xs:"18px", sm:"24px", md:"34px"}} 
                    marginBottom={{xs:"20px", md:"40px"}} 
                    padding={{xs:"0", mdPP:"0 100px"}} 
                    textAlign="center" 
                    fontFamily="Alegreya Sans"  
                >
                    Request A Free Home Consultation With United Elite Group
                </Typography>
            <Box marginTop={{xs:"40px", md:"70px"}} margin="0 auto" maxWidth={{xs:"90%", sm:"80%", lg:"40%"}} >
                <form action="" onSubmit={handleSubmit} >
                    <Box display="flex" flexDirection="column" sx={{gridGap:{xs:"14px", md:"40px"}}} >
                        
                        <ContactTextField
                            id=""
                            type="text"
                            fullWidth
                            required
                            value={name}
                            onChange={handleNameChange}
                            label="Name"
                            variant='outlined'                    
                            sx={{fontSize:"100px"}}
                        />
                        <ContactTextField
                            id=""
                            type="email"
                            fullWidth
                            required
                            value={email}
                            onChange={handleEmailChange}
                            label="Email"
                            variant='outlined'                    
                        />
                        <ContactTextField
                            id=""
                            type="number"
                            fullWidth
                            required
                            value={phone}
                            onChange={handlePhoneChange}
                            label="Phone"
                            variant='outlined'               
                        />
                        <ContactTextField
                            id="outlined-select-currency"
                            select
                            label="Select"
                            value={type}
                            onChange={handleChange}
                            >
                            {types.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.value}
                                </MenuItem>
                            ))}
                        </ContactTextField>
                        <Typography alignSelf="center" fontSize={{xs:"14px", md:"18px"}} color="#fff">
                            Select an option
                        </Typography>
                        <Box display="flex" justifyContent="center" sx={{}} >
                            <RadioGroup
                                sx={{display:"flex", flexDirection:"row", gridGap:"25px"}}
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={radio}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel 
                                    sx={{'.MuiFormControlLabel-label':{color:"#FFFFFF"}}} 
                                    value="home" 
                                    control={
                                        <Radio sx={{color:"#fff",'&.Mui-checked': {color: "#fff",}}}  />
                                    } 
                                    label="In-Home Consultation" 
                                />
                                <FormControlLabel 
                                    sx={{'.MuiFormControlLabel-label':{color:"#FFFFFF"}}} 
                                    value="virtual" 
                                    control={
                                        <Radio sx={{color:"#fff",'&.Mui-checked': {color: "#fff",}}} />
                                    } 
                                    label="Virtual Consultation" 
                                />
                            </RadioGroup>
                        </Box>
                        <Button 
                            type="submit" 
                            variant='outlined' 
                            fullWidth 
                            sx={{color:"#FFF", height:"60px", fontSize:"18px", border:"1px solid #fff", "&:hover":{border:"1px solid #D3D3D3"}}}
                        >
                            Send Request
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Contact;


const types = [
    {
      value: 'Newest',
    },
    {
      value: 'Oldest',
    }
  ];
  