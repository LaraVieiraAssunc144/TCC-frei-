
import axios from "axios";
const api =axios.create({
    baseURL:'http://localhost:5000'
})


export async function cadastrarCliente(nome,cpf,nascimento,horario,data,telefone,situacao){
    const resposta =await api.post('/cliente',{
        nome:nome,
        cpf:cpf,
        nascimento:nascimento,
        horario:horario,
        data:data,
        telefone:telefone,
        situacao:situacao
    })
    return resposta.data;
}