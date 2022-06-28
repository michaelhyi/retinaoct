import { format } from "date-fns";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Scan } from "../entities/Scan";

@Resolver()
export class ScanResolver {
  @Query(() => [Scan])
  async getPatientScans(
    @Arg("patientId", () => Int) patientId: number,
    @Arg("limit", () => Int, { nullable: true }) limit: number | null
  ): Promise<Scan[]> {
    let scans;
    if (limit) {
      scans = await Scan.find({
        where: { patientId },
        order: {
          updatedAt: "DESC",
        },
        take: limit,
      });
    } else {
      scans = await Scan.find({
        where: { patientId },
        order: {
          updatedAt: "DESC",
        },
      });
    }

    return scans;
  }

  @Query(() => [Scan])
  async getScans(
    @Arg("doctorId", () => Int) doctorId: number,
    @Arg("limit", () => Int, { nullable: true }) limit: number | null
  ): Promise<Scan[]> {
    let scans;
    if (limit) {
      scans = await Scan.find({
        where: { doctorId },
        order: {
          updatedAt: "DESC",
        },
        take: limit,
      });
    } else {
      scans = await Scan.find({
        where: { doctorId },
        order: {
          updatedAt: "DESC",
        },
      });
    }

    return scans;
  }

  @Mutation(() => Scan)
  async createScan(
    @Arg("url") url: string,
    @Arg("eye") eye: string,
    @Arg("diagnosis") diagnosis: string,
    @Arg("note") note: string,
    @Arg("doctorId", () => Int) doctorId: number,
    @Arg("patientId", () => Int) patientId: number
  ): Promise<Scan> {
    const scan = await Scan.create({
      url,
      eye,
      diagnosis,
      note,
      doctorId,
      patientId,
      updatedAtString: format(new Date(), "P p"),
    }).save();

    return scan;
  }
}
