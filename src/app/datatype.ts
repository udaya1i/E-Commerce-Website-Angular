export interface SellerSignUp{
    name:string;
    email:string;
    password:string;
}
export interface SellerLogin{
    username:string;
    password:string;
}

export interface prodcutAdd{
    productCatagory:string;
    productName:string;
    productPrice:string;
    productColor: string;
    description:string;
    imageUrl:string;

    
}