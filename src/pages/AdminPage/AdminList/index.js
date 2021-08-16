import React from 'react';
import ReactList from 'react-list';

function AdminList(props) {
  const { title, data, fields } = props;
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
                justifyContent: 'space-around',
                backgroundColor: 'ghostwhite',
                paddingTop: '1vh',
                paddingBottom: '1vh'
              }}
              key={key}
            >
              {fields.map((field) => (
                <div key={`${index}${field}`}>{data[index][field]}</div>
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default AdminList;
