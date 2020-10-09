const con = require('../database')

const connData = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'acerreseller'
};

describe('Database', () => {

    test('Connect to database', done => {
        con.connect(connData, (err) => {
            expect(err).toBeNull()
            done()
        })
    })
})