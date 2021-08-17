import React from 'react';
import Select from 'react-select';
import { createOption } from '../../../utils';

function AdminSelect(props) {
  const { options, currentOption, label, onChange } = props;
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <span style={{ color: 'goldenrod' }}>{label}</span>
      <Select options={options} value={currentOption} onChange={onChange} />
    </div>
  );
}

export default AdminSelect;
