import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ChallengeListProps {
    title: string;
    challenges: string[];
    pageLink: string;
}

const ChallengeList: React.FC<ChallengeListProps> = ({ title, challenges, pageLink }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(pageLink);
    };

    return (
        <Paper
            elevation={2}
            sx={{
                padding: 2,
                minWidth: 300,
                minHeight: 150,
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            <Typography
                variant={'h4'}
                fontWeight={'bold'}
            >
                {title}
            </Typography>
            <List>
                {challenges.map(challenge => (
                    <ListItem key={challenge}>
                        <ListItemText
                            primary={challenge}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export { ChallengeList };