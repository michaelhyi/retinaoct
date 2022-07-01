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
  clearAllPatients: Scalars['Boolean'];
  clearAllScans: Scalars['Boolean'];
  createPatient: PatientResponse;
  createScan: Scan;
  deletePatient: Scalars['Boolean'];
  deleteScan: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: UserResponse;
  register: UserResponse;
  setAi: Scalars['Boolean'];
  updatePatient: Scalars['Boolean'];
  updateScan: Scalars['Boolean'];
};


export type MutationClearAllPatientsArgs = {
  id: Scalars['Int'];
};


export type MutationClearAllScansArgs = {
  id: Scalars['Int'];
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


export type MutationDeletePatientArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteScanArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
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


export type MutationSetAiArgs = {
  ai?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Int'];
};


export type MutationUpdatePatientArgs = {
  id: Scalars['Int'];
  mrn: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
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
  getAi: Scalars['Boolean'];
  getPatient: Patient;
  getPatientScans: Array<Scan>;
  getPatients: Array<Patient>;
  getRecentPatients: Array<Patient>;
  getScan: Scan;
  getScans: Array<Scan>;
  getUsers: Array<User>;
};


export type QueryGetAiArgs = {
  id: Scalars['Int'];
};


export type QueryGetPatientArgs = {
  id: Scalars['Int'];
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
  ai: Scalars['Boolean'];
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

export type ClearAllPatientsMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ClearAllPatientsMutation = { __typename?: 'Mutation', clearAllPatients: boolean };

export type ClearAllScansMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ClearAllScansMutation = { __typename?: 'Mutation', clearAllScans: boolean };

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

export type DeletePatientMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePatientMutation = { __typename?: 'Mutation', deletePatient: boolean };

export type DeleteScanMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteScanMutation = { __typename?: 'Mutation', deleteScan: boolean };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, email: string } | null, error?: { __typename?: 'Error', field: string, message: string } | null } };

export type SetAiMutationVariables = Exact<{
  id: Scalars['Int'];
  ai?: InputMaybe<Scalars['Boolean']>;
}>;


export type SetAiMutation = { __typename?: 'Mutation', setAi: boolean };

export type UpdatePatientMutationVariables = Exact<{
  id: Scalars['Int'];
  mrn: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
}>;


export type UpdatePatientMutation = { __typename?: 'Mutation', updatePatient: boolean };

export type UpdateScanMutationVariables = Exact<{
  id: Scalars['Int'];
  diagnosis: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
}>;


export type UpdateScanMutation = { __typename?: 'Mutation', updateScan: boolean };

export type GetAiQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAiQuery = { __typename?: 'Query', getAi: boolean };

export type GetPatientQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPatientQuery = { __typename?: 'Query', getPatient: { __typename?: 'Patient', id: number, mrn: string, notes?: string | null, updatedAtString: string, doctor: { __typename?: 'User', id: number, firstName: string, lastName: string } } };

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


export type GetScanQuery = { __typename?: 'Query', getScan: { __typename?: 'Scan', id: number, uri: string, diagnosis: string, note?: string | null, updatedAtString: string, patient: { __typename?: 'Patient', id: number, mrn: string } } };

export type GetScansQueryVariables = Exact<{
  doctorId: Scalars['Int'];
}>;


export type GetScansQuery = { __typename?: 'Query', getScans: Array<{ __typename?: 'Scan', id: number, uri: string, updatedAtString: string, diagnosis: string, patientId: number, patient: { __typename?: 'Patient', id: number, mrn: string } }> };


export const ClearAllPatientsDocument = gql`
    mutation clearAllPatients($id: Int!) {
  clearAllPatients(id: $id)
}
    `;

export function useClearAllPatientsMutation() {
  return Urql.useMutation<ClearAllPatientsMutation, ClearAllPatientsMutationVariables>(ClearAllPatientsDocument);
};
export const ClearAllScansDocument = gql`
    mutation clearAllScans($id: Int!) {
  clearAllScans(id: $id)
}
    `;

export function useClearAllScansMutation() {
  return Urql.useMutation<ClearAllScansMutation, ClearAllScansMutationVariables>(ClearAllScansDocument);
};
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
export const DeletePatientDocument = gql`
    mutation deletePatient($id: Int!) {
  deletePatient(id: $id)
}
    `;

export function useDeletePatientMutation() {
  return Urql.useMutation<DeletePatientMutation, DeletePatientMutationVariables>(DeletePatientDocument);
};
export const DeleteScanDocument = gql`
    mutation deleteScan($id: Int!) {
  deleteScan(id: $id)
}
    `;

export function useDeleteScanMutation() {
  return Urql.useMutation<DeleteScanMutation, DeleteScanMutationVariables>(DeleteScanDocument);
};
export const DeleteUserDocument = gql`
    mutation deleteUser($id: Int!) {
  deleteUser(id: $id)
}
    `;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument);
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
export const SetAiDocument = gql`
    mutation setAi($id: Int!, $ai: Boolean) {
  setAi(id: $id, ai: $ai)
}
    `;

export function useSetAiMutation() {
  return Urql.useMutation<SetAiMutation, SetAiMutationVariables>(SetAiDocument);
};
export const UpdatePatientDocument = gql`
    mutation updatePatient($id: Int!, $mrn: String!, $notes: String) {
  updatePatient(id: $id, mrn: $mrn, notes: $notes)
}
    `;

export function useUpdatePatientMutation() {
  return Urql.useMutation<UpdatePatientMutation, UpdatePatientMutationVariables>(UpdatePatientDocument);
};
export const UpdateScanDocument = gql`
    mutation updateScan($id: Int!, $diagnosis: String!, $note: String) {
  updateScan(id: $id, diagnosis: $diagnosis, note: $note)
}
    `;

export function useUpdateScanMutation() {
  return Urql.useMutation<UpdateScanMutation, UpdateScanMutationVariables>(UpdateScanDocument);
};
export const GetAiDocument = gql`
    query getAi($id: Int!) {
  getAi(id: $id)
}
    `;

export function useGetAiQuery(options: Omit<Urql.UseQueryArgs<GetAiQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAiQuery>({ query: GetAiDocument, ...options });
};
export const GetPatientDocument = gql`
    query getPatient($id: Int!) {
  getPatient(id: $id) {
    id
    mrn
    doctor {
      id
      firstName
      lastName
    }
    notes
    updatedAtString
  }
}
    `;

export function useGetPatientQuery(options: Omit<Urql.UseQueryArgs<GetPatientQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPatientQuery>({ query: GetPatientDocument, ...options });
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
      id
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