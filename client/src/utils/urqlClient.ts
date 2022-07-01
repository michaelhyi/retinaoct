import { IP_ADDRESS } from "../../constants";
import { createClient, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import {
  DeletePatientMutationVariables,
  DeleteScanMutationVariables,
} from "../generated/graphql";

export const client = createClient({
  url: `http://${IP_ADDRESS}:4000/graphql`,
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          clearAllPatients: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) =>
                info.fieldName === "getPatients" ||
                info.fieldName === "getRecentPatients" ||
                info.fieldName === "getPatient"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
          clearAllScans: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) =>
                info.fieldName === "getScan" ||
                info.fieldName === "getScans" ||
                info.fieldName === "getPatientScans"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
          updatePatient: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) =>
                info.fieldName === "getPatients" ||
                info.fieldName === "getRecentPatients" ||
                info.fieldName === "getPatient"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
          deletePatient: (_result, args, cache, _info) => {
            cache.invalidate({
              __typename: "Patient",
              id: (args as DeletePatientMutationVariables).id,
            });
          },
          updateScan: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) =>
                info.fieldName === "getScan" ||
                info.fieldName === "getScans" ||
                info.fieldName === "getPatientScans"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
          deleteScan: (_result, args, cache, _info) => {
            cache.invalidate({
              __typename: "Scan",
              id: (args as DeleteScanMutationVariables).id,
            });
          },
          createPatient: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) =>
                info.fieldName === "getPatients" ||
                info.fieldName === "getRecentPatients"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
          createScan: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) =>
                info.fieldName === "getPatientScans" ||
                info.fieldName === "getScans"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
        },
      },
    }),
    fetchExchange,
  ],
});
