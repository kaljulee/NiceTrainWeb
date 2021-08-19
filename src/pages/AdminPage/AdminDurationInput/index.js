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
    setMinute,
    setSecond,
    setHour
  } = props;
  return (
    <Row>
      <DurationInput label="hour" value={h} onChange={setHour} />
      <DurationInput label="min" value={m} onChange={setMinute} />
      <DurationInput label="sec" value={s} onChange={setSecond} />
    </Row>
  );
}

AdminDurationInput.defaultProps = { duration: { h: 0, m: 0, s: 0 } };

export default AdminDurationInput;
