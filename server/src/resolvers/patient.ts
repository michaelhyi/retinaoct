import { format } from "date-fns";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Patient } from "../entities/Patient";
import { PatientResponse } from "../utils/types";

@Resolver()
export class PatientResolver {
  @Query(() => [Patient])
  async getPatients(
    @Arg("doctorId", () => Int) doctorId: number,
    @Arg("limit", () => Int, { nullable: true }) limit: number | null
  ): Promise<Patient[]> {
    let patients;
    if (limit) {
      patients = await Patient.find({
        where: { doctorId },
        order: {
          updatedAt: "DESC",
        },
        take: limit,
      });
    } else {
      patients = await Patient.find({
        where: { doctorId },
        order: {
          updatedAt: "DESC",
        },
      });
    }

    return patients;
  }

  @Mutation(() => PatientResponse)
  async createPatient(
    @Arg("mrn") mrn: string,
    @Arg("doctorId") doctorId: number,
    @Arg("notes") notes: string
  ): Promise<PatientResponse> {
    let patient;
    try {
      patient = await Patient.create({
        mrn,
        doctorId,
        notes,
      }).save();
    } catch (e) {
      if (
        e.detail.includes("already exists") ||
        e.detail.includes("duplicate key")
      ) {
        return {
          error: {
            field: "MRN",
            message: "Patient already exists.",
          },
        };
      }
    }

    return { patient };
  }
}
