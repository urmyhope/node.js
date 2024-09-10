const clientes = require("./cliente.json");

function encontrar(lista, chave,valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "hope");
const encontrado2= encontrar(clientes, "telefone", "976213456");

console.log(encontrado);
