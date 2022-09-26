import fs = require('fs');
import { mainDBConfig } from '../config/mainDB.config';

fs.writeFileSync('ormconfig.json', JSON.stringify(mainDBConfig, null, 2));
