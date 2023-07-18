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
    productImage:string;
    productName:string;
    productPrice:string;
    productColor: string;
    description:string;
    id:number;
    Qty:undefined|number;

}
export interface UserSignup{
    username:string;
    userEmail:string;
    userPassword:string;
}
export interface UserLogin{
    userEmail:string;
    userPassword:string;
}
export interface cardData{
    productCatagory:string;
    productImage:string;
    productName:string;
    productPrice:string;
    productColor:string;
    description:string;
    id:undefined|number;
    Qty: undefined|number;
    productId:number;
    userId:number
}
export interface totalprice{
    price:number;
    tax:number;
    delivery:number;
    discount:number;
    total:number;

}