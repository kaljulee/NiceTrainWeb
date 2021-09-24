import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import DetailsSection from '../DetailsSection';
import {
  InfoColumn,
  NoInfoPlaceholder,
  PamphletSubLabel
} from '../../../trainPamphlet';
import { videoIDRegex } from '../../../../../utils';

function YTRLinks(props) {
  const { activity, youTubeResources } = props;
  return (
    <DetailsSection title="Resources">
      {activity && youTubeResources[0] ? (
        <InfoColumn>
          <PamphletSubLabel>YouTube Links</PamphletSubLabel>
          <a href={youTubeResources[0].link}>
            {`${youTubeResources[0].description} by ${youTubeResources[0].author}
            `}
          </a>
          <YouTube videoId={youTubeResources[0].videoID} />
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
