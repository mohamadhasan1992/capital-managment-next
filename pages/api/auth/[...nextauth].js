import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";


export default NextAuth({
    session:{
        jwt:true
    },
    providers:[
        Providers.Credentials({
            async authorize(credentials){
                const user = await axios.post("http://127.0.0.2:8000/api/v1/user/login",
                {email:credentials.email,password:credentials.password});
                if(user.status === "success"){
                    return user;
                }else{
                    throw new Error("cant find such a user")
                }
            }
        })
    ]
});