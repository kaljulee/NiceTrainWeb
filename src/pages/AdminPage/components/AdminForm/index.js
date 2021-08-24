// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import toast, { Toaster } from 'react-hot-toast';
// import {
//   callCreateStation,
//   callDeleteStation,
//   callUpdateStation
// } from '../../../../redux/thunks/station';
// import { stationValidator } from '../../../../redux/validators';
// import AdminInput from '../AdminInput';
// import AdminSubmitButtonBar from '../AdminSubmitButtonBar';
//
// function AdminForm(props) {
//   const { title, currentDatum, controlProps } = props;
//   const dispatch = useDispatch();
//
//   const fields = controlProps.fields.map((f) => {
//     const {label, inputType } = f;
//     return {data: currentDatum[label], in}
// })
//
//   // useEffect(() => {
//   //   setNameValue(currentDatum.name);
//   //   setAbbrevValue(currentDatum.abbrev);
//   // }, [title, currentDatum]);
//
//   // function handleNameChange(event) {
//   //   setNameValue(event.target.value);
//   // }
//   //
//   // function handleAbbrevChange(event) {
//   //   setAbbrevValue(event.target.value);
//   // }
//   //
//   // function handleUpdate() {
//   //   const updatedStation = {
//   //     name: nameValue,
//   //     abbrev: abbrevValue,
//   //     id: currentDatum.id
//   //   };
//   //   const stationValidation = stationValidator(updatedStation);
//   //   if (!stationValidation.isOk) {
//   //     toast.error(stationValidation.error);
//   //     return;
//   //   }
//   //   dispatch(callUpdateStation(updatedStation));
//   // }
//   //
//   // function handleCreate() {
//   //   const newStation = { name: nameValue, abbrev: abbrevValue };
//   //   const stationValidation = stationValidator(newStation);
//   //   if (!stationValidation.isOk) {
//   //     toast.error(stationValidation.error);
//   //     return;
//   //   }
//   //   dispatch(callCreateStation(newStation));
//   // }
//   //
//   // function handleDelete() {
//   //   dispatch(callDeleteStation({ id: currentDatum.id }));
//   // }
//   return <div />;
// }
//
// AdminForm.defaultProps = {
//   currentDatum: { name: '', abbrev: '' }
// };
//
// export default AdminForm;
