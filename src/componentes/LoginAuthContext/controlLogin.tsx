"use client";
import { useState, createContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { authFirebase } from "../Firebase/config";

interface modeloContextAuth {
  user: any;
  login: (email: string, senha: string) => void;
  cadastrar: (email: string, senha: string) => void;
  loginGoogle: () => void;
  logout: () => void;
  erro: string;
  setandoErro: (msg: string) => void;
}

export const UserLoginLogout = createContext<modeloContextAuth>({
  user: null,
  login: (email, senha) => {},
  cadastrar: (email, senha) => {},
  loginGoogle: () => {},
  logout: () => {},
  erro: "",
  setandoErro: (msg) => {},
});

export default function ControlLoginProvider(props: any) {
  const [user, setUser] = useState<any>(null);
  //const para setar dados do usuario.
  const [erro, setErro] = useState("");
  //const para tratamento de erros na hora do login e do cadastro.
  function setandoErro(msg: string) {
    setErro(msg);
  } // função para setar erros.

  async function login(email: string, senha: string) {
    await signInWithEmailAndPassword(authFirebase, email, senha)
      .then(() => {
        setandoErro("");
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          setErro("Email inválido, tente novamente.");
        } else if (
          error.message === "Firebase: Error (auth/invalid-credential)."
        ) {
          setErro("Senha inválida, tente novamente.");
        } else if (
          error.message ===
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
        ) {
          setErro(
            'O acesso desta conta está temporariamente bloqueado, por várias tentativas erradas. Resgate sua senha clicando em "Esqueceu sua senha" ou aguarde alguns momentos'
          );
        }
      }); // tratamento dos erros gerados pelo firebase
  } //função de login com email e senha, o setUser deste login está ocorrendo no useEfect.

  async function cadastrar(email: string, senha: string) {
    await createUserWithEmailAndPassword(authFirebase, email, senha)
      .then((res) => {
        /*será elaborado mensagem de cadastro realizado com sucesso, que sera enviada para aba 
           dos dados cadastrais, solicitando para que usuario salve seus dados */
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          setErro("Email inválido, insira um novo e tente novamente.");
        } else if (
          error.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          setandoErro("Sua senha deve conter no mínimo 6 digitos.");
        }
      });
  } // função para cadastro de usuário e login automático, o setUser deste login está ocorrendo no useEfect.

  async function loginGoogle() {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(authFirebase, provider)
      .then(() => {
        setandoErro("");
      })
      .catch((error) => {
        console.log(error);
      });
  } // função para logar com google automático, o setUser deste login está ocorrendo no useEfect.

  function logout() {
    signOut(authFirebase);
    setandoErro("");
  } // função para logout do usuário.

  useEffect(() => {
    const inscrito = onAuthStateChanged(authFirebase, (currentUser) => {
      setUser(currentUser);
    });
    return () => inscrito();
  }, [
    user,
  ]); /*função para manter o user logado em qualquer refresh da aplicação e 
    para setar o usuário nas funçoes de cadastro, login com google e login normal.*/

  return (
    <UserLoginLogout.Provider
      value={{
        user,
        loginGoogle,
        logout,
        login,
        cadastrar,
        erro,
        setandoErro,
      }}
    >
      {props.children}
    </UserLoginLogout.Provider>
  );
}
//context criado para compartilhar estado logado para diferentes componentes.
