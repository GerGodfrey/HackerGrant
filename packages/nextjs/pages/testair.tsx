import { init, useQuery } from "@airstack/airstack-react";
import React from "react";
import type { NextPage } from "next";

init("ef3d1cdeafb642d3a8d6a44664ce566c");

const Testair: NextPage = () => {
  

  const query = `query GetAllTransfersToOrFromScbuergel($eventId: String, $owner: Identity) {
    Poaps(
      input: {filter: {eventId: {_eq: $eventId}, owner: {_eq: $owner}}, blockchain: ALL}
    ) {
      Poap {
        eventId
        owner {
          identity
          addresses
        }
      }
    }
  }`;

  const variables = {
    "eventId": "103093",
    "owner": "tokenstaker.eth"
  };

  const { data, loading, error } = useQuery(query, variables);

  let obj = JSON.stringify(data);
  obj = JSON.parse(obj);

  function apii() {
    console.log(JSON.stringify(data))
    console.log(obj.Poaps.Poap[0].eventId)
    console.log(loading)
    console.log(error)
  }
  return(
    <div>
        <h2>
            Holis
        </h2>
        <button onClick={apii}>
            hhhh
        </button>
    </div>
  )
  if (loading) {
    return <p>Error: {error.message}</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data){
    culo = JSON.parse(data);
    return <p>Holi: {culo.Poaps.Poap}</p>;
  }

  // Render your component using the data returned by the query
};

export default Testair;