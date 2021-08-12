// @ts-check
import {initSchema} from '@aws-amplify/datastore';
import {schema} from './schema';


const {NotificationsMessage, ScheduledActivities, Activities, ScheduledTrains, YouTubeResources, Stations, Todo} = initSchema(schema);

export {
    NotificationsMessage,
    ScheduledActivities,
    Activities,
    ScheduledTrains,
    YouTubeResources,
    Stations,
    Todo
};
