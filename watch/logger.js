const log4js = require('log4js');
const logger = exports = module.exports = {};

log4js.configure('./log4js-config.json');

logger.system = log4js.getLogger('system');
