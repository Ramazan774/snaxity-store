import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string
    themeId?: string
    sizeId?: string
    isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
    try {
        const url = qs.stringifyUrl({
            url: URL,
            query: {
                themeId: query.themeId,
                sizeId: query.sizeId,
                categoryId: query.categoryId,
                isFeatured: query.isFeatured
            }
        })

        const res = await fetch(url);

        if (!res.ok) {
            return [];
        }

        return res.json();
    } catch (error) {
        return [];
    }
}

export default getProducts;