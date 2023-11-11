import { Box, Grid } from '@mui/material';
import IgorAvatar from '../../assets/images/_630c65ef-ce37-4bb5-8c5c-eb7057ca2759-PhotoRoom.png-PhotoRoom.png';
import { ChallengeList } from '../../shared/components';


function Home() {

  return (
    <Grid container>
      <Grid
        container
        justifyContent={'center'}
        item
        marginTop={8}
        xs={12}>
        <Box
          height={250}>
          <img
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src={IgorAvatar} alt="Igor Avatar" />
        </Box>
      </Grid>
      <Grid
        item
        marginTop={4}
        container
        xs={12}
        display={'flex'}
        gap={4}
        justifyContent={'center'}>
          <ChallengeList
            title={'Desafio 1'}
            challenges={[
             'Gerador de números aleatórios',
            ]}
            pageLink={'/desafio1'}
          />
          <ChallengeList
            title={'Desafio 2'}
            challenges={[
              'Tabela de produtos',
              'Tabela de clientes',
            ]}
            pageLink={'/desafio2'}
          />
      </Grid>
    </Grid>
  )
}

export { Home }
