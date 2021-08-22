import React from 'react';
import { jsx, useTheme } from '@emotion/react';
import { NTColumn } from '../../../components/layoutComponents';
import { NTLabel, NTInput } from '../../../components/styledComponents';

function AdminInput(props) {
  const { label, value, onChange } = props;
  const theme = useTheme();
  return (
    <NTColumn>
      <NTLabel>{label}</NTLabel>
      <NTInput
        type="text"
        value={value || value === 0 ? value : ''}
        onChange={onChange}
      />
    </NTColumn>
  );
}

AdminInput.defaultProps = {
  value: ''
};

export default AdminInput;
