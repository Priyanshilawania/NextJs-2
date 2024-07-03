
import { NextResponse } from "next/server";
export async function GET(req){
    // console.log(req); //to see full detail
    const requestHeaders=new Header(req.headers)
    // console.log(requestHeaders); //to set header
   
    // this will be despalyed
    // test on postman

// URL Query Params
const{searchParams}=new URL (req.url)
console.log(searchParams);

return NextResponse.json({"msg":"hello next js api"}) 




}