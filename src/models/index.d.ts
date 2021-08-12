import {ModelInit, MutableModel, PersistentModelConstructor} from "@aws-amplify/datastore";


type NotificationsMessageMetaData = {
    readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScheduledActivitiesMetaData = {
    readOnlyFields: 'createdAt' | 'updatedAt';
}

type ActivitiesMetaData = {
    readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScheduledTrainsMetaData = {
    readOnlyFields: 'createdAt' | 'updatedAt';
}

type YouTubeResourcesMetaData = {
    readOnlyFields: 'createdAt' | 'updatedAt';
}

type StationsMetaData = {
    readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
    readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class NotificationsMessage {
    readonly id: string;
    readonly message_text?: string;
    readonly name?: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;

    constructor(init: ModelInit<NotificationsMessage, NotificationsMessageMetaData>);

    static copyOf(source: NotificationsMessage, mutator: (draft: MutableModel<NotificationsMessage, NotificationsMessageMetaData>) => MutableModel<NotificationsMessage, NotificationsMessageMetaData> | void): NotificationsMessage;
}

export declare class ScheduledActivities {
    readonly id: string;
    readonly scheduled_train?: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;

    constructor(init: ModelInit<ScheduledActivities, ScheduledActivitiesMetaData>);

    static copyOf(source: ScheduledActivities, mutator: (draft: MutableModel<ScheduledActivities, ScheduledActivitiesMetaData>) => MutableModel<ScheduledActivities, ScheduledActivitiesMetaData> | void): ScheduledActivities;
}

export declare class Activities {
    readonly id: string;
    readonly youtube_resource?: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;

    constructor(init: ModelInit<Activities, ActivitiesMetaData>);

    static copyOf(source: Activities, mutator: (draft: MutableModel<Activities, ActivitiesMetaData>) => MutableModel<Activities, ActivitiesMetaData> | void): Activities;
}

export declare class ScheduledTrains {
    readonly id: string;
    readonly start_time?: string;
    readonly train_date?: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;

    constructor(init: ModelInit<ScheduledTrains, ScheduledTrainsMetaData>);

    static copyOf(source: ScheduledTrains, mutator: (draft: MutableModel<ScheduledTrains, ScheduledTrainsMetaData>) => MutableModel<ScheduledTrains, ScheduledTrainsMetaData> | void): ScheduledTrains;
}

export declare class YouTubeResources {
    readonly id: string;
    readonly link?: string;
    readonly notes?: string;
    readonly author?: string;
    readonly gif_id?: number;
    readonly createdAt?: string;
    readonly updatedAt?: string;

    constructor(init: ModelInit<YouTubeResources, YouTubeResourcesMetaData>);

    static copyOf(source: YouTubeResources, mutator: (draft: MutableModel<YouTubeResources, YouTubeResourcesMetaData>) => MutableModel<YouTubeResources, YouTubeResourcesMetaData> | void): YouTubeResources;
}

export declare class Stations {
    readonly id: string;
    readonly name?: string;
    readonly abbrev?: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;

    constructor(init: ModelInit<Stations, StationsMetaData>);

    static copyOf(source: Stations, mutator: (draft: MutableModel<Stations, StationsMetaData>) => MutableModel<Stations, StationsMetaData> | void): Stations;
}

export declare class Todo {
    readonly id: string;
    readonly name: string;
    readonly description?: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;

    constructor(init: ModelInit<Todo, TodoMetaData>);

    static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}
