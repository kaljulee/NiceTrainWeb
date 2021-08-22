import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminList from '../../AdminList';
import StationForm from './StationForm';
import {
  NTBox,
  NTColumn,
  NTRow,
  NTSection
} from '../../../../components/layoutComponents';

function StationPanel() {
  const title = 'Station';
  const listData = useSelector((state) => state.stations);
  const listFields = ['name', 'abbrev'];
  const [currentDatum, setCurrentDatum] = useState();
  function onDatumClick(id) {
    setCurrentDatum(listData.find((datum) => datum.id === id));
  }
  return (
    <NTBox>
      <NTRow>
        <NTColumn
          style={{
            flex: 4
          }}
        >
          <NTSection>
            <AdminList
              title={title}
              data={listData}
              fields={listFields}
              onDatumClick={onDatumClick}
            />
          </NTSection>
        </NTColumn>
        <NTColumn
          style={{
            flex: 5
          }}
        >
          <NTSection>
            <StationForm title={title} currentDatum={currentDatum} />
          </NTSection>
        </NTColumn>
      </NTRow>
    </NTBox>
  );
}

export default StationPanel;
