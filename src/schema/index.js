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
    openToCollaboration: Boolean
    openToJoiningBand: Boolean
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
`;

module.exports = typeDefs;
