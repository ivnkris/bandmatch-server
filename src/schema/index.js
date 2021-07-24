const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    type: String!
    isPremium: Boolean!
    postcode: String!
    genre: String
    experienceLevel: String
    numberOfMembers: Int
    instrument: [String]
    photoUrl: String
    bandName: String
    firstName: String
    lastName: String
    description: String
    soundCloudUrl: String
    lookingFor: [String]
    openToMembers: Boolean
    openToCollaboration: Boolean
    openToJoiningBand: Boolean
    venueName: String
    websiteUrl: String
    bandId: ID
    favourites: [ID]
    gigs: [ID]
  }

  type Gig {
    id: ID!
    title: String!
    description: String!
    genre: String!
    fee: Int!
    postcode: String!
    websiteUrl: String
    dateTime: String!
  }

  type Query {
    user(id: ID!): User
    users(sortBy: String, top: Int, filters: [String]): [User]
    gigs(sortBy: String, top: Int, filters: [String]): [Gig]
    gig(id: ID!): Gig
  }
`;

module.exports = typeDefs;
