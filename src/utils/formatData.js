export function formatDateToBrazilian(data) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(data).toLocaleDateString('pt-BR', options);
}