/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStation = /* GraphQL */ `
  mutation CreateStation(
    $input: CreateStationInput!
    $condition: ModelStationConditionInput
  ) {
    createStation(input: $input, condition: $condition) {
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
export const updateStation = /* GraphQL */ `
  mutation UpdateStation(
    $input: UpdateStationInput!
    $condition: ModelStationConditionInput
  ) {
    updateStation(input: $input, condition: $condition) {
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
export const deleteStation = /* GraphQL */ `
  mutation DeleteStation(
    $input: DeleteStationInput!
    $condition: ModelStationConditionInput
  ) {
    deleteStation(input: $input, condition: $condition) {
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
export const createScheduledTrain = /* GraphQL */ `
  mutation CreateScheduledTrain(
    $input: CreateScheduledTrainInput!
    $condition: ModelScheduledTrainConditionInput
  ) {
    createScheduledTrain(input: $input, condition: $condition) {
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
export const updateScheduledTrain = /* GraphQL */ `
  mutation UpdateScheduledTrain(
    $input: UpdateScheduledTrainInput!
    $condition: ModelScheduledTrainConditionInput
  ) {
    updateScheduledTrain(input: $input, condition: $condition) {
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
export const deleteScheduledTrain = /* GraphQL */ `
  mutation DeleteScheduledTrain(
    $input: DeleteScheduledTrainInput!
    $condition: ModelScheduledTrainConditionInput
  ) {
    deleteScheduledTrain(input: $input, condition: $condition) {
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
export const createScheduledActivity = /* GraphQL */ `
  mutation CreateScheduledActivity(
    $input: CreateScheduledActivityInput!
    $condition: ModelScheduledActivityConditionInput
  ) {
    createScheduledActivity(input: $input, condition: $condition) {
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
export const updateScheduledActivity = /* GraphQL */ `
  mutation UpdateScheduledActivity(
    $input: UpdateScheduledActivityInput!
    $condition: ModelScheduledActivityConditionInput
  ) {
    updateScheduledActivity(input: $input, condition: $condition) {
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
export const deleteScheduledActivity = /* GraphQL */ `
  mutation DeleteScheduledActivity(
    $input: DeleteScheduledActivityInput!
    $condition: ModelScheduledActivityConditionInput
  ) {
    deleteScheduledActivity(input: $input, condition: $condition) {
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
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
export const createYouTubeResource = /* GraphQL */ `
  mutation CreateYouTubeResource(
    $input: CreateYouTubeResourceInput!
    $condition: ModelYouTubeResourceConditionInput
  ) {
    createYouTubeResource(input: $input, condition: $condition) {
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
export const updateYouTubeResource = /* GraphQL */ `
  mutation UpdateYouTubeResource(
    $input: UpdateYouTubeResourceInput!
    $condition: ModelYouTubeResourceConditionInput
  ) {
    updateYouTubeResource(input: $input, condition: $condition) {
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
export const deleteYouTubeResource = /* GraphQL */ `
  mutation DeleteYouTubeResource(
    $input: DeleteYouTubeResourceInput!
    $condition: ModelYouTubeResourceConditionInput
  ) {
    deleteYouTubeResource(input: $input, condition: $condition) {
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