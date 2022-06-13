import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Error = {
  __typename?: 'Error';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPatient: PatientResponse;
  createScan: Scan;
  login: UserResponse;
  register: UserResponse;
};


export type MutationCreatePatientArgs = {
  doctorId: Scalars['Float'];
  mrn: Scalars['String'];
  notes: Scalars['String'];
};


export type MutationCreateScanArgs = {
  diagnosis: Scalars['String'];
  doctorId: Scalars['Int'];
  eye: Scalars['String'];
  note: Scalars['String'];
  patientId: Scalars['Int'];
  url: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type Patient = {
  __typename?: 'Patient';
  createdAt: Scalars['String'];
  doctor: User;
  doctorId: Scalars['Int'];
  id: Scalars['Float'];
  mrn: Scalars['String'];
  notes: Scalars['String'];
  scans: Array<Scan>;
  updatedAt: Scalars['String'];
  updatedAtString: Scalars['String'];
};

export type PatientResponse = {
  __typename?: 'PatientResponse';
  error?: Maybe<Error>;
  patient?: Maybe<Patient>;
};

export type Query = {
  __typename?: 'Query';
  getPatients: Array<Patient>;
  getScans: Array<Scan>;
  getUsers: Array<User>;
};


export type QueryGetPatientsArgs = {
  doctorId: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetScansArgs = {
  doctorId: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
};

export type Scan = {
  __typename?: 'Scan';
  createdAt: Scalars['String'];
  diagnosis: Scalars['String'];
  doctor: User;
  doctorId: Scalars['Int'];
  eye: Scalars['String'];
  id: Scalars['Float'];
  note: Scalars['String'];
  patient: Patient;
  patientId: Scalars['Float'];
  updatedAt: Scalars['String'];
  updatedAtString: Scalars['String'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  patients: Array<Patient>;
  scans: Array<Scan>;
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<Error>;
  user?: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, email: string } | null, error?: { __typename?: 'Error', field: string, message: string } | null } };

export type GetPatientsQueryVariables = Exact<{
  doctorId: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetPatientsQuery = { __typename?: 'Query', getPatients: Array<{ __typename?: 'Patient', id: number, mrn: string, doctorId: number, updatedAt: string, updatedAtString: string, notes: string, scans: Array<{ __typename?: 'Scan', id: number }> }> };

export type GetScansQueryVariables = Exact<{
  doctorId: Scalars['Int'];
}>;


export type GetScansQuery = { __typename?: 'Query', getScans: Array<{ __typename?: 'Scan', id: number, url: string, updatedAtString: string, diagnosis: string }> };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
      email
    }
    error {
      field
      message
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const GetPatientsDocument = gql`
    query getPatients($doctorId: Int!, $limit: Int) {
  getPatients(doctorId: $doctorId, limit: $limit) {
    id
    mrn
    doctorId
    updatedAt
    updatedAtString
    notes
    scans {
      id
    }
  }
}
    `;

export function useGetPatientsQuery(options: Omit<Urql.UseQueryArgs<GetPatientsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPatientsQuery>({ query: GetPatientsDocument, ...options });
};
export const GetScansDocument = gql`
    query getScans($doctorId: Int!) {
  getScans(doctorId: $doctorId) {
    id
    url
    updatedAtString
    diagnosis
  }
}
    `;

export function useGetScansQuery(options: Omit<Urql.UseQueryArgs<GetScansQueryVariables>, 'query'>) {
  return Urql.useQuery<GetScansQuery>({ query: GetScansDocument, ...options });
};