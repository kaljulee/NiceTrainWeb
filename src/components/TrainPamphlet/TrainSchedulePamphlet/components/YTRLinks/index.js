import React from 'react';
import { connect } from 'react-redux';
import { SizeMe } from 'react-sizeme';
import DetailsSection from '../DetailsSection';
import { InfoColumn, NoInfoPlaceholder } from '../../../trainPamphlet';
import { videoIDRegex } from '../../../../../utils';
import VideoPlayer from '../../../../VideoPlayer';

function YTRLinks(props) {
  const { activity, youTubeResources } = props;
  return (
    <DetailsSection>
      {activity && youTubeResources[0] ? (
        <SizeMe monitorHeight monitorWidth>
          {({ size }) => (
            <InfoColumn>
              <VideoPlayer size={size} url={youTubeResources[0].link} />
            </InfoColumn>
          )}
        </SizeMe>
      ) : (
        <NoInfoPlaceholder>No Resource Links Available</NoInfoPlaceholder>
      )}
    </DetailsSection>
  );
}

const mapDispatchToProps = (state, props) => {
  const {
    train: { youTubeResources, activities },
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
    youTubeResources: [{ ...ytr, videoID: videoIDRegex(ytr.link) }],
  };
};

export default connect(mapDispatchToProps)(YTRLinks);
