/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled';
import { TextField, MenuItem, AccordionSummary, AccordionDetails, Radio, FormControlLabel, RadioGroup, Checkbox } from '@mui/material';
import { useState } from 'react';
import { Accordion } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import locs from "./api/chboxes.json"
import FilterAltIcon from '@mui/icons-material/FilterAlt';



const ContactTextField = styled(TextField)({
    '& label':{
        color: '#000',  
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
        color:"#000",
        borderRadius:"0",
      '& fieldset': {
        borderColor: '#D3D3D3',
      },
      '&:hover fieldset': {
        borderColor: '#D3D3D3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#9B9B9B',
      },
    },
});


type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Drawer() {

    const [locSearch, setLocSearch] = useState("");

    const handleLocSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocSearch((event.target as HTMLInputElement).value);
    };
    
    const [radio, setRadio] = React.useState('location');
    const [alertRadio, setAlertRadio] = React.useState('No');

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadio((event.target as HTMLInputElement).value);
    };
    const handleAlertRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAlertRadio((event.target as HTMLInputElement).value);
    };


    const [type, setType] = useState("");
    const [zipType, setZipType] = useState("");
    const [alert, setAlert] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };

    const handleZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setZipType(event.target.value);
    };

    const [state, setState] = React.useState({
        right: false,
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
      sx={{ width:{smP:'auto', xs:"100vw"} }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      padding={{smP:"40px", xs:"10px"}}
    >
      <Box display="flex" onClick={toggleDrawer(anchor, false)} justifyContent="flex-end" sx={{gridGap:"15px", cursor:"pointer"}} >
        <img src="/Career/close.svg" alt="" />
          <Typography variant="h5" color="#737373" fontFamily="Oswald">
              CLOSE
          </Typography>
      </Box>
      <Box sx={{gridGap:"25px"}} display={alert == true? "flex" : "none"} flexDirection="column" >
           <Typography color="#000" fontSize="24px" marginBottom="20px" >Create Your Job Alert</Typography>
            <form action="">    
                <Box width={{xs:"94vw", smP:"400px"}} display="flex" flexDirection="column" sx={{gridGap:"5px"}} >
                    <ContactTextField
                            label="Legal First Name"
                            fullWidth
                            type="text"
                            required
                        />
                    <ContactTextField
                            label="Legal Last Name"
                            fullWidth
                            type="text"
                            required
                        />
                    <ContactTextField
                            label="Email"
                            fullWidth
                            type="email"
                            required
                        />
                    <ContactTextField
                            label="Confirm Email"
                            fullWidth
                            type="email"
                            required
                        />
                    <ContactTextField
                            label="Alert Name"
                            fullWidth
                            type="text"
                            required
                    />
                    <Typography color="#000" fontSize="16px" fontWeight="500" margin="20px 0" >Would you like to join our Talent Community?</Typography>
                    <RadioGroup
                        sx={{display:"flex", flexDirection:"row"}}
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={alertRadio}
                        onChange={handleAlertRadioChange}
                    >
                        <FormControlLabel sx={{'.MuiFormControlLabel-label':{color:"#003F79"}}} value="Yes" control={<Radio sx={{color:"#003F79",'&.Mui-checked': {color: "#003F79",}}}  />} label="Yes" />
                        <FormControlLabel sx={{'.MuiFormControlLabel-label':{color:"#003F79"}}} value="No" control={<Radio sx={{color:"#003F79",'&.Mui-checked': {color: "#003F79",}}} />} label="No" />
                    </RadioGroup>
                    <Box display={alertRadio == 'Yes'? "flex": "none"} flexDirection="column" sx={{gridGap:"20px"}} >
                        <ContactTextField
                            label="Phone Number"
                            fullWidth
                            type="number"
                            required
                        />
                        <Box display="flex" alignItems="flex-start" sx={{gridGap:"25px"}} >
                            <img src="/Career/file.svg" alt="" />
                            <Typography color="#000" fontSize="16px" fontWeight="500" marginBottom="20px" >Attach Resume</Typography>
                        </Box>
                    </Box>
                    <Typography color="#000" fontSize="20px" fontWeight="500" marginBottom="20px" padding="10px" borderBottom="1px solid #F2F2F2" >Selected Filters</Typography>
                    <Button fullWidth sx={{ textTransform:"initial", backgroundColor:"#003F79", borderRadius:"0px", color:"#fff", "&:hover":{backgroundColor:"#004F71"} }} >
                    Save alert
                    </Button>
                    <Button fullWidth onClick={()=> setAlert(false)} sx={{ textTransform:"initial", backgroundColor:"#F2F2F2", borderRadius:"0px" }} >
                        Cancel
                    </Button>
                </Box>
            </form>
      </Box>

      <Box sx={{gridGap:"25px"}} display={alert == false? "flex" : "none"} flexDirection="column" >
        <Typography color="#000" fontSize="24px">Filter</Typography>
        <Box border="1px solid #F2F2F2" width={{xs:"94vw", smP:"400px"}} >
            <Box bgcolor="#F2F2F2" padding="20px" >
                <Typography color="#000" fontWeight="500" >  
                Search Job Listings
                </Typography>
            </Box>
            <Box padding="20px" alignItems="center" display="flex" >
                <Typography textTransform="uppercase" marginRight="20px" width="100px" > sort by: </Typography>
                <ContactTextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    fullWidth
                    value={type}
                    onChange={handleChange}
                >
                {types.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.value}
                    </MenuItem>
                ))}
            </ContactTextField>
            </Box>
            <Box bgcolor="#F2F2F2" padding="20px" >
                <Typography color="#000" fontWeight="500" >  
                    Filters
                </Typography>
            </Box>
            <Accordion sx={{boxShadow:"none", padding:"10px"}} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{fill:"#003F79"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography textTransform="uppercase" >{radio}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box borderTop="1px solid #F2F2F2" padding="20px 0" >
                        <Typography color="#000" fontWeight="500" fontSize="16px"  >
                            Search By
                        </Typography>
                        <RadioGroup
                            sx={{display:"flex"}}
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={radio}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel sx={{'.MuiFormControlLabel-label':{color:"#003F79"}}} value="location" control={<Radio sx={{color:"#003F79",'&.Mui-checked': {color: "#003F79",}}}  />} label="Location" />
                            <FormControlLabel sx={{'.MuiFormControlLabel-label':{color:"#003F79"}}} value="remote" control={<Radio sx={{color:"#003F79",'&.Mui-checked': {color: "#003F79",}}} />} label="Remote" />
                            <FormControlLabel sx={{'.MuiFormControlLabel-label':{color:"#003F79"}}} value="zip-code" control={<Radio sx={{color:"#003F79",'&.Mui-checked': {color: "#003F79",}}} />} label="Zip Code" />
                        </RadioGroup>
                    </Box>
                    <Box display={radio == "location" ? "flex" : "none"} flexDirection="column" >
                        <Box display="flex" sx={{gridGap:"15px"}} >
                            <ContactTextField
                                label="Search"
                                type="text"
                                id="location-input"
                                onChange={handleLocSearchChange}
                            />
                            <FormControlLabel                              
                              label="All"
                              control={<Checkbox sx={{color:"#003F79", '&.Mui-checked': {color: "#003F79"} }} />}
                            />
                        </Box>
                        <Box display="flex" marginTop="10px" flexDirection="column" >
                        {locs.filter((loc: any) => {
                                 if (locSearch == "") {
                                    return loc;
                                } else if (loc.address.toLowerCase().includes(locSearch.toLowerCase())) {
                                    return loc;
                                }}
                            ).map((loc: { address: string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>>; }, idx: React.Key | null | undefined) =>
                                <FormControlLabel
                                    key={idx}
                                    label={loc.address}
                                    control={<Checkbox sx={{color:"#003F79", '&.Mui-checked': {color: "#003F79"} }} />}
                                />
                            )}
                        </Box>
                    </Box>
                    <Box display={radio == "remote" ? "flex" : "none"} flexDirection="column" >
                        <FormControlLabel
                            label="Fully Remote"
                            control={<Checkbox sx={{color:"#003F79", '&.Mui-checked': {color: "#003F79"} }} />}
                        />
                        <FormControlLabel
                            label="Optional Work from Home"
                            control={<Checkbox sx={{color:"#003F79", '&.Mui-checked': {color: "#003F79"} }} />}
                        />
                        <FormControlLabel
                            label="Temporary Remote"
                            control={<Checkbox sx={{color:"#003F79", '&.Mui-checked': {color: "#003F79"} }} />}
                        />
                    </Box>  
                    <Box display={radio == "zip-code" ? "flex" : "none"} alignItems="center" sx={{gridGap:"15px"}} >
                        <Typography>
                            Within
                        </Typography>
                        <ContactTextField
                            id="outlined-select-currency"
                            select                        
                            label="Select"
                            fullWidth
                            value={zipType}
                            onChange={handleZipChange}
                        >
                            {types2.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </ContactTextField>
                        <ContactTextField
                            id="outlined-select-currency"                        
                            fullWidth
                            label="Zip Code"
                        />
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Box padding="10px" >
                <Box display="flex" sx={{gridGap:"10px"}} justifyContent="space-between" >
                    <Button onClick={()=> setAlert(false)} sx={{width:"200px", border:"1px solid #003F79", borderRadius:"0px", color:"#003F79" }} >
                        reset
                    </Button>

                    <Button sx={{width:"200px", backgroundColor:"#F2F2F2", borderRadius:"0px", color:"#003F79" }} >
                        search
                    </Button>
                    
                </Box>
                <Box marginTop="10px" >
                    <Button fullWidth onClick={()=> setAlert(true)} sx={{ textTransform:"initial", backgroundColor:"#003F79", borderRadius:"0px", color:"#fff", "&:hover":{backgroundColor:"#004F71"} }} >
                        Create Your Job Alert
                    </Button>
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
              <FilterAltIcon sx={{fill:"#003F79"}} />
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


const types = [
    {
      value: 'Newest',
    },
    {
      value: 'Oldest',
    }
];

const types2 = [
    {
      value: 'Miles',
    },
    {
      value: 'Kilometers',
    }
];
  