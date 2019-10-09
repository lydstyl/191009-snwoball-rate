import React from 'react';

const PreferenceInput = ({ name, value, onChange }) => {
  return (
    <div className='preference'>
      <label>{name}</label>
      <input
        type='number'
        name={name}
        value={value}
        onChange={e => onChange(e)}
      />
    </div>
  );
};

export default PreferenceInput;
