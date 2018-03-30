const crypto = require('crypto');
function makeSecureRandom(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, function (err, buffer) {
            if (err) {
                reject(err);
            }
            else {

                let secure = {}
                secure.length = resolve.length;
                secure.size = size;
                secure.randomByte = buffer.toString('hex')
               //console.log(`Length : ${resolve.length} , Size : ${size}, Randombyte : ${buffer.toString('hex')}`)
               console.log(secure)
             
            };
        });
    });
};

async function af(){

    let random = await Promise.all(
       [makeSecureRandom(48),
        makeSecureRandom(40),
        makeSecureRandom(32),
        makeSecureRandom(24),
        makeSecureRandom(16),
        makeSecureRandom(8)])


}

af();