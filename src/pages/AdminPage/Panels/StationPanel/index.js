import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminList from '../../AdminList';
import StationForm from './StationForm';
import {
  Box,
  Column,
  Row,
  Section
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
    <Box>
      <Row>
        <Column
          style={{
            flex: 4
          }}
        >
          <Section>
            <AdminList
              title={title}
              data={listData}
              fields={listFields}
              onDatumClick={onDatumClick}
            />
          </Section>
        </Column>
        <Column
          style={{
            flex: 5
          }}
        >
          <Section>
            <StationForm title={title} currentDatum={currentDatum} />
          </Section>
        </Column>
      </Row>
    </Box>
  );
}

export default StationPanel;
