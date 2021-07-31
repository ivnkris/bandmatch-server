const { gql } = require("apollo-server");

const typeDefs = gql`
  type Genre {
    id: ID!
    name: String!
  }

  type Instrument {
    id: ID!
    name: String!
    role: String!
  }

  type MusicianUser {
    id: ID!
    firstName: String!
    lastName: String!
    description: String!
    genre: [Genre]
    experienceLevel: String!
    instruments: [Instrument]
    imageUrl: String!
    websiteUrl: String
    soundCloudUrl: String
    lookingFor: [Instrument]
    openToCollaboration: Boolean!
    openToJoiningBand: Boolean!
    band: ID
    bandName: String
    bandImage: String
  }

  type Band {
    id: ID!
    name: String!
    description: String!
    location: String!
    genre: [Genre]
    experienceLevel: String!
    numberOfMembers: Int!
    instruments: [Instrument]
    imageUrl: String!
    websiteUrl: String
    soundCloudUrl: String
    lookingFor: [Instrument]
    openToCollaboration: Boolean
    openToMembers: Boolean
    members: [MusicianUser]
  }

  type Assemble {
    musicians: [MusicianUser]
    bands: [Band]
  }

  type Collaborate {
    musicians: [MusicianUser]
    bands: [Band]
  }

  type Query {
    musicianUser(id: ID!): MusicianUser
    band(id: ID!): Band
    assemble(sortBy: String, top: Int, filters: [String]): [Assemble]
    collaborate(sortBy: String, top: Int, filters: [String]): [Collaborate]
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input SignupInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    description: String!
    isPremium: Boolean!
    postcode: String
    # TODO: graphQL throws a validation error Error: The type of SignupInput.genre must be Input Type but got: [Genre].
    # genre: [Genre]
    experienceLevel: String!
    # instruments: [Instrument]
    imageUrl: String
    websiteUrl: String
    soundCloudUrl: String
    # lookingFor: [Instrument]
    openToCollaboration: Boolean!
    openToJoiningBand: Boolean!
  }

  type Auth {
    token: ID!
    user: MusicianUser!
  }

  type Mutation {
    login(input: LoginInput): Auth!
    signup(input: SignupInput): Auth!
  }
`;

module.exports = typeDefs;
