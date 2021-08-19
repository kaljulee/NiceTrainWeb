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
export const createScheduledTrain = /* GraphQL */ `
  mutation CreateScheduledTrain(
    $input: CreateScheduledTrainInput!
    $condition: ModelScheduledTrainConditionInput
  ) {
    createScheduledTrain(input: $input, condition: $condition) {
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
      formatID
      order
      color
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
      formatID
      order
      color
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
      formatID
      order
      color
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
export const createFormat = /* GraphQL */ `
  mutation CreateFormat(
    $input: CreateFormatInput!
    $condition: ModelFormatConditionInput
  ) {
    createFormat(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateFormat = /* GraphQL */ `
  mutation UpdateFormat(
    $input: UpdateFormatInput!
    $condition: ModelFormatConditionInput
  ) {
    updateFormat(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteFormat = /* GraphQL */ `
  mutation DeleteFormat(
    $input: DeleteFormatInput!
    $condition: ModelFormatConditionInput
  ) {
    deleteFormat(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        nextToken
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
export const createBoardLongMessage = /* GraphQL */ `
  mutation CreateBoardLongMessage(
    $input: CreateBoardLongMessageInput!
    $condition: ModelBoardLongMessageConditionInput
  ) {
    createBoardLongMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const updateBoardLongMessage = /* GraphQL */ `
  mutation UpdateBoardLongMessage(
    $input: UpdateBoardLongMessageInput!
    $condition: ModelBoardLongMessageConditionInput
  ) {
    updateBoardLongMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const deleteBoardLongMessage = /* GraphQL */ `
  mutation DeleteBoardLongMessage(
    $input: DeleteBoardLongMessageInput!
    $condition: ModelBoardLongMessageConditionInput
  ) {
    deleteBoardLongMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const createColor = /* GraphQL */ `
  mutation CreateColor(
    $input: CreateColorInput!
    $condition: ModelColorConditionInput
  ) {
    createColor(input: $input, condition: $condition) {
      id
      name
      primary
      contrast
      createdAt
      updatedAt
    }
  }
`;
export const updateColor = /* GraphQL */ `
  mutation UpdateColor(
    $input: UpdateColorInput!
    $condition: ModelColorConditionInput
  ) {
    updateColor(input: $input, condition: $condition) {
      id
      name
      primary
      contrast
      createdAt
      updatedAt
    }
  }
`;
export const deleteColor = /* GraphQL */ `
  mutation DeleteColor(
    $input: DeleteColorInput!
    $condition: ModelColorConditionInput
  ) {
    deleteColor(input: $input, condition: $condition) {
      id
      name
      primary
      contrast
      createdAt
      updatedAt
    }
  }
`;
