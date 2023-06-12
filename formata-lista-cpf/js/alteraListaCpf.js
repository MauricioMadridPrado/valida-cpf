import cpfsFormatados from "./cpfsFormatados.js";

export default function alteraListaCpf(cpfs){

    const cpfsOriginais = cpfsFormatados(cpfs);

    [...cpfs].forEach((cpf, index )=>{
        cpf.innerText = cpfsOriginais[index]
    })
}
