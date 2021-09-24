import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import DetailsSection from '../DetailsSection';
import { InfoColumn, NoInfoPlaceholder } from '../../../trainPamphlet';
import { videoIDRegex } from '../../../../../utils';
import VideoPlayer from '../../../../VideoPlayer';
import { mq5 } from '../../../../../styles/breakpoints';

const columnPadding = [0, '1vw', '2vw', '2.5vw', '5vw'];

const YTRColumn = styled(InfoColumn)`
  ${mq5({ paddingLeft: columnPadding, paddingRight: columnPadding })}
`;

function YTRLinks(props) {
  const { activity, youTubeResources } = props;
  return (
    <DetailsSection title="Resources">
      {activity && youTubeResources[0] ? (
        <InfoColumn>
          <VideoPlayer url={youTubeResources[0].link} />
        </InfoColumn>
      ) : (
        <NoInfoPlaceholder>No Resource Links Available</NoInfoPlaceholder>
      )}
    </DetailsSection>
  );
}

const mapDispatchToProps = (state, props) => {
  const {
    train: { youTubeResources, activities }
  } = state;
  const { activity } = props;
  if (!activity) {
    return {};
  }
  if (!activity.activityID) {
    return { youTubeResources: [] };
  }
  const baseActivity = activities.find((a) => a.id === activity.activityID);
  if (!baseActivity || !baseActivity.youTubeResourceID) {
    return { youTubeResources: [] };
  }
  const ytr = youTubeResources.find(
    (y) => y.id === baseActivity.youTubeResourceID
  );
  return {
    youTubeResources: [{ ...ytr, videoID: videoIDRegex(ytr.link) }]
  };
};

export default connect(mapDispatchToProps)(YTRLinks);
