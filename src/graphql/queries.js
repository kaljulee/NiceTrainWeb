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
      }
      nextToken
    }
  }
`;
