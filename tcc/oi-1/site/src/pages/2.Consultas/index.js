import menu from '../../componentes/menu'
import cabecalho from '../../componentes/cabecalho'
import { useState } from 'react'

import storage from 'local-storage'

import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { cadastrarCliente } from '../../api/clienteApi'

export default function Index(){
    const [nome,setNome] = useState('');
    const [cpf,setCpf] = useState('');
    const [nascimento,setNascimento] = useState('');
    const [horario,setHorario] = useState('');
    const [data,setData] = useState('');
    const [telefone,setTelefone] = useState('');
    const [situacao,setSituacao] = useState(false);

    async function salvarClick(){
        try{
            const usuario= storage('usuario-logado').id;
            const r= await cadastrarCliente(nome,cpf,nascimento,horario,data,telefone,situacao,usuario)

            toast('🔥 Cadastro realizado com sucesso!');
        }catch(err){
            toast(err.response.data.erro);
        }
    }

}