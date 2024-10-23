import React from 'react';

export const PokemonCard = ({ id, nome, altura, peso, tipo, imagem }) => {
  return (
    <div class='pokemon-card'>
      <h2>
        {nome} (ID: {id})
      </h2>
      <img src={imagem} alt={nome} style={{ width: '100%', borderRadius: '12px 12px 0 0' }} />
      <p>
        <strong>Altura:</strong> {altura} m
      </p>
      <p>
        <strong>Peso:</strong> {peso} kg
      </p>
      <p>
        <strong>Tipo:</strong> {tipo}
      </p>
    </div>
  );
};

// export default PokemonCard;
