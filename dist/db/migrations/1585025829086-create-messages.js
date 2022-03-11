"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class createMessages1585025829086 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: 'messages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'user_id',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'content',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamptz',
                    isPrimary: false,
                    isNullable: false,
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamptz',
                    isPrimary: false,
                    isNullable: false,
                    default: 'now()',
                },
            ],
        });
        this.foreignKey = new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            referencedTableName: 'users',
        });
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(this.table);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable(this.table);
        });
    }
}
exports.createMessages1585025829086 = createMessages1585025829086;
//# sourceMappingURL=1585025829086-create-messages.js.map