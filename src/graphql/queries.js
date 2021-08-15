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
          name
          description
          train_time
          train_date
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
      name
      description
      train_time
      train_date
      stationID
      createdAt
      updatedAt
      scheduledActivities {
        items {
          id
          name
          activityID
          scheduledTrainID
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
        name
        description
        train_time
        train_date
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
      createdAt
      updatedAt
      scheduledTrain {
        id
        name
        description
        train_time
        train_date
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
        createdAt
        updatedAt
        scheduledTrain {
          id
          name
          description
          train_time
          train_date
          stationID
          createdAt
          updatedAt
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
      youTubeResourceID
      createdAt
      updatedAt
      scheduledActivities {
        items {
          id
          name
          activityID
          scheduledTrainID
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
export const getBoardLongMessage = /* GraphQL */ `
  query GetBoardLongMessage($id: ID!) {
    getBoardLongMessage(id: $id) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const listBoardLongMessages = /* GraphQL */ `
  query ListBoardLongMessages(
    $filter: ModelBoardLongMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoardLongMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
