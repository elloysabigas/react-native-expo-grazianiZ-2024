export function formatCurrentBRL (value) {
    return value.toLocaleString('pt-BR' , {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}