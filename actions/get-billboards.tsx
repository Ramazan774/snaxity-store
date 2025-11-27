import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
    try {
        const res = await fetch(URL);

        if (!res.ok) {
            return [];
        }

        return res.json();
    } catch (error) {
        return [];
    }
}

export default getBillboards;
