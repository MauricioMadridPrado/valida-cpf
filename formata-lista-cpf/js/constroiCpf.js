export default function constroiCpf(cpfLimpo){
    return cpfLimpo.map(cpf => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'))
}