const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Genre {
    id: ID
    name: String
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
    postcode: String!
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

  type Venue {
    id: ID!
    name: String!
    postcode: String!
  }

  type Performers {
    musician: MusicianUser
    band: Band
    confirmed: Boolean
  }

  type Gig {
    id: ID!
    title: String!
    description: String
    genre: Genre
    imageUrl: String!
    fee: Int!
    websiteUrl: String
    dateTime: String!
    venue: Venue
    accepting: Boolean!
    performers: [Performers]
  }

  type musicianValidationOutcome {
    email: String!
    exists: Boolean!
  }

  input Filter {
    genre: [ID]
    instruments: [ID]
    lookingFor: [ID]
    userType: [String]
    experienceLevel: [String]
    musician: String
    band: String
  }

  type Query {
    musicianUser(id: ID!): MusicianUser
    band(id: ID!): Band
    genres: [Genre]
    instruments: [Instrument]
    assemble(sortBy: String, top: Int, filters: Filter): Assemble
    collaborate(sortBy: String, top: Int, filters: Filter): Collaborate
    gigs(sortBy: String, top: Int, filters: Filter): [Gig]
    conversations(id: ID!): [Conversation]
    checkIfMusicianExists(
      input: checkMusicianInput!
    ): [musicianValidationOutcome]
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
    genre: [ID]
    experienceLevel: String!
    instruments: [ID]
    imageUrl: String
    websiteUrl: String
    soundCloudUrl: String
    lookingFor: [ID]
    openToCollaboration: Boolean!
    openToJoiningBand: Boolean!
  }

  input BandInput {
    name: String!
    description: String!
    location: String!
    genre: [ID]
    experienceLevel: String!
    numberOfMembers: Int!
    instruments: [ID]
    imageUrl: String!
    websiteUrl: String
    soundCloudUrl: String
    lookingFor: [ID]
    openToCollaboration: Boolean
    openToMembers: Boolean
    members: [ID]
  }

  input checkMusicianInput {
    musicians: [String!]
  }

  type Auth {
    token: ID!
    user: MusicianUser!
  }

  type Message {
    id: ID!
    senderId: String!
    text: String!
  }

  type Conversation {
    id: ID!
    participants: [MusicianUser]!
    messages: [Message]
  }

  input MessageInput {
    senderId: String!
    recipientId: String!
    text: String!
  }

  type Mutation {
    login(input: LoginInput!): Auth!
    signup(input: SignupInput!): Auth!
    createBand(input: BandInput!): Band!
    createMessage(input: MessageInput!): Message!
  }
`;

module.exports = typeDefs;
