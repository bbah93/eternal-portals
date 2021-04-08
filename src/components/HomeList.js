import React from 'react';
import HomeCard from './HomeCard';
import QueryResults from './query-result';
import { gql, useQuery } from '@apollo/client';



const USERFEED = gql` 
  query getUsers {
    usersForHome {
    id
    firstname
    portal_url
    portal {
      owner_id
      p_id
      create_date
      likes
    }
  }
}
`;



export const HomeList = () => {

    const { loading, error, data } = useQuery(USERFEED);

    return (
        <ul>
            <QueryResults error={error} loading={loading} data={data}>

            { }
        {data?. usersForHome?.map((feedItem) => (
          <HomeCard key={feedItem.id} item={feedItem} />))
        }
            </QueryResults>

        </ul>
    )
}