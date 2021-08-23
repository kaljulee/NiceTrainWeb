/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStation = /* GraphQL */ `
  query GetStation($id: ID!) {
    getStation(id: $id) {
      id
      name
      abbrev
      createdAt
      updatedAt
      scheduledTrains {
        items {
          id
          description
          train_date
          train_time
          stationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listStations = /* GraphQL */ `
  query ListStations(
    $filter: ModelStationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        abbrev
        createdAt
        updatedAt
        scheduledTrains {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getScheduledTrain = /* GraphQL */ `
  query GetScheduledTrain($id: ID!) {
    getScheduledTrain(id: $id) {
      id
      description
      train_date
      train_time
      stationID
      createdAt
      updatedAt
      scheduledActivities {
        items {
          id
          name
          activityID
          scheduledTrainID
          formatID
          order
          color
          duration
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listScheduledTrains = /* GraphQL */ `
  query ListScheduledTrains(
    $filter: ModelScheduledTrainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScheduledTrains(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        train_date
        train_time
        stationID
        createdAt
        updatedAt
        scheduledActivities {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getScheduledActivity = /* GraphQL */ `
  query GetScheduledActivity($id: ID!) {
    getScheduledActivity(id: $id) {
      id
      name
      activityID
      scheduledTrainID
      formatID
      order
      color
      duration
      createdAt
      updatedAt
      scheduledTrain {
        id
        description
        train_date
        train_time
        stationID
        createdAt
        updatedAt
        scheduledActivities {
          nextToken
        }
      }
    }
  }
`;
export const listScheduledActivities = /* GraphQL */ `
  query ListScheduledActivities(
    $filter: ModelScheduledActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScheduledActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        activityID
        scheduledTrainID
        formatID
        order
        color
        duration
        createdAt
        updatedAt
        scheduledTrain {
          id
          description
          train_date
          train_time
          stationID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getFormat = /* GraphQL */ `
  query GetFormat($id: ID!) {
    getFormat(id: $id) {
      id
      name
      colorID
      createdAt
      updatedAt
      scheduledActivities {
        items {
          id
          name
          activityID
          scheduledTrainID
          formatID
          order
          color
          duration
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listFormats = /* GraphQL */ `
  query ListFormats(
    $filter: ModelFormatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        colorID
        createdAt
        updatedAt
        scheduledActivities {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      name
      description
      colorID
      youTubeResourceID
      createdAt
      updatedAt
      scheduledActivities {
        items {
          id
          name
          activityID
          scheduledTrainID
          formatID
          order
          color
          duration
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        colorID
        youTubeResourceID
        createdAt
        updatedAt
        scheduledActivities {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getYouTubeResource = /* GraphQL */ `
  query GetYouTubeResource($id: ID!) {
    getYouTubeResource(id: $id) {
      id
      link
      author
      description
      createdAt
      updatedAt
      activities {
        items {
          id
          name
          description
          colorID
          youTubeResourceID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listYouTubeResources = /* GraphQL */ `
  query ListYouTubeResources(
    $filter: ModelYouTubeResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listYouTubeResources(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        link
        author
        description
        createdAt
        updatedAt
        activities {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getLongMessage = /* GraphQL */ `
  query GetLongMessage($id: ID!) {
    getLongMessage(id: $id) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const listLongMessages = /* GraphQL */ `
  query ListLongMessages(
    $filter: ModelLongMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLongMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getColor = /* GraphQL */ `
  query GetColor($id: ID!) {
    getColor(id: $id) {
      id
      name
      primary
      contrast
      createdAt
      updatedAt
    }
  }
`;
export const listColors = /* GraphQL */ `
  query ListColors(
    $filter: ModelColorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        primary
        contrast
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSetting = /* GraphQL */ `
  query GetSetting($name: String!) {
    getSetting(name: $name) {
      name
      value
      createdAt
      updatedAt
    }
  }
`;
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $name: String
    $filter: ModelSettingFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSettings(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
