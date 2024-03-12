const genId1 = require('uojc_xid');
const genId2 = require('rnop_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|7Zg4z0vJxe|' + genId2()).digest('base64');
}


module.exports = generateKey;
