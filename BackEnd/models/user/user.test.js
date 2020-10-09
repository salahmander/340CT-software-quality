const user = require('./user')



const userData = {
    firstName: "Salah",
    surname: "Abdo",
    email: "abdos@uni.coventry.ac.uk",
    username: "abdos",
    password: "Password01."
}

describe('user', () => {
    const connData = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'acerreseller'
    };

    test('adding new user', done => {
        user.add(connData, userData, (err) => {
            expect(err).toBeNull
            done()
        })
    })

    test('getting all users', done => {
        user.getAll(connData, (err) => {
            expect(err).toBeNull
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

    test('Trying to add user with incorrect database data', done => {
        user.add(connData, userData, (err) => {
            expect(err.message.length).toBeGreaterThan(1)
            done()
        })
    })

    test('Trying to get all user with incorrect database data', done => {
        user.getAll(connData, (err) => {
            expect(err.message.length).toBeGreaterThan(1)
            done()
        })
    })

})