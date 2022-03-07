import React from 'react';
import AviabilityContent from '../src/containers/AviabilityContent'
import Head from 'next/head'
import Layout from '../src/components/Layout/Layout'

interface AviabilityProps {
    
}

const Aviability: React.FC<AviabilityProps> = () => {
    return (
        <>
            <Head>
                <title>Aviability</title>
                <meta name="aviability" content="aviability" />
                <link rel="icon" href="/Layout/SideLogo.svg" />
            </Head>
            <Layout>
                <AviabilityContent/>
            </Layout>
            
        </>
    );
};

export default Aviability;