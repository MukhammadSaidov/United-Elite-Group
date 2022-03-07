import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface MobAccordeonProps {
    legal:string,
    finance:string,
    dev:string,
    acquisitions:string,
    marketing:string,
    design:string,
    sales:string
}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      "",
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const MobAccordeon: React.FC<MobAccordeonProps> = (props) => {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box display={{xs:"block", mdPP:"none"}} >
            <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Box display="flex" justifyContent="center" >
                    <Typography alignSelf="center" fontSize="24px" fontFamily="Alegreya Sans" fontWeight="500" >Legal</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {props.legal}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography alignSelf="center" fontSize="24px" fontFamily="Alegreya Sans" fontWeight="500" >Finance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {props.finance}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography alignSelf="center" fontSize="24px" fontFamily="Alegreya Sans" fontWeight="500" >Development</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {props.dev}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography alignSelf="center" fontSize="24px" fontFamily="Alegreya Sans" fontWeight="500" >Acquisitions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {props.acquisitions}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                <Typography alignSelf="center" fontSize="24px" fontFamily="Alegreya Sans" fontWeight="500" >Marketing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {props.marketing}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                <Typography alignSelf="center" fontSize="24px" fontFamily="Alegreya Sans" fontWeight="500" >Design</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {props.design}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                <Typography alignSelf="center" fontSize="24px" fontFamily="Alegreya Sans" fontWeight="500" >Sales + Leasing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {props.sales}
                </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default MobAccordeon;