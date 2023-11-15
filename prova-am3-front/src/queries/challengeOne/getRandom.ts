import { http } from "../../lib/htpp";

export const getRandom = async () => {
    const { data } = await http.get('/Parte1');
    return data;
}
