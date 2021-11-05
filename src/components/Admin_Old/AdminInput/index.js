import React from 'react';
import { jsx, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { NTColumn } from '../../layoutComponents';
import { NTLabel, NTInput } from '../../styledComponents';

const NTInputColumn = styled(NTColumn)`
  justify-content: space-around;
  padding: 5px 0 5px 0;
`;

function AdminInput(props) {
  const { label, value, onChange, type = 'text', style, onBlur } = props;
  return (
    <NTInputColumn style={{ ...style }}>
      <NTLabel>{label}</NTLabel>
      <NTInput
        type={type}
        value={value || value === 0 ? value : ''}
        onChange={onChange}
        style={style}
        onBlur={onBlur}
      />
    </NTInputColumn>
  );
}

AdminInput.defaultProps = {
  value: ''
};

export default AdminInput;
