/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMovie = /* GraphQL */ `
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      name
      actors {
        items {
          id
          movieID
          actorID
        }
        nextToken
      }
      director {
        id
        firstName
        lastName
        movies {
          nextToken
        }
      }
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        actors {
          nextToken
        }
        director {
          id
          firstName
          lastName
        }
      }
      nextToken
    }
  }
`;
export const getActor = /* GraphQL */ `
  query GetActor($id: ID!) {
    getActor(id: $id) {
      id
      firstName
      lastName
      movies {
        items {
          id
          movieID
          actorID
        }
        nextToken
      }
    }
  }
`;
export const listActors = /* GraphQL */ `
  query ListActors(
    $filter: ModelActorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        movies {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getDirector = /* GraphQL */ `
  query GetDirector($id: ID!) {
    getDirector(id: $id) {
      id
      firstName
      lastName
      movies {
        items {
          id
          name
        }
        nextToken
      }
    }
  }
`;
export const listDirectors = /* GraphQL */ `
  query ListDirectors(
    $filter: ModelDirectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDirectors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        movies {
          nextToken
        }
      }
      nextToken
    }
  }
`;
