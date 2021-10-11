import './App.css';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto/400.css';

class App extends Component {

  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1">
         Formulário Cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviar} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviar(dados){
  console.log(dados)
}

function validarCPF(cpf) {
  if (cpf.length !== 11){
    return {valido: false, texto:"CPF deve ter 11 dígitos"}
  }else{
    return {valido: true, texto:""}

  }
}
export default App;
