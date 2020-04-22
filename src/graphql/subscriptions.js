/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie {
    onCreateMovie {
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
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie {
    onUpdateMovie {
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
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie {
    onDeleteMovie {
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
export const onCreateActor = /* GraphQL */ `
  subscription OnCreateActor {
    onCreateActor {
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
export const onUpdateActor = /* GraphQL */ `
  subscription OnUpdateActor {
    onUpdateActor {
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
export const onDeleteActor = /* GraphQL */ `
  subscription OnDeleteActor {
    onDeleteActor {
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
export const onCreateDirector = /* GraphQL */ `
  subscription OnCreateDirector {
    onCreateDirector {
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
export const onUpdateDirector = /* GraphQL */ `
  subscription OnUpdateDirector {
    onUpdateDirector {
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
export const onDeleteDirector = /* GraphQL */ `
  subscription OnDeleteDirector {
    onDeleteDirector {
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
export const onCreateMovieActor = /* GraphQL */ `
  subscription OnCreateMovieActor {
    onCreateMovieActor {
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
export const onUpdateMovieActor = /* GraphQL */ `
  subscription OnUpdateMovieActor {
    onUpdateMovieActor {
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
export const onDeleteMovieActor = /* GraphQL */ `
  subscription OnDeleteMovieActor {
    onDeleteMovieActor {
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
