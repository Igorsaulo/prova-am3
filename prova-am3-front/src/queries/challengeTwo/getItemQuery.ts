import { useQuery } from 'react-query';
import { ProductItem, useCustomerStore } from '../../shared/store';
import { CustomerItem } from '../../shared/store';
import { getItems } from './getItems';

export const getItemsQuery = (querys: string) => {
  const { setItem } = useCustomerStore();
  const { data, isLoading } = useQuery<
    CustomerItem
    | ProductItem,
    Error,
    CustomerItem
    | ProductItem
  >
    ('customers', () => getItems(querys), {
      onSuccess: (data) => {
        setItem(data);
      },
      onError: (error) => {
        console.error('Erro ao buscar os dados:', error);
      },
    });


  const refetch = async (querys: string) => {
    try {
      const newData = await getItems(querys);
      setItem(newData);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };


  return { data, isLoading, refetch };
};
