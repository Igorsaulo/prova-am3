import { useQuery, useQueryClient } from 'react-query';
import { useRandomStore } from '../../shared/store/challengeOne/useRandomStore';
import { getRandom } from './getRandom';

export const useRandom = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<number>('random', getRandom, {
    onSuccess: (data) => {
      useRandomStore.setState({ random: data });
    },
    onError: (error) => {
      console.error('Erro ao buscar os dados:', error);
    },
  });
  const refetch = () => {
    queryClient.invalidateQueries('random');
  };

  return { data, isLoading, refetch };
};
