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
exports.ScanResolver = void 0;
const Scan_1 = require("../entities/Scan");
const type_graphql_1 = require("type-graphql");
let ScanResolver = class ScanResolver {
    async getScans(doctorId, limit) {
        let scans;
        if (limit) {
            scans = await Scan_1.Scan.find({
                where: { doctorId },
                order: {
                    updatedAt: "DESC",
                },
                take: limit,
            });
        }
        else {
            scans = await Scan_1.Scan.find({
                where: { doctorId },
                order: {
                    updatedAt: "DESC",
                },
            });
        }
        return scans;
    }
    async createScan(url, eye, diagnosis, note, doctorId, patientId) {
        const scan = await Scan_1.Scan.create({
            url,
            eye,
            diagnosis,
            note,
            doctorId,
            patientId,
        }).save();
        return scan;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Scan_1.Scan]),
    __param(0, (0, type_graphql_1.Arg)("doctorId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("limit", () => type_graphql_1.Int, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ScanResolver.prototype, "getScans", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Scan_1.Scan),
    __param(0, (0, type_graphql_1.Arg)("url")),
    __param(1, (0, type_graphql_1.Arg)("eye")),
    __param(2, (0, type_graphql_1.Arg)("diagnosis")),
    __param(3, (0, type_graphql_1.Arg)("note")),
    __param(4, (0, type_graphql_1.Arg)("doctorId", () => type_graphql_1.Int)),
    __param(5, (0, type_graphql_1.Arg)("patientId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], ScanResolver.prototype, "createScan", null);
ScanResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ScanResolver);
exports.ScanResolver = ScanResolver;
//# sourceMappingURL=scan.js.map