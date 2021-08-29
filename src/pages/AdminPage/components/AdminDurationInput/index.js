// import React from 'react';
// import { css, jsx } from '@emotion/react';
// import { NTBox, NTRow } from '../../../../components/layoutComponents';
// import AdminInput from '../AdminInput';
//
// function DurationInput(props) {
//   return (
//     <NTBox
//       style={{
//         paddingLeft: '2vw',
//         paddingRight: '2vw',
//         width: 'min-content'
//       }}
//     >
//       <AdminInput
//         {...props}
//         style={{ width: '8vw', justifyContent: 'flex-start' }}
//       />
//     </NTBox>
//   );
// }
//
// function AdminDurationInput(props) {
//   const {
//     duration: { h, m, s },
//     onChange
//   } = props;
//   return (
//     <NTRow style={{ justifyContent: 'space-around' }}>
//       <DurationInput
//         label="hour"
//         value={h}
//         onChange={(event) => onChange({ h: event.target.value })}
//       />
//       <DurationInput
//         label="min"
//         value={m}
//         onChange={(event) => onChange({ m: event.target.value })}
//       />
//       <DurationInput
//         label="sec"
//         value={s}
//         onChange={(event) => onChange({ s: event.target.value })}
//       />
//     </NTRow>
//   );
// }
//
// AdminDurationInput.defaultProps = { duration: { h: 0, m: 0, s: 0 } };
//
// export default AdminDurationInput;
