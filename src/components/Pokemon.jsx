import React from 'react';
function Pokemon({ details }) {
  const { name, sprites, types, weight, height } = details;
  return ( 
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <h2>{name.toUpperCase()}</h2>
      <img src={sprites.front_default} alt={name} style={{ width: '150px', height: '150px' }} />
      <p><strong>Type(s):</strong> {types.map((typeInfo) => typeInfo.type.name).join(', ')}</p>
      <p><strong>Weight:</strong> {weight} hg</p>
      <p><strong>Height:</strong> {height} dm</p>
    </div>
  );
}
export default Pokemon;
