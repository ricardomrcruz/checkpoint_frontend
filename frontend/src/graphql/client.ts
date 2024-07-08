import { ApolloClient, InMemoryCache } from "@apollo/client";
const uri = "http://localhost:4000";

console.log({ uri });

const client = new ApolloClient({
  uri: uri || "/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

export default client;
