import { Button, useTheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import { appUseThemeContext } from '../contexts';

function ToggleThemeButton() {
    const theme = useTheme();
    const { toggleTheme } = appUseThemeContext();

    return (
        <Button
            sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                zIndex: 999,
                padding: 2,
                minWidth: 50,
                minHeight: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                boxShadow: 4,
                display: 'flex',
            }}
            variant="outlined"
            color="primary"
            onClick={toggleTheme}
        >
            {theme.palette.mode === 'dark' ? <Brightness5OutlinedIcon /> : <DarkModeOutlinedIcon />}
        </Button>
    );
}

export { ToggleThemeButton };