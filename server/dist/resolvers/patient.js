"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientResolver = void 0;
const date_fns_1 = require("date-fns");
const type_graphql_1 = require("type-graphql");
const Patient_1 = require("../entities/Patient");
const types_1 = require("../utils/types");
let PatientResolver = class PatientResolver {
    async getPatients(doctorId, limit) {
        let patients;
        if (limit) {
            patients = await Patient_1.Patient.find({
                where: { doctorId },
                order: {
                    updatedAt: "DESC",
                },
                take: limit,
            });
        }
        else {
            patients = await Patient_1.Patient.find({
                where: { doctorId },
                order: {
                    updatedAt: "DESC",
                },
            });
        }
        return patients;
    }
    async createPatient(mrn, doctorId, notes) {
        let patient;
        try {
            patient = await Patient_1.Patient.create({
                mrn,
                doctorId,
                notes,
                updatedAtString: (0, date_fns_1.format)(new Date(), "P p"),
            }).save();
        }
        catch (e) {
            if (e.detail.includes("already exists") ||
                e.detail.includes("duplicate key")) {
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
};
__decorate([
    (0, type_graphql_1.Query)(() => [Patient_1.Patient]),
    __param(0, (0, type_graphql_1.Arg)("doctorId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("limit", () => type_graphql_1.Int, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "getPatients", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.PatientResponse),
    __param(0, (0, type_graphql_1.Arg)("mrn")),
    __param(1, (0, type_graphql_1.Arg)("doctorId")),
    __param(2, (0, type_graphql_1.Arg)("notes")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "createPatient", null);
PatientResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], PatientResolver);
exports.PatientResolver = PatientResolver;
//# sourceMappingURL=patient.js.map