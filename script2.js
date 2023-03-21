// Declaração das variáveis
const prazoEstocagem = 75;
const prazoCobranca = 45;
const prazoPagamento = 38;
const desembolsoTotalAnual = 2800000;
const diasNoAno = 360;

// Cálculo do prazo médio de ciclo operacional
const prazoMedioCicloOperacional = prazoEstocagem + prazoCobranca - prazoPagamento;

// Cálculo do valor diário médio de desembolso
const valorDiarioMedioDesembolso = desembolsoTotalAnual / diasNoAno;

// Cálculo do caixa mínimo operacional
const caixaMinimoOperacional = valorDiarioMedioDesembolso * prazoMedioCicloOperacional;

// Exibição do resultado
console.log(`O caixa mínimo operacional é de $${caixaMinimoOperacional.toFixed(2)}.`);
