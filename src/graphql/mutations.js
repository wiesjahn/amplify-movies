/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMovie = /* GraphQL */ `
  mutation CreateMovie(
    $input: CreateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    createMovie(input: $input, condition: $condition) {
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
export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie(
    $input: UpdateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    updateMovie(input: $input, condition: $condition) {
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
export const deleteMovie = /* GraphQL */ `
  mutation DeleteMovie(
    $input: DeleteMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    deleteMovie(input: $input, condition: $condition) {
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
export const createActor = /* GraphQL */ `
  mutation CreateActor(
    $input: CreateActorInput!
    $condition: ModelActorConditionInput
  ) {
    createActor(input: $input, condition: $condition) {
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
export const updateActor = /* GraphQL */ `
  mutation UpdateActor(
    $input: UpdateActorInput!
    $condition: ModelActorConditionInput
  ) {
    updateActor(input: $input, condition: $condition) {
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
export const deleteActor = /* GraphQL */ `
  mutation DeleteActor(
    $input: DeleteActorInput!
    $condition: ModelActorConditionInput
  ) {
    deleteActor(input: $input, condition: $condition) {
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
export const createDirector = /* GraphQL */ `
  mutation CreateDirector(
    $input: CreateDirectorInput!
    $condition: ModelDirectorConditionInput
  ) {
    createDirector(input: $input, condition: $condition) {
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
export const updateDirector = /* GraphQL */ `
  mutation UpdateDirector(
    $input: UpdateDirectorInput!
    $condition: ModelDirectorConditionInput
  ) {
    updateDirector(input: $input, condition: $condition) {
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
export const deleteDirector = /* GraphQL */ `
  mutation DeleteDirector(
    $input: DeleteDirectorInput!
    $condition: ModelDirectorConditionInput
  ) {
    deleteDirector(input: $input, condition: $condition) {
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
export const createMovieActor = /* GraphQL */ `
  mutation CreateMovieActor(
    $input: CreateMovieActorInput!
    $condition: ModelMovieActorConditionInput
  ) {
    createMovieActor(input: $input, condition: $condition) {
      id
      movieID
      actorID
      movie {
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
      actor {
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
export const updateMovieActor = /* GraphQL */ `
  mutation UpdateMovieActor(
    $input: UpdateMovieActorInput!
    $condition: ModelMovieActorConditionInput
  ) {
    updateMovieActor(input: $input, condition: $condition) {
      id
      movieID
      actorID
      movie {
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
      actor {
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
export const deleteMovieActor = /* GraphQL */ `
  mutation DeleteMovieActor(
    $input: DeleteMovieActorInput!
    $condition: ModelMovieActorConditionInput
  ) {
    deleteMovieActor(input: $input, condition: $condition) {
      id
      movieID
      actorID
      movie {
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
      actor {
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
