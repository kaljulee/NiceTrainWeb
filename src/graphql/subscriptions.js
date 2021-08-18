/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStation = /* GraphQL */ `
  subscription OnCreateStation {
    onCreateStation {
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
export const onUpdateStation = /* GraphQL */ `
  subscription OnUpdateStation {
    onUpdateStation {
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
export const onDeleteStation = /* GraphQL */ `
  subscription OnDeleteStation {
    onDeleteStation {
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
export const onCreateScheduledTrain = /* GraphQL */ `
  subscription OnCreateScheduledTrain {
    onCreateScheduledTrain {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateScheduledTrain = /* GraphQL */ `
  subscription OnUpdateScheduledTrain {
    onUpdateScheduledTrain {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteScheduledTrain = /* GraphQL */ `
  subscription OnDeleteScheduledTrain {
    onDeleteScheduledTrain {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateScheduledActivity = /* GraphQL */ `
  subscription OnCreateScheduledActivity {
    onCreateScheduledActivity {
      id
      name
      activityID
      scheduledTrainID
      formatID
      order
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
export const onUpdateScheduledActivity = /* GraphQL */ `
  subscription OnUpdateScheduledActivity {
    onUpdateScheduledActivity {
      id
      name
      activityID
      scheduledTrainID
      formatID
      order
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
export const onDeleteScheduledActivity = /* GraphQL */ `
  subscription OnDeleteScheduledActivity {
    onDeleteScheduledActivity {
      id
      name
      activityID
      scheduledTrainID
      formatID
      order
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
export const onCreateFormat = /* GraphQL */ `
  subscription OnCreateFormat {
    onCreateFormat {
      id
      name
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateFormat = /* GraphQL */ `
  subscription OnUpdateFormat {
    onUpdateFormat {
      id
      name
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteFormat = /* GraphQL */ `
  subscription OnDeleteFormat {
    onDeleteFormat {
      id
      name
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity {
    onCreateActivity {
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
          formatID
          order
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
    onUpdateActivity {
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
          formatID
          order
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
    onDeleteActivity {
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
          formatID
          order
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateYouTubeResource = /* GraphQL */ `
  subscription OnCreateYouTubeResource {
    onCreateYouTubeResource {
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
export const onUpdateYouTubeResource = /* GraphQL */ `
  subscription OnUpdateYouTubeResource {
    onUpdateYouTubeResource {
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
export const onDeleteYouTubeResource = /* GraphQL */ `
  subscription OnDeleteYouTubeResource {
    onDeleteYouTubeResource {
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
export const onCreateBoardLongMessage = /* GraphQL */ `
  subscription OnCreateBoardLongMessage {
    onCreateBoardLongMessage {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBoardLongMessage = /* GraphQL */ `
  subscription OnUpdateBoardLongMessage {
    onUpdateBoardLongMessage {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBoardLongMessage = /* GraphQL */ `
  subscription OnDeleteBoardLongMessage {
    onDeleteBoardLongMessage {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
