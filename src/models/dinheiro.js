// Evita erros de ponto flutuante (ex.: 14.399999). Sempre 2 casas decimais.
export const arredondar = (valor) => Math.round((Number(valor) + Number.EPSILON) * 100) / 100;

// Formata no padrão brasileiro: R$ 1.234,50
export const formatarReal = (valor) =>
  Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
