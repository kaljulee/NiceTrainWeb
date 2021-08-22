import React from 'react';
import { jsx, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { NTColumn } from '../../../components/layoutComponents';
import { NTLabel, NTInput } from '../../../components/styledComponents';

const NTInputColumn = styled(NTColumn)`
  justify-content: space-around;
  padding: 5px 0 5px 0;
`;

function AdminInput(props) {
  const { label, value, onChange, type = 'text' } = props;
  return (
    <NTInputColumn>
      <NTLabel>{label}</NTLabel>
      <NTInput
        type={type}
        value={value || value === 0 ? value : ''}
        onChange={onChange}
      />
    </NTInputColumn>
  );
}

AdminInput.defaultProps = {
  value: ''
};

export default AdminInput;
