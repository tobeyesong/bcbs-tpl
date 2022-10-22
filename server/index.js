/** @format */

import { request, gql } from "graphql-request";

const query = gql`
  {
    Page(perPage: 10) {
      media {
        id
        coverImage {
          large
        }
        title {
          english
          native
        }
        description
      }
    }
  }
`;

request("https://graphql.anilist.co/", query).then((data) =>
  JSON.stringify(data)
);
