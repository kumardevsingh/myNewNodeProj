const path = require('path');
// not in use now
//module.exports = path.dirname(process.mainModule.filename);

module.exports = path.dirname(require.main.filename);
