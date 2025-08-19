import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header"
import Footer from '../components/Footer';

export default function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet /> {/* Only this changes per route */}
            </main>
            <Footer />
        </>
    );
}