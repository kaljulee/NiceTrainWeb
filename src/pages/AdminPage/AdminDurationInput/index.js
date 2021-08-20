import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { Row } from '../../../components/layoutComponents';
import AdminInput from '../AdminInput';

function DurationInput(props) {
  return (
    <div style={{ width: 80 }}>
      <AdminInput {...props} />
    </div>
  );
}

function AdminDurationInput(props) {
  const {
    duration: { h, m, s },
    onChange
  } = props;
  return (
    <Row>
      <DurationInput
        label="hour"
        value={h}
        onChange={(event) => onChange({ h: event.target.value })}
      />
      <DurationInput
        label="min"
        value={m}
        onChange={(event) => onChange({ m: event.target.value })}
      />
      <DurationInput
        label="sec"
        value={s}
        onChange={(event) => onChange({ s: event.target.value })}
      />
    </Row>
  );
}

AdminDurationInput.defaultProps = { duration: { h: 0, m: 0, s: 0 } };

export default AdminDurationInput;
