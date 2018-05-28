import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);
  

const App = () => (
  <ApolloProvider client={client}>
    <div>
    <ExchangeRates/>)
    </div>
  </ApolloProvider>
);

render(<App/>, document.getElementById("root"));
