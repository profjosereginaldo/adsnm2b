import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "./Formulario";

function Novo() {
  const [erro, setErro] = useState();
  const navigate = useNavigate();
  const onSalvar = (data) => {
    navigate("/");
  };
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <h2>Novo Contato</h2>
        {erro && <p>{erro}</p>}
        <Formulario trataEnviar={onSalvar} />
      </Conteudo>
    </>
  );
}

export default Novo;
