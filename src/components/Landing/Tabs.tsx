import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

interface FullWidthTabs {
    legal:string,
    finance:string,
    dev:string,
    acquisitions:string,
    marketing:string,
    design:string,
    sales:string
}

export default function FullWidthTabs(props:FullWidthTabs) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box display={{xs:"none", mdPP:"block"}} >
      {/* <AppBar position="static"> */}
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          aria-label="full width tabs example"
          sx={{bgcolor:"#E5E5E5"}}
        >
          <Tab 
              sx={{color:"#3F3F3F", fontSize:"24px", fontFamily:"Alegreya Sans", marginRight:"14rem"}} 
              label="Legal" 
              {...a11yProps(0)} 
          />
          <Tab 
              sx={{color:"#3F3F3F", fontSize:"24px", fontFamily:"Alegreya Sans", marginRight:"14rem"}} 
              label="Finance" 
              {...a11yProps(1)} 
          />
          <Tab 
              sx={{color:"#3F3F3F", fontSize:"24px", fontFamily:"Alegreya Sans", marginRight:"14rem"}} 
              label="Development" 
              {...a11yProps(2)} 
          />
          <Tab 
              sx={{color:"#3F3F3F", fontSize:"24px", fontFamily:"Alegreya Sans", marginRight:"14rem"}} 
              label="Acquisitions" 
              {...a11yProps(3)} 
          />
          <Tab 
              sx={{color:"#3F3F3F", fontSize:"24px", fontFamily:"Alegreya Sans", marginRight:"14rem"}} 
              label="Marketing" 
              {...a11yProps(4)} 
          />
          <Tab 
              sx={{color:"#3F3F3F", fontSize:"24px", fontFamily:"Alegreya Sans", marginRight:"14rem"}} 
              label="Design" 
              {...a11yProps(5)} 
          />
          <Tab 
              sx={{color:"#3F3F3F", fontSize:"24px", fontFamily:"Alegreya Sans", marginRight:"14rem"}} 
              label="Sales + Leasing" 
              {...a11yProps(6)} 
          />
        </Tabs>
      {/* </AppBar> */}
      <Box padding="40px 20px" border="1px solid #9B9B9B" >
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Typography color="#5C5C5C" fontSize="20px" >
                    {props.legal}
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Typography color="#5C5C5C" fontSize="20px" >
                    {props.finance}
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <Typography color="#5C5C5C" fontSize="20px" >
                    {props.dev}
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
                <Typography color="#5C5C5C" fontSize="20px" >
                    {props.acquisitions}
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
                <Typography color="#5C5C5C" fontSize="20px" >
                    {props.marketing}
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
                <Typography color="#5C5C5C" fontSize="20px" >
                    {props.design}
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
                <Typography color="#5C5C5C" fontSize="20px" >
                    {props.sales}
                </Typography>
            </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  );
}