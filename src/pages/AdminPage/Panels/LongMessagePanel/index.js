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

function LongMessagePanel() {
  const title = 'Long Message';
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.longMessages);
  console.log('long messages');
  console.log(listData);
  const listFields = ['text'];
  const [currentDatum, setCurrentDatum] = useState();

  useEffect(() => {
    if (!listData) {
      dispatch(callListLongMessages());
    }
  }, []);

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
          <LongMessageForm title={title} />
        </NTRow>
        <NTRow>
          <AdminSelect />
        </NTRow>
      </NTColumn>
    </NTBox>
  );
}

export default LongMessagePanel;
