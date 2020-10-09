const db = require('../../database')

module.exports.loginUser = function (conData, request, loginData, callback) {

    if (request.headers === undefined || request.headers.authorization === undefined) {

        const err = {
            message: 'Authorization header missing',
            code: 401
        };
        callback(err);
        return;
    }

    if (loginData === undefined || loginData.name === undefined || loginData.pass === undefined) {

        const err = {
            message: 'missing username or password',
            code: 401
        };
        callback(err);
        return;
    }

    db.connect(conData, function (err, data) {

        if (err) {
            err.code = 500;
            callback(err);
            return;
        }

        data.query('SELECT userID FROM user WHERE username="' + loginData.name + '" AND password= "' + loginData.pass + '"', function (err, result) {

            if (err) {
                err.code = 500;
                callback(err);
                return;
            }


            if (result && result.length > 0) {
                callback(null, { userID: result[0].userID });
            }
            else {
                const err = {
                    message: 'wrong username or password',
                    code: 401
                };
                callback(err);
            }


        });
    });

}


