import React from 'react';
import { connect } from 'react-redux';
import DetailsSection from '../DetailsSection';
import { NTColumn } from '../../../../../../components/layoutComponents';

function YTRLinks(props) {
  return (
    <DetailsSection title="Resources">
      <NTColumn>something here</NTColumn>
    </DetailsSection>
  );
}

const mapDispatchToProps = (state, props) => {
  const {
    train: { youTubeResources }
  } = state;
  return {};
};

export default connect(mapDispatchToProps)(YTRLinks);
