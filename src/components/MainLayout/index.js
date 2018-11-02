import React from 'react';

const MainLayout = (props) => {
    const { children } = props;
    return (
        <div>
            <div> Main Layout</div>
            {children}
        </div>
    );

}

export default MainLayout;