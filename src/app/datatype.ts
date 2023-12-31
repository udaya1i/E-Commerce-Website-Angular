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
    productCategory:string;
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
    productCategory:string;
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
export interface myorderdata{
   
    totalPrice:number;
    userId:number;
    address:string;
    name:string;
    contact:number;
    id:number | undefined;
    productId:number;
    
}