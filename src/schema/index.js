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
    id: ID
    email: String
    firstName: String
    lastName: String
    description: String
    location: String
    genre: [Genre]
    experienceLevel: String
    instruments: [Instrument]
    imageUrl: String
    websiteUrl: String
    soundCloudUrl: String
    lookingFor: [Instrument]
    openToCollaboration: Boolean
    openToJoiningBand: Boolean
  }

  type Band {
    id: ID
    name: String
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
    musicians: [MusicianUser]
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
    email: String
    firstName: String
    lastName: String
    isPremium: Boolean
    name: String!
    postcode: String!
    photoUrl: String
    description: String
    websiteUrl: String
  }

  type Performers {
    _id: String
    musician: String
    band: String
    confirmed: String
    musicianDetails: MusicianUser
    bandDetails: Band
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

  type musicianValidationOutcome {
    email: String!
    exists: Boolean!
    id: ID
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
    venue(id: ID!): Venue
    genres: [Genre]
    instruments: [Instrument]
    assemble(
      sortBy: String
      top: Int
      filters: Filter
      musiciansOffset: Int
      bandsOffset: Int
    ): Assemble
    assembleCarousel(sortBy: String, top: Int, filters: Filter): Assemble
    collaborate(
      sortBy: String
      top: Int
      filters: Filter
      musiciansOffset: Int
      bandsOffset: Int
    ): Collaborate
    collaborateCarousel(sortBy: String, top: Int, filters: Filter): Collaborate
    gigs(sortBy: String, top: Int, filters: Filter, gigsOffset: Int): [Gig]
    gig(id: ID!): Gig
    conversations(id: ID!): [Conversation]
    conversation(id: ID!): Conversation
    checkIfMusicianExists(
      input: checkMusicianInput!
    ): [musicianValidationOutcome]
    bands(filters: Filter): [Band]
    gigRequests(id: ID!): [Gig]
    musicians: [MusicianUser]
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
    location: String
    genre: [String]
    experienceLevel: String!
    instruments: [String]
    imageUrl: String
    websiteUrl: String
    soundCloudUrl: String
    lookingFor: [String]
    openToCollaboration: Boolean!
    openToJoiningBand: Boolean!
  }

  input SignupVenueInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    isPremium: Boolean
    name: String!
    postcode: String!
    photoUrl: String
    description: String
    websiteUrl: String
  }

  input BandInput {
    name: String!
    description: String!
    location: String!
    genre: [ID]!
    experienceLevel: String!
    numberOfMembers: Int!
    instruments: [ID]
    imageUrl: String!
    websiteUrl: String
    soundCloudUrl: String
    lookingFor: [ID]
    openToCollaboration: Boolean
    openToMembers: Boolean
    musicians: [ID]
  }

  input MessageInput {
    senderId: String!
    recipientId: String!
    text: String!
  }

  type LoginUser {
    id: ID
    email: String
    firstName: String
    lastName: String
    name: String
  }

  input checkMusicianInput {
    musicians: [String!]
  }

  input GigInput {
    title: String!
    description: String!
    fee: Float!
    imageUrl: String!
    genre: ID
    dateTime: String
    websiteUrl: String
    venue: ID!
  }

  type Auth {
    token: ID!
    user: LoginUser!
    type: String!
  }

  type VenueAuth {
    token: ID!
    user: Venue!
    type: String!
  }

  input MusicianUserInput {
    firstName: String
    lastName: String
    email: String
    description: String
    genre: [ID]
    location: String
    experienceLevel: String
    instruments: [ID]
    imageUrl: String
    websiteUrl: String
    soundCloudUrl: String
    lookingFor: [ID]
    openToCollaboration: Boolean
    openToJoiningBand: Boolean
  }

  input updateMusicianUserInput {
    musicianInfo: MusicianUserInput!
    musicianId: ID!
  }

  input updateGigRequestInput {
    id: String
    confirmed: String
  }

  input PerformersInput {
    musician: String
    band: String
    confirmed: String
  }

  input createGigRequestInput {
    id: String
    performer: PerformersInput
  }

  input deleteBandInput {
    id: String
  }

  input deleteGigInput {
    id: String
  }

  type Mutation {
    login(input: LoginInput!): Auth!
    signup(input: SignupInput!): Auth!
    createBand(input: BandInput!): Band!
    createMessage(input: MessageInput!): Message!
    signupVenueUser(input: SignupVenueInput!): VenueAuth!
    createGig(input: GigInput): Gig!
    updateMusicianUser(input: updateMusicianUserInput): MusicianUser!
    updateGigRequest(input: updateGigRequestInput): Gig!
    createGigRequest(input: createGigRequestInput): Gig!
    deleteBand(input: deleteBandInput): Band
    deleteGig(input: deleteGigInput): ID
  }
`;

module.exports = typeDefs;
