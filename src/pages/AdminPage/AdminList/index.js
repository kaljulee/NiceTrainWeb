import React from 'react';
import ReactList from 'react-list';

function AdminList(props) {
  const { title, data, fields, onDatumClick } = props;
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
                  onClick={() => onDatumClick(data[index].id)}
                  onKeyDown={() => onDatumClick(data[index].id)}
                  role="button"
                  tabIndex={0}
                  style={{
                    width: '100%',
                    backgroundColor: 'ghostwhite',
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

export default AdminList;
