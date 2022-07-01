import { format } from "date-fns";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Scan } from "../entities/Scan";

@Resolver()
export class ScanResolver {
  @Mutation(() => Boolean)
  async clearAllScans(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Scan.delete({ doctorId: id });
    return true;
  }

  @Query(() => Scan)
  async getScan(@Arg("id", () => Int) id: number): Promise<Scan | undefined> {
    const scan = await Scan.findOne({ where: { id } });
    return scan;
  }

  @Mutation(() => Boolean)
  async deleteScan(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Scan.delete({ id });
    return true;
  }

  @Mutation(() => Boolean)
  async updateScan(
    @Arg("id", () => Int) id: number,
    @Arg("diagnosis") diagnosis: string,
    @Arg("note", { nullable: true }) note: string
  ): Promise<boolean> {
    await getConnection()
      .getRepository(Scan)
      .createQueryBuilder()
      .update({ diagnosis, note, updatedAtString: format(new Date(), "P p") })
      .where({ id })
      .returning("*")
      .execute();

    return true;
  }

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
    @Arg("uri") uri: string,
    @Arg("diagnosis") diagnosis: string,
    @Arg("note") note: string,
    @Arg("doctorId", () => Int) doctorId: number,
    @Arg("patientId", () => Int) patientId: number
  ): Promise<Scan> {
    const scan = await Scan.create({
      uri,
      diagnosis,
      note,
      doctorId,
      patientId,
      updatedAtString: format(new Date(), "P p"),
    }).save();

    return scan;
  }
}
