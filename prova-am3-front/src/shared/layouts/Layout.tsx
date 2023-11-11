import { FC } from 'react';
import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <>
            {!isHome && <Navbar />}
            {children}
        </>
    );
}

export { Layout };