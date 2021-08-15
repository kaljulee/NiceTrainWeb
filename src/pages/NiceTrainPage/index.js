import React from 'react';

function NiceTrainPage(props) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        paddingTop: '5vh'
      }}
    >
      {props.children}
    </div>
  );
}

export default NiceTrainPage;
