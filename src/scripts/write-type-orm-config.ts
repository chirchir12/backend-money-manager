import fs = require('fs');
import { mainDBConfig } from '../core/database/config/mainDB.config';

fs.writeFileSync('ormconfig.json', JSON.stringify(mainDBConfig, null, 2));
