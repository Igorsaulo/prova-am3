import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "../components";

function Navbar() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        padding: 2,
        zIndex: 999,
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Box>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Typography variant={'h4'} color={'primary'} fontWeight={'bold'}>
            Igor Challenge
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
        paddingRight={4}
      >
        <NavLink to={'/desafio1'}>Desafio 1</NavLink>
        <NavLink to={'/desafio2'}>Desafio 2</NavLink>
      </Box>
    </Box>
  );
}

export { Navbar };
