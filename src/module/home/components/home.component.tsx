import React from 'react';
import { NavBar } from './nav-bar.component';
import { Container } from '@material-ui/core';

export type HomeProps = {
    userName: string;
};

export const Home: React.FC<HomeProps> = ({ userName }) => (
    <div>
        <NavBar userName={userName} />
        <Container maxWidth="sm">Home</Container>
    </div>
);
