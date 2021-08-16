import React from 'react';

function AdminSubmitButtonBar(props) {
  const { handleCreate, handleDelete, handleUpdate } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button
        style={{
          width: 100,
          height: 30,
          marginBottom: 10
        }}
        type="submit"
        onClick={handleUpdate}
      >
        save
      </button>
      <button
        style={{
          width: 100,
          height: 30,
          marginBottom: 10,
          color: 'white',
          backgroundColor: 'green'
        }}
        onClick={handleCreate}
        type="button"
      >
        new
      </button>
      <button
        style={{
          width: 100,
          height: 30,
          marginBottom: 10,
          color: 'white',
          backgroundColor: 'red'
        }}
        onClick={handleDelete}
        type="button"
      >
        delete
      </button>
    </div>
  );
}

export default AdminSubmitButtonBar;
