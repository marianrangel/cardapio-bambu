import React from 'react';

export function ExtraInfo() {
  return (
    <div>
      <h3>Mais Informações</h3>
      <p>
        Este é um conteúdo extra carregado sob demanda usando code splitting com
        React.lazy().
      </p>
    </div>
  );
}

// Export padrão! Isso é crucial para o React.lazy funcionar corretamente.
export default ExtraInfo;