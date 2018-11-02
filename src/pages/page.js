import React from 'react';
import Footer from '../containers/Footer';
import Header from '../containers/Header';

const Page = props => {
    const { children } = props;
    return (
        <div className="HolyGrail">
            
            <Header />
            <div className="HolyGrail-body">
                <main className="HolyGrail-content">{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
