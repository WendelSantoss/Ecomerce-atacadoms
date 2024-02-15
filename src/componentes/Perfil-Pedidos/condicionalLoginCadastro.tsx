'use client'
import Login from "./loginCadastro/login";
import Logado from "./UserLogado";
import { useContext} from "react"
import ControlPagesProvider from "./controlDeAbasContext";
import { UserLoginLogout } from "../LoginAuthContext/controlLogin";



export default function LoginOuCadastro(){
    const { user } = useContext(UserLoginLogout)
   
    return(
        <>
            {(user)?
                <ControlPagesProvider>
                    <Logado />
                </ControlPagesProvider>
                
                :
                <Login/>
             
            }
        </>
)
}