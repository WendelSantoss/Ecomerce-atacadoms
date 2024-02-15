
interface modelFormCadastro{
    setEmail: (e:string)=> void,
    setSenha:(e:string)=> void,
    setReSenha:(e:string)=> void,
    checkCadastro: ()=> void,
    mudaTipoForm: ()=> void
}

export default function FormCadastro(props: modelFormCadastro){
    const setEmail= props.setEmail
    const setSenha= props.setSenha
    const setReSenha= props.setReSenha
    const checkCadastro= props.checkCadastro
    const mudaTipoForm= props.mudaTipoForm

    return(
        <>
        <h2>Faça seu cadastro</h2>
        <p>Email</p>
        <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Digite seu username" name='Email'></input>
        <p>Crie uma senha</p>
        <input onChange={e => setSenha(e.target.value)} type="password" placeholder="Digite sua senha" name='Senha'></input>
        <p>Confirme sua senha</p>
        <input onChange={e => setReSenha(e.target.value)} type="password" placeholder="Confirme sua senha" name='SenhaConfirmacao'></input>
        <button onClick={checkCadastro}>Criar conta</button>
        <span onClick={mudaTipoForm}> Voltar para Login.</span>
        </>
    )
}//todo stye sendo importado do login.module