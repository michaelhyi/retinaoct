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
  deleteScan: Scalars['Boolean'];
  login: UserResponse;
  register: UserResponse;
  updateScan: Scalars['Boolean'];
};


export type MutationCreatePatientArgs = {
  doctorId: Scalars['Int'];
  mrn: Scalars['String'];
  notes: Scalars['String'];
};


export type MutationCreateScanArgs = {
  diagnosis: Scalars['String'];
  doctorId: Scalars['Int'];
  note: Scalars['String'];
  patientId: Scalars['Int'];
  uri: Scalars['String'];
};


export type MutationDeleteScanArgs = {
  id: Scalars['Int'];
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


export type MutationUpdateScanArgs = {
  diagnosis: Scalars['String'];
  id: Scalars['Int'];
  note?: InputMaybe<Scalars['String']>;
};

export type Patient = {
  __typename?: 'Patient';
  createdAt: Scalars['String'];
  doctor: User;
  doctorId: Scalars['Int'];
  id: Scalars['Float'];
  mrn: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
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
  getPatientScans: Array<Scan>;
  getPatients: Array<Patient>;
  getRecentPatients: Array<Patient>;
  getScan: Scan;
  getScans: Array<Scan>;
  getUsers: Array<User>;
};


export type QueryGetPatientScansArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  patientId: Scalars['Int'];
};


export type QueryGetPatientsArgs = {
  doctorId: Scalars['Int'];
};


export type QueryGetRecentPatientsArgs = {
  doctorId: Scalars['Int'];
};


export type QueryGetScanArgs = {
  id: Scalars['Int'];
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
  id: Scalars['Float'];
  note?: Maybe<Scalars['String']>;
  patient: Patient;
  patientId: Scalars['Float'];
  updatedAt: Scalars['String'];
  updatedAtString: Scalars['String'];
  uri: Scalars['String'];
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

export type CreatePatientMutationVariables = Exact<{
  mrn: Scalars['String'];
  doctorId: Scalars['Int'];
  notes: Scalars['String'];
}>;


export type CreatePatientMutation = { __typename?: 'Mutation', createPatient: { __typename?: 'PatientResponse', patient?: { __typename?: 'Patient', id: number, mrn: string, doctorId: number, notes?: string | null, createdAt: string, updatedAt: string, updatedAtString: string, doctor: { __typename?: 'User', id: number, firstName: string, lastName: string } } | null, error?: { __typename?: 'Error', field: string, message: string } | null } };

export type CreateScanMutationVariables = Exact<{
  uri: Scalars['String'];
  diagnosis: Scalars['String'];
  note: Scalars['String'];
  doctorId: Scalars['Int'];
  patientId: Scalars['Int'];
}>;


export type CreateScanMutation = { __typename?: 'Mutation', createScan: { __typename?: 'Scan', id: number, uri: string, diagnosis: string, note?: string | null, doctorId: number, patientId: number, updatedAtString: string } };

export type DeleteScanMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteScanMutation = { __typename?: 'Mutation', deleteScan: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, email: string } | null, error?: { __typename?: 'Error', field: string, message: string } | null } };

export type UpdateScanMutationVariables = Exact<{
  id: Scalars['Int'];
  diagnosis: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
}>;


export type UpdateScanMutation = { __typename?: 'Mutation', updateScan: boolean };

export type GetPatientScansQueryVariables = Exact<{
  patientId: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetPatientScansQuery = { __typename?: 'Query', getPatientScans: Array<{ __typename?: 'Scan', id: number, uri: string, updatedAtString: string, diagnosis: string, patient: { __typename?: 'Patient', id: number, mrn: string } }> };

export type GetPatientsQueryVariables = Exact<{
  doctorId: Scalars['Int'];
}>;


export type GetPatientsQuery = { __typename?: 'Query', getPatients: Array<{ __typename?: 'Patient', id: number, mrn: string, doctorId: number, updatedAt: string, updatedAtString: string, notes?: string | null, scans: Array<{ __typename?: 'Scan', id: number }>, doctor: { __typename?: 'User', id: number, firstName: string, lastName: string } }> };

export type GetRecentPatientsQueryVariables = Exact<{
  doctorId: Scalars['Int'];
}>;


export type GetRecentPatientsQuery = { __typename?: 'Query', getRecentPatients: Array<{ __typename?: 'Patient', id: number, mrn: string, doctorId: number, updatedAt: string, updatedAtString: string, notes?: string | null, scans: Array<{ __typename?: 'Scan', id: number }>, doctor: { __typename?: 'User', id: number, firstName: string, lastName: string } }> };

export type GetScanQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetScanQuery = { __typename?: 'Query', getScan: { __typename?: 'Scan', id: number, uri: string, diagnosis: string, note?: string | null, updatedAtString: string, patient: { __typename?: 'Patient', mrn: string } } };

export type GetScansQueryVariables = Exact<{
  doctorId: Scalars['Int'];
}>;


export type GetScansQuery = { __typename?: 'Query', getScans: Array<{ __typename?: 'Scan', id: number, uri: string, updatedAtString: string, diagnosis: string, patientId: number, patient: { __typename?: 'Patient', id: number, mrn: string } }> };


export const CreatePatientDocument = gql`
    mutation createPatient($mrn: String!, $doctorId: Int!, $notes: String!) {
  createPatient(mrn: $mrn, doctorId: $doctorId, notes: $notes) {
    patient {
      id
      mrn
      doctorId
      doctor {
        id
        firstName
        lastName
      }
      notes
      createdAt
      updatedAt
      updatedAtString
    }
    error {
      field
      message
    }
  }
}
    `;

export function useCreatePatientMutation() {
  return Urql.useMutation<CreatePatientMutation, CreatePatientMutationVariables>(CreatePatientDocument);
};
export const CreateScanDocument = gql`
    mutation createScan($uri: String!, $diagnosis: String!, $note: String!, $doctorId: Int!, $patientId: Int!) {
  createScan(
    uri: $uri
    diagnosis: $diagnosis
    note: $note
    doctorId: $doctorId
    patientId: $patientId
  ) {
    id
    uri
    diagnosis
    note
    doctorId
    patientId
    updatedAtString
  }
}
    `;

export function useCreateScanMutation() {
  return Urql.useMutation<CreateScanMutation, CreateScanMutationVariables>(CreateScanDocument);
};
export const DeleteScanDocument = gql`
    mutation deleteScan($id: Int!) {
  deleteScan(id: $id)
}
    `;

export function useDeleteScanMutation() {
  return Urql.useMutation<DeleteScanMutation, DeleteScanMutationVariables>(DeleteScanDocument);
};
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
export const UpdateScanDocument = gql`
    mutation updateScan($id: Int!, $diagnosis: String!, $note: String) {
  updateScan(id: $id, diagnosis: $diagnosis, note: $note)
}
    `;

export function useUpdateScanMutation() {
  return Urql.useMutation<UpdateScanMutation, UpdateScanMutationVariables>(UpdateScanDocument);
};
export const GetPatientScansDocument = gql`
    query getPatientScans($patientId: Int!, $limit: Int) {
  getPatientScans(patientId: $patientId, limit: $limit) {
    id
    uri
    updatedAtString
    diagnosis
    patient {
      id
      mrn
    }
  }
}
    `;

export function useGetPatientScansQuery(options: Omit<Urql.UseQueryArgs<GetPatientScansQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPatientScansQuery>({ query: GetPatientScansDocument, ...options });
};
export const GetPatientsDocument = gql`
    query getPatients($doctorId: Int!) {
  getPatients(doctorId: $doctorId) {
    id
    mrn
    doctorId
    updatedAt
    updatedAtString
    notes
    scans {
      id
    }
    doctor {
      id
      firstName
      lastName
    }
  }
}
    `;

export function useGetPatientsQuery(options: Omit<Urql.UseQueryArgs<GetPatientsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPatientsQuery>({ query: GetPatientsDocument, ...options });
};
export const GetRecentPatientsDocument = gql`
    query getRecentPatients($doctorId: Int!) {
  getRecentPatients(doctorId: $doctorId) {
    id
    mrn
    doctorId
    updatedAt
    updatedAtString
    notes
    scans {
      id
    }
    doctor {
      id
      firstName
      lastName
    }
  }
}
    `;

export function useGetRecentPatientsQuery(options: Omit<Urql.UseQueryArgs<GetRecentPatientsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRecentPatientsQuery>({ query: GetRecentPatientsDocument, ...options });
};
export const GetScanDocument = gql`
    query getScan($id: Int!) {
  getScan(id: $id) {
    id
    uri
    diagnosis
    note
    patient {
      mrn
    }
    updatedAtString
  }
}
    `;

export function useGetScanQuery(options: Omit<Urql.UseQueryArgs<GetScanQueryVariables>, 'query'>) {
  return Urql.useQuery<GetScanQuery>({ query: GetScanDocument, ...options });
};
export const GetScansDocument = gql`
    query getScans($doctorId: Int!) {
  getScans(doctorId: $doctorId) {
    id
    uri
    updatedAtString
    diagnosis
    patientId
    patient {
      id
      mrn
    }
  }
}
    `;

export function useGetScansQuery(options: Omit<Urql.UseQueryArgs<GetScansQueryVariables>, 'query'>) {
  return Urql.useQuery<GetScansQuery>({ query: GetScansDocument, ...options });
};