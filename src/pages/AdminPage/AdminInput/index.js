import React from 'react';

function AdminInput(props) {
  const { label, value, onChange } = props;
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <span style={{ color: 'goldenrod' }}>{label}</span>
      <input
        type="text"
        style={{ height: 30, marginBottom: 10 }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AdminInput;
