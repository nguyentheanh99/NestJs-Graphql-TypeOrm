"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    type: 'sqlite',
    database: 'data/rocketseat.db',
    logging: true,
    entities: [__dirname + '/src/db/models/*{.ts,.js}'],
    migrations: [__dirname + '/src/db/migrations/*{.ts,.js}'],
};
module.exports = options;
//# sourceMappingURL=orm.js.map