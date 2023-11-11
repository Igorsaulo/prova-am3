import { Box } from "@mui/material";
import { ChallengeTwoTab } from "../../shared/components";

function ChallengeTwo() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                width={1000}
                height={500}
            >
                <ChallengeTwoTab />
            </Box>
        </Box>
    );
};

export { ChallengeTwo };