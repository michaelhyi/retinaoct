import { IP_ADDRESS } from "../../constants";
import { createClient, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";

export const client = createClient({
  url: `http://${IP_ADDRESS}:4000/graphql`,
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
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
