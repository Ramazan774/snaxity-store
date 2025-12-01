import { Theme } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/themes`;

const getThemes = async (): Promise<Theme[]> => {
    const res = await fetch(URL);

    return res.json();
}

export default getThemes;