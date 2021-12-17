import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import graphqlClient from "./api/graphql";
import { ApolloProvider } from "@apollo/client";



ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <div className="indexContainer">
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </div>
   </ApolloProvider>,
  document.getElementById("root")
);
