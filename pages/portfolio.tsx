import Head from 'next/head';
import React from 'react';
import Layout from '../src/components/Layout/Layout';
import PortfolioGlobal from '../src/containers/Portfolio/PortFolioGlobal';


interface PortfolioProps {
    
}

const Portfolio: React.FC<PortfolioProps> = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="Portfolio" content="Portfolio" />
                <link rel="icon" href="/Layout/SideLogo.svg" />
            </Head>
            <Layout>
                <PortfolioGlobal/>
            </Layout>
        </>
    );
};

export default Portfolio;