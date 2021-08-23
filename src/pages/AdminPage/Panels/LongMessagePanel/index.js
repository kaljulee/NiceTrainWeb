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
import { SETTING_TYPE } from '../../../../constants';
import {
  callCreateSetting,
  callSetLongMessage
} from '../../../../redux/thunks/settings';

function LongMessagePanel() {
  const title = 'Long Message';
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.train.longMessages);
  const listFields = ['text'];

  const activeMessageID = useSelector(
    (state) => state.settings[SETTING_TYPE.ACTIVE_LONG_MESSAGE]
  );
  const [activeMessageOption, setActiveMessageOption] = useState(
    getCurrentOption(listData, activeMessageID, 'text')
  );

  const [currentDatum, setCurrentDatum] = useState();

  useEffect(() => {
    if (!listData) {
      dispatch(callListLongMessages());
    }
  }, []);

  // useEffect(() => {
  //   // setActiveMessage(getCurrentOption(listData, currentDatum.id, 'text'));
  // }, [currentDatum]);

  useEffect(() => {
    const currentOption = getCurrentOption(listData, activeMessageID, 'text');
    setActiveMessageOption(currentOption);
  }, [listData, activeMessageID]);

  function onActiveMessageChange(option) {
    if (activeMessageID) {
      dispatch(callSetLongMessage({ value: option.value }));
    } else {
      dispatch(
        callCreateSetting({
          settingType: SETTING_TYPE.ACTIVE_LONG_MESSAGE,
          value: option.value
        })
      );
    }
    setActiveMessageOption(option);
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
            value={activeMessageOption}
            onChange={onActiveMessageChange}
          />
        </NTRow>
      </NTColumn>
    </NTBox>
  );
}

export default LongMessagePanel;
