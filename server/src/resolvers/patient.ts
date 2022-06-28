import { format } from "date-fns";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Patient } from "../entities/Patient";
import { PatientResponse } from "../utils/types";

@Resolver()
export class PatientResolver {
  @Query(() => [Patient])
  async getPatients(
    @Arg("doctorId", () => Int) doctorId: number
  ): Promise<Patient[]> {
    const patients = await Patient.find({
      where: { doctorId },
      order: {
        id: "ASC",
      },
    });
    return patients;
  }

  @Query(() => [Patient])
  async getRecentPatients(
    @Arg("doctorId", () => Int) doctorId: number
  ): Promise<Patient[]> {
    const patients = await Patient.find({
      where: { doctorId },
      order: {
        updatedAt: "DESC",
      },
      take: 4,
    });
    return patients;
  }

  @Mutation(() => PatientResponse)
  async createPatient(
    @Arg("mrn") mrn: string,
    @Arg("doctorId", () => Int) doctorId: number,
    @Arg("notes") notes: string
  ): Promise<PatientResponse> {
    const patients = await Patient.find({
      where: { doctorId },
    });
    const index = patients.map((v) => v.mrn).indexOf(mrn);

    if (index > -1) {
      return {
        error: {
          field: "MRN",
          message: "Patient already exists.",
        },
      };
    }

    const patient = await Patient.create({
      mrn,
      doctorId,
      notes,
      updatedAtString: format(new Date(), "P p"),
      scans: [],
    }).save();
    return { patient };
  }
}
