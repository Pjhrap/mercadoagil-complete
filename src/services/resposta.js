// Formato único de resposta do serviço. O menu só lê e mostra.
export const ok = (dados) => ({ ok: true, dados });

export const erro = (...erros) => ({ ok: false, erros: erros.flat() });
