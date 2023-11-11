import { Grid, Typography, Button } from '@mui/material';
import { useRandomStore } from '../../shared/store/challengeOne/useRandomStore';
import { useRandom } from '../../queries/challengeOne';

function ChallengeOne() {
  const { random } = useRandomStore();
  const { isLoading, refetch } = useRandom();

  const handleClick = () => {
    refetch();
  };

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      height={'100vh'}
    >
      <Grid item xs={12} textAlign={'center'}>
        {isLoading && <Typography variant={'h1'}>Carregando...</Typography>}
        {random !== null && (
          <Typography variant={'h1'} fontWeight={'bold'}>
            {random}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12} textAlign={'center'}>
        <Button
          variant={'contained'}
          color={'primary'}
          onClick={handleClick}
        >
          Gerar outro número
        </Button>
      </Grid>
    </Grid>
  );
}

export { ChallengeOne };
