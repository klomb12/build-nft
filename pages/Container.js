import React from 'react';
import Footer from './footer';
import Content from './content';
import Nav from './Nav';

const Container = () => {
    return (
        <>
            <box>
                <Nav />
            </box>
            <box>
                <Content />
            </box>
            <box>
                <Footer />
            </box>

        </>
    );
}

export default Container;
