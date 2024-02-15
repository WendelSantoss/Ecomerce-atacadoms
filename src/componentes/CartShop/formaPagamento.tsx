import { useState } from 'react';
import style from './pagamento.module.css'
import PagamentoCartaoCredito from './PagamentoCartaoCredito';

export default function FormaPagamento(props: any) {

  const [opcaoPagamento, setOpcaoPagamento] = useState('PIX');
  
  const mudaFormaPagamento = (event: any) => {
    setOpcaoPagamento(event.target.value)};
    //estado para selecionar forma de pagamento 

  return (
    <>
        <select name="select" value={opcaoPagamento} onChange={(e)=>mudaFormaPagamento(e)}>
            <option value="PIX">PIX</option>
            <option value="CREDITO">CREDITO</option>
            <option value="BOLETO">BOLETO</option>
        </select>

        {(opcaoPagamento === 'PIX' &&
            <div className={style.central}>
                <div className={style.qrCode}> QR CODE</div>
                <p>OBS: Pagamentos via pix podem demorar até 1 dia útil para ser confirmado.</p>
            </div>
        )}

        {(opcaoPagamento === 'BOLETO' &&
            <div className={style.central}>
                <a href='#' type='blank'><p>Clique aqui para abrir boleto.</p></a>
                <p>OBS: para pagamentos do tipo boleto bancario, é necessário agurdar o prazo 
                    de no máximo 3 dias úteis para confirmação do pagamento.
                </p>
            </div>
        )}

        {(opcaoPagamento === 'CREDITO' && 
            <PagamentoCartaoCredito valorTotal={props.valorTotal}/>
        )}
      
    </>
  );
};
//styles sendo importado do module css do componente pai.