import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  NTColumn,
  NTPanel,
  NTRow,
  NTSection
} from '../../../../components/layoutComponents';
import { callListLongMessages } from '../../../../redux/thunks/longMessage';
import { createOption, getCurrentOption } from '../../../../utils';
import { SETTING_TYPE } from '../../../../constants';
import {
  callCreateSetting,
  callSetLongMessage
} from '../../../../redux/thunks/settings';
import AdminPanel from '../../AdminPanel';
import LongMessageForm from './LongMessageForm';
import AdminSelect from '../../components/AdminSelect';

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

  return (
    <AdminPanel
      title="Board Message"
      listData={listData}
      listFields={listFields}
      enforceDirection="column"
    >
      <LongMessageForm title={title} />
      <AdminSelect
        label="Select Active Message"
        options={listData ? listData.map((m) => createOption(m, 'text')) : []}
        value={activeMessageOption}
        onChange={onActiveMessageChange}
      />
    </AdminPanel>
  );
}

export default LongMessagePanel;
