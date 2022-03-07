import { Box } from '@mui/system';
import React from 'react';
import TableAviability from '../components/TableAviability/TableAviability';

interface AviabilityContentProps {
    
}

const AviabilityContent: React.FC<AviabilityContentProps> = () => {
    return (

        <Box width='85%' margin='0px auto' paddingTop='1'>
            <Box margin={{xs:'0px' , md:'0px 0px 100px 0px'}}>
                <TableAviability fakePhoto={'/Aviability/Rectangle1.png'} fake={fake1}/>
            </Box>
            <TableAviability fakePhoto={'/Aviability/Rectangle2.png'} fake={fake2}/>
            <TableAviability fakePhoto={'/Aviability/Rectangle3.png'} fake={fake3}/>
            <Box marginBottom={{xs:'50px' , md:'200px'}}>
                <TableAviability fakePhoto={'/Aviability/Rectangle4.png'} fake={fake4}/>
            </Box>
        </Box>
    );
};

export default AviabilityContent;


const fake1 = [
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'1',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'2',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'3',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'4',
    },
]

const fake2 = [
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'1',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'2',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'3',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'4',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'5',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'6',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'7',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'8',
    },
]
const fake3 = [
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'1',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'2',
    },
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'3',
    },
]
const fake4 = [
    {
        residence:'20E',
        beds:'4',
        baths:'4.5',
        area:'2, 259 sq.ft',
        price:'$4,900,000',
        charges:'$5,523.00',
        _id:'1',
    },
]