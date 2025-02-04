import { Key } from "readline";

export interface product {
    name: string;
    id: Key | null | undefined;
    _id: string ;
    product: string ;
    _type :"product" ;
    image? : {
      
     asset: {
       _ref :  string;
       _type : "image";
       _src: string;
     }
    };
    price : number ;
    description?: string ;
    slug : {
     _type : "slug";
     current : string;
    }
 }
 