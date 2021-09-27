import If, { Else } from "./if";

export default function UsuarioInfo(props) {
  const usuario = props.usuario || '';
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja Bem Vindo <strong>{props.usuario.nome}</strong>!
        <Else>
          Seja Bem Vindo <strong>Amigão</strong>!
        </Else>
      </If>
    </div>
  );
}
