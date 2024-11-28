export function formatCurrentBRL (value) {
    return value.tolocaleString('pt-BR' , {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}