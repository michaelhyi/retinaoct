import { Scan } from "../entities/Scan";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { format } from "date-fns";

@Resolver()
export class ScanResolver {
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
    }).save();

    return scan;
  }
}
