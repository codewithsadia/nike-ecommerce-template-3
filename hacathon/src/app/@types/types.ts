export interface ProductListTypes {
    _id: string;
    numericId: number;
    name: string;
    brandName: string;
    category: string;
    color: string;
    colors: string[];
    currentPrice: number;
    description: string;
    discountedPrice: number;
    image_url: string;
    inventory: number;
    rating: number;
    returnPolicy: string;
    shortDescription: string;
    sku: string;
    status: string;
    tags: string[];
  }
  
  export interface ProductCardTypes {
    _id:string;
    status: string;
    currentPrice: number,
    discountedPrice: number,
    shortDescription: string,
    name: string;
    color: string;
    category? : string;
    image_url: string;
  };
  
  export interface ButtonProps {
    text: string;
    classNames: string;
    clickFun?: () => void;
    link?: string;
  }
  
  export interface StarRatingProps {
    rating: number;
  }
  
  export interface cartSidebarProps {
    onClickFun: (value: boolean) => void;
    value: boolean;
  }
  
  // Cart context type, used for managing cart state, adding/removing items, and counting items
  export type CartContextType = {
    cart: ProductCardTypes[]; // Array of products in the cart
    addToCart: (item: ProductCardTypes) => void; // Function to add a product to the cart
    removeFromCart?: (item: string) => void; 
    toggleAddToCartSidebar: (isOpen: boolean) => void;
    sidebarOpen: boolean;
    cartCount: number;
  }