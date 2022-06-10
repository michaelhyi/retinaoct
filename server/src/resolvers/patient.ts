import { Patient } from "../entities/Patient";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { PatientResponse } from "../utils/types";
import { User } from "../entities/User";

@Resolver()
export class PatientResolver {
  @Query(() => [Patient])
  async getPatients(@Arg("doctorId") doctorId: number): Promise<Patient[]> {
    const patients = await Patient.find({ where: { doctorId } });
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
