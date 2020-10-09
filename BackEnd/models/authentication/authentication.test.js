const authentication = require('./authentication')

describe('Authenticaion header', () => {

    const connData = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'acerreseller'
    };

    const request = {
        headers: {
            authorization: undefined
        }
    }

    const loginData = {
        name: undefined,
        pass: undefined
    }

    test('No auth header', done => {
        authentication.loginUser(connData, request, loginData, (err) => {
            expect(err.message).toBe("Authorization header missing")
            expect(err.code).toBe(401)
            done()
        })

    })
})

describe('Authentication user', () => {

    const connData = {
        host: 'localhost',
        user: 'root',
        password: '555',
        database: 'acerreseller'
    };

    const request = {
        headers: {
            authorization: "Basic"
        }
    }

    const loginData = {
        name: undefined,
        pass: undefined
    }

    test('no password or username', done => {
        authentication.loginUser(connData, request, loginData, (err) => {
            expect(err.message).toBe("missing username or password")
            expect(err.code).toBe(401)
            done()
        })

    })
})

describe('database connection', () => {
    const connData = {
        host: 'localhost',
        user: 'root',
        password: '555',
        database: 'acerreseller'
    };

    const loginData = {
        name: "abdos",
        pass: "Password01."
    }

    const request = {
        headers: {
            authorization: "Basic"
        }
    }

    test('Trying to connec to database with incorrect password', done => {
        authentication.loginUser(connData, request, loginData, (err) => {
            expect(loginData.name.length).toBeGreaterThan(1)
            expect(loginData.pass.length).toBeGreaterThan(1)
            expect(err.code).toBe(500)
            done()
        })
    })
})

describe('correct Authenticaion', () => {

    const connData = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'acerreseller'
    };

    const loginData = {
        name: "abdos",
        pass: "Password01."
    }

    const request = {
        headers: {
            authorization: "Basic"
        }
    }
    test('Correct login authenticaion', done => {
        authentication.loginUser(connData, request, loginData, (err,result) => {
            expect(err).toBeNull
            done()
        })
    })

})

describe('failed user Authenication', () => {
    const connData = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'acerreseller'
    };

    const loginData = {
        name: "skengo",
        pass: "CrachGoesCrash01."
    }

    const request = {
        headers: {
            authorization: "Basic"
        }
    }
    test('No records of the username', done => {
        authentication.loginUser(connData, request, loginData, (err,result) => {
            expect(err.code).toBe(401)
            expect(err.message).toBe("wrong username or password")
            done()
        })
    })
})