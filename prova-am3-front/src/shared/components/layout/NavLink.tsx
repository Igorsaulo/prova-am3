import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <Typography variant={'h6'} color={'primary'} fontWeight={'bold'}>
      {children}
    </Typography>
  </Link>
);

export { NavLink };