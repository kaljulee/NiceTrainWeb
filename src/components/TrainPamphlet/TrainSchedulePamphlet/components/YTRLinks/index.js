import React from 'react';
import { connect } from 'react-redux';
import DetailsSection from '../DetailsSection';
import {
  InfoColumn,
  NoInfoPlaceholder,
  PamphletSubLabel
} from '../../../trainPamphlet';

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
  return {
    youTubeResources: [
      youTubeResources.find((y) => y.id === baseActivity.youTubeResourceID)
    ]
  };
};

export default connect(mapDispatchToProps)(YTRLinks);
