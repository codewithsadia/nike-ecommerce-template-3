export interface product {
    id: Key | null | undefined;
    _id: string ;
    product: string ;
    _type :"product" ;
    image? : {
     asset: {
       _ref :  string;
       _type : "image";
     }
    };
    price : number ;
    description?: string ;
    slug : {
     _type : "slug";
     current : string;
    }
 }
 