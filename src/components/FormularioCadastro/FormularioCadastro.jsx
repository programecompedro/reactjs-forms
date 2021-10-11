import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel, FormGroup } from '@material-ui/core';

function FormularioCadastro({aoEnviar, validarCPF}) {

    // meus hooks
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
        }}>
            <TextField
                value={nome}
                onChange={
                    (e) => {
                        setNome(e.target.value)
                    }}
                variant="outlined" id="nome" label="Nome" margin="normal" fullWidth />
            <TextField
                value={sobrenome}
                onChange={
                    (e) => {
                        setSobrenome(e.target.value)
                    }} variant="outlined" id="sobrenome" label="Sobrenome" margin="normal" fullWidth />
            <TextField
                value={cpf}
                onChange={
                    (e) => {
                        setCpf(e.target.value)
                    }}
                onBlur={(e) => {
                    const ehValido = validarCPF(e.target.value);
                    setErros({cpf: ehValido})
                }}
                variant="outlined" id="cpf" label="CPF" margin="normal" fullWidth error={!erros.cpf.valido} helperText={erros.cpf.texto} />

            <FormGroup>
                <FormControlLabel checked={promocoes} onChange={(e) => {
                    setPromocoes(e.target.checked)
                }} control={<Switch defaultChecked={promocoes} />} label="Promoções" />

            </FormGroup>

            <FormGroup>
                <FormControlLabel checked={novidades} onChange={(e) => {
                    setNovidades(e.target.checked)
                }} control={<Switch defaultChecked={novidades} />} label="Novidades" />
            </FormGroup>



            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

        </form>
    )
}

export default FormularioCadastro;