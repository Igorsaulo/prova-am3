import { http } from "../../http";
import { CustomerItem, ProductItem, } from "../../shared/store";

export const getItems = async (querys: string): Promise<CustomerItem> => {
    const { data } = await http.get<CustomerItem | ProductItem>('api/' + querys);
    return data;
}