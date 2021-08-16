import React from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import AdminList from '../AdminList';
import AdminForm from '../AdminForm';

function AdminPanel(props) {
  const { title, listData, listFields } = props;
  return (
    <div style={{ height: '100%' }}>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flex: 4,
            flexDirection: 'column',
            marginRight: '2vw',
            marginLeft: '2vw'
          }}
        >
          <AdminList title={title} data={listData} fields={listFields} />
        </div>
        <div
          style={{
            flex: 5,
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '2vw',
            marginRight: '2vw'
          }}
        >
          <AdminForm title={title} />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
