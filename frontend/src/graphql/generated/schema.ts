import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Continent = {
  __typename?: 'Continent';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  continent?: Maybe<Continent>;
  emoji: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContinent: Continent;
  addCountry: Country;
};


export type MutationAddContinentArgs = {
  data: NewContinentInput;
};


export type MutationAddCountryArgs = {
  data: NewCountryInput;
};

export type NewContinentInput = {
  name: Scalars['String'];
};

export type NewCountryInput = {
  code: Scalars['String'];
  continent?: InputMaybe<ObjectId>;
  emoji: Scalars['String'];
  name: Scalars['String'];
};

export type ObjectId = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  continents: Array<Continent>;
  countries: Array<Country>;
  country: Country;
};


export type QueryCountryArgs = {
  code: Scalars['String'];
};

export type AddCountryMutationVariables = Exact<{
  data: NewCountryInput;
}>;


export type AddCountryMutation = { __typename?: 'Mutation', addCountry: { __typename?: 'Country', code: string, emoji: string, name: string, id: number } };

export type CountriesDetailedQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesDetailedQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, id: number, emoji: string, code: string, continent?: { __typename?: 'Continent', name: string, id: number } | null }> };

export type CountriesSimpleQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesSimpleQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, id: number, emoji: string, code: string }> };

export type CountryQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type CountryQuery = { __typename?: 'Query', country: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };


export const AddCountryDocument = gql`
    mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    code
    emoji
    name
    id
  }
}
    `;
export type AddCountryMutationFn = Apollo.MutationFunction<AddCountryMutation, AddCountryMutationVariables>;

/**
 * __useAddCountryMutation__
 *
 * To run a mutation, you first call `useAddCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCountryMutation, { data, loading, error }] = useAddCountryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddCountryMutation(baseOptions?: Apollo.MutationHookOptions<AddCountryMutation, AddCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCountryMutation, AddCountryMutationVariables>(AddCountryDocument, options);
      }
export type AddCountryMutationHookResult = ReturnType<typeof useAddCountryMutation>;
export type AddCountryMutationResult = Apollo.MutationResult<AddCountryMutation>;
export type AddCountryMutationOptions = Apollo.BaseMutationOptions<AddCountryMutation, AddCountryMutationVariables>;
export const CountriesDetailedDocument = gql`
    query CountriesDetailed {
  countries {
    name
    id
    emoji
    continent {
      name
      id
    }
    code
  }
}
    `;

/**
 * __useCountriesDetailedQuery__
 *
 * To run a query within a React component, call `useCountriesDetailedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesDetailedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesDetailedQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesDetailedQuery(baseOptions?: Apollo.QueryHookOptions<CountriesDetailedQuery, CountriesDetailedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesDetailedQuery, CountriesDetailedQueryVariables>(CountriesDetailedDocument, options);
      }
export function useCountriesDetailedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesDetailedQuery, CountriesDetailedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesDetailedQuery, CountriesDetailedQueryVariables>(CountriesDetailedDocument, options);
        }
export type CountriesDetailedQueryHookResult = ReturnType<typeof useCountriesDetailedQuery>;
export type CountriesDetailedLazyQueryHookResult = ReturnType<typeof useCountriesDetailedLazyQuery>;
export type CountriesDetailedQueryResult = Apollo.QueryResult<CountriesDetailedQuery, CountriesDetailedQueryVariables>;
export const CountriesSimpleDocument = gql`
    query CountriesSimple {
  countries {
    name
    id
    emoji
    code
  }
}
    `;

/**
 * __useCountriesSimpleQuery__
 *
 * To run a query within a React component, call `useCountriesSimpleQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesSimpleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesSimpleQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesSimpleQuery(baseOptions?: Apollo.QueryHookOptions<CountriesSimpleQuery, CountriesSimpleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesSimpleQuery, CountriesSimpleQueryVariables>(CountriesSimpleDocument, options);
      }
export function useCountriesSimpleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesSimpleQuery, CountriesSimpleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesSimpleQuery, CountriesSimpleQueryVariables>(CountriesSimpleDocument, options);
        }
export type CountriesSimpleQueryHookResult = ReturnType<typeof useCountriesSimpleQuery>;
export type CountriesSimpleLazyQueryHookResult = ReturnType<typeof useCountriesSimpleLazyQuery>;
export type CountriesSimpleQueryResult = Apollo.QueryResult<CountriesSimpleQuery, CountriesSimpleQueryVariables>;
export const CountryDocument = gql`
    query Country($code: String!) {
  country(code: $code) {
    code
    emoji
    id
    name
    continent {
      id
      name
    }
  }
}
    `;

/**
 * __useCountryQuery__
 *
 * To run a query within a React component, call `useCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCountryQuery(baseOptions: Apollo.QueryHookOptions<CountryQuery, CountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
      }
export function useCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountryQuery, CountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
        }
export type CountryQueryHookResult = ReturnType<typeof useCountryQuery>;
export type CountryLazyQueryHookResult = ReturnType<typeof useCountryLazyQuery>;
export type CountryQueryResult = Apollo.QueryResult<CountryQuery, CountryQueryVariables>;