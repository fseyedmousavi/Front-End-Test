import { GraphQLClient } from "graphql-request";
import { graphqlUrl, graphqlUrlServer } from "$lib/constants";

export const client = new GraphQLClient(graphqlUrl, { headers: {} });
export const client_server = new GraphQLClient(graphqlUrlServer, { headers: {} });