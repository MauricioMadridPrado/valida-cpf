export default function cleamElementsNaN(cpfSemPadrao){
    return cpfSemPadrao.map(cpf => cpf.replace(/[\D]/g, ''))
}   