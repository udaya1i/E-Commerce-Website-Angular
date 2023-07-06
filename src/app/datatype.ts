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