import React, { useState } from 'react';
import ReactList from 'react-list';

function AdminList(props) {
  const { title, data, fields, onDatumClick } = props;
  const [activeDatumID, setActiveDatumID] = useState();

  function handleDatumClick(id) {
    setActiveDatumID(id);
    onDatumClick(id);
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <h2 style={{ color: 'goldenrod' }}>{`${title}s`}</h2>
      <div style={{ maxHeight: '60vh', overflow: 'auto' }}>
        <ReactList
          type="uniform"
          length={data.length}
          itemRenderer={(index, key) => (
            <div
              style={{
                display: 'flex',
                backgroundColor: 'grey',
                height: '5vh',
                borderTop: '1px solid black',
                borderBottom: '1px slolid black',
                margin: 'auto'
              }}
              key={key}
            >
              {fields.map((field) => (
                <div
                  key={`${index}${field}`}
                  onClick={() => handleDatumClick(data[index].id)}
                  onKeyDown={() => handleDatumClick(data[index].id)}
                  role="button"
                  tabIndex={0}
                  style={{
                    width: '100%',
                    backgroundColor:
                      activeDatumID === data[index].id
                        ? '#fad255'
                        : 'ghostwhite',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {data[index][field]}
                </div>
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
}

AdminList.defaultProps = {
  data: []
};

export default AdminList;
