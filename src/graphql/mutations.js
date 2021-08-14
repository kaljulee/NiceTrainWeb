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
    }
  }
`;
