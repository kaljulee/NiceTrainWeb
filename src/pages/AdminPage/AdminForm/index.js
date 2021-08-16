import React, { useState } from 'react';

function AdminForm(props) {
  const { title, currentDatum } = props;

  const [nameValue, setNameValue] = useState(currentDatum.name);
  const [abbrevValue, setAbbrevValue] = useState(currentDatum.abbrev);

  function handleNameChange(event) {
    setNameValue(event.target.value);
  }

  function handleAbbrevChange(event) {
    setAbbrevValue(event.target.value);
  }

  function handleSubmit(arg1, arg2, arg3) {
    console.log('would handle submit with args of');
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    console.log('...l');
  }
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <h2 style={{ color: 'goldenrod' }}>{`Edit ${title}`}</h2>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <span style={{ color: 'goldenrod' }}>name</span>
        <input
          type="text"
          style={{ height: 30, marginBottom: 10 }}
          value={nameValue}
          onChange={handleNameChange}
        />
        <span style={{ color: 'goldenrod' }}>abbrev</span>
        <input
          type="text"
          style={{ height: 30, marginBottom: 10 }}
          value={abbrevValue}
          onChange={handleAbbrevChange}
        />
        <button
          style={{
            width: 150,
            height: 30,
            alignSelf: 'flex-end',
            marginBottom: 10
          }}
          type="submit"
          onClick={handleSubmit}
        >
          save
        </button>
      </div>
    </div>
  );
}

AdminForm.defaultProps = {
  name: '',
  abbrev: ''
};

export default AdminForm;
