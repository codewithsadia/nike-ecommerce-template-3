import { defineQuery } from "next-sanity";


    export const allproducts = defineQuery(`
        *[_type == "product"]{
            _id,
            name,
            description,
            price,
            discountPercentage,
            priceWithoutDiscount,
            rating,
            ratingCount,
            tags,
            sizes,
            "imagUrl": image.asset->url
        }
    `)
    export const fourproducts = defineQuery(`
        *[_type == "product"][0..3]{
            _id,
            name,
            description,
            price,
            discountPercentage,
            priceWithoutDiscount,
            rating,
            ratingCount,
            tags,
            sizes,
            "imagUrl": image.asset->url
        }
    `)
    
    
    