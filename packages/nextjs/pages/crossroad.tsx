import { init, useQuery } from "@airstack/airstack-react";
import React from "react";
import type { NextPage } from "next";
import { StatusIcon } from '../components/StatusIcon';

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
  }`; // Your GraphQL query
  const variables = {
    "eventId": "103093",
    "owner": "tokenstaker.eth"
  }; // Your GraphQL variables

  const { data, loading, error } = useQuery(query, variables);

  let isEventIdInteger = false;
  if (data && data.Poaps && data.Poaps.Poap && data.Poaps.Poap[0]) {
    isEventIdInteger = Number.isInteger(parseInt(data.Poaps.Poap[0].eventId));
  }

  return (
    <div>
      <StatusIcon status={isEventIdInteger} />
    </div>
  );
};

export default Testair;
