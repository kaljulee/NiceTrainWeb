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
export const onCreateScheduledTrain = /* GraphQL */ `
  subscription OnCreateScheduledTrain {
    onCreateScheduledTrain {
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
export const onUpdateScheduledTrain = /* GraphQL */ `
  subscription OnUpdateScheduledTrain {
    onUpdateScheduledTrain {
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
export const onDeleteScheduledTrain = /* GraphQL */ `
  subscription OnDeleteScheduledTrain {
    onDeleteScheduledTrain {
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
export const onCreateScheduledActivity = /* GraphQL */ `
  subscription OnCreateScheduledActivity {
    onCreateScheduledActivity {
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
export const onUpdateScheduledActivity = /* GraphQL */ `
  subscription OnUpdateScheduledActivity {
    onUpdateScheduledActivity {
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
export const onDeleteScheduledActivity = /* GraphQL */ `
  subscription OnDeleteScheduledActivity {
    onDeleteScheduledActivity {
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
