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
          standingTag
          groundTag
          status
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
          standingTag
          groundTag
          status
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
          standingTag
          groundTag
          status
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
      standingTag
      groundTag
      status
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
          youTubeResourceTimeStamp
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
      standingTag
      groundTag
      status
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
          youTubeResourceTimeStamp
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
      standingTag
      groundTag
      status
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
          youTubeResourceTimeStamp
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
      color
      duration
      youTubeResourceTimeStamp
      createdAt
      updatedAt
      scheduledTrain {
        id
        description
        train_date
        train_time
        stationID
        standingTag
        groundTag
        status
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
      color
      duration
      youTubeResourceTimeStamp
      createdAt
      updatedAt
      scheduledTrain {
        id
        description
        train_date
        train_time
        stationID
        standingTag
        groundTag
        status
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
      color
      duration
      youTubeResourceTimeStamp
      createdAt
      updatedAt
      scheduledTrain {
        id
        description
        train_date
        train_time
        stationID
        standingTag
        groundTag
        status
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
          youTubeResourceTimeStamp
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
          youTubeResourceTimeStamp
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
          youTubeResourceTimeStamp
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
      colorID
      youTubeResourceID
      youTubeTimeStamp
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
          youTubeResourceTimeStamp
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
      colorID
      youTubeResourceID
      youTubeTimeStamp
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
          youTubeResourceTimeStamp
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
      colorID
      youTubeResourceID
      youTubeTimeStamp
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
          youTubeResourceTimeStamp
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
          colorID
          youTubeResourceID
          youTubeTimeStamp
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
          colorID
          youTubeResourceID
          youTubeTimeStamp
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
          colorID
          youTubeResourceID
          youTubeTimeStamp
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateLongMessage = /* GraphQL */ `
  subscription OnCreateLongMessage {
    onCreateLongMessage {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLongMessage = /* GraphQL */ `
  subscription OnUpdateLongMessage {
    onUpdateLongMessage {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLongMessage = /* GraphQL */ `
  subscription OnDeleteLongMessage {
    onDeleteLongMessage {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const onCreateColor = /* GraphQL */ `
  subscription OnCreateColor {
    onCreateColor {
      id
      name
      primary
      contrast
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateColor = /* GraphQL */ `
  subscription OnUpdateColor {
    onUpdateColor {
      id
      name
      primary
      contrast
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteColor = /* GraphQL */ `
  subscription OnDeleteColor {
    onDeleteColor {
      id
      name
      primary
      contrast
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSetting = /* GraphQL */ `
  subscription OnCreateSetting {
    onCreateSetting {
      settingType
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSetting = /* GraphQL */ `
  subscription OnUpdateSetting {
    onUpdateSetting {
      settingType
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSetting = /* GraphQL */ `
  subscription OnDeleteSetting {
    onDeleteSetting {
      settingType
      value
      createdAt
      updatedAt
    }
  }
`;
