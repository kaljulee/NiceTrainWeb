import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NTTitle } from '../../../../components/styledComponents';
import {
  NTBox,
  NTColumn,
  NTRow,
  NTSection
} from '../../../../components/layoutComponents';
import AdminList from '../../AdminList';
import LongMessageForm from './LongMessageForm';
import AdminSelect from '../../AdminSelect';
import { callListLongMessages } from '../../../../redux/thunks/longMessage';
import { createOption, getCurrentOption } from '../../../../utils';

function LongMessagePanel() {
  const title = 'Long Message';
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.train.longMessages);
  console.log('long messages');
  console.log(listData);
  const listFields = ['text'];
  const [currentDatum, setCurrentDatum] = useState();
  const [activeMessage, setActiveMessage] = useState();

  useEffect(() => {
    if (!listData) {
      dispatch(callListLongMessages());
    }
  }, []);

  useEffect(() => {
    // setActiveMessage(getCurrentOption(listData, currentDatum.id, 'text'));
  }, [currentDatum]);

  function onActiveMessageChange(value) {
    setActiveMessage(value);
  }

  function onDatumClick(id) {
    setCurrentDatum(listData.find((datum) => datum.id === id));
  }
  return (
    <NTBox>
      <NTColumn>
        <NTTitle>{title}</NTTitle>
        <NTRow>
          <NTSection>
            <AdminList
              title={title}
              data={listData}
              fields={listFields}
              onDatumClick={onDatumClick}
            />
          </NTSection>
          <LongMessageForm title={title} currentDatum={currentDatum} />
        </NTRow>
        <NTRow>
          <AdminSelect
            label="Select Active Message"
            options={
              listData ? listData.map((m) => createOption(m, 'text')) : []
            }
            value={activeMessage}
            onChange={onActiveMessageChange}
          />
        </NTRow>
      </NTColumn>
    </NTBox>
  );
}

export default LongMessagePanel;
