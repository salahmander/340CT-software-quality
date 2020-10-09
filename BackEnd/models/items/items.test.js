const items = require('./items')

const connData = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'acerreseller'
};

const itemData = {
    userID: 140,
    title: "Aspire 3",
    device: "laptop",
    type: "Classic",
    CPU: "intel i7 7700",
    RAM: "16 GB",
    GPU: "GTX 1080",
    storage: "SSD",
    size: "500GB",
    price: "1577"
}


describe('getAll', () => {
    test(`retrieving all computer information`, done => {
        items.getAll(connData, (err) => {
            expect(err).toBeNull()
            done()
        })
    })
})

describe('add', () => {

    test('adding new order', done => {
        items.add(connData, itemData, (err) => {
            expect(err).toBeNull()
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

    test('Trying to add new purchase with incorrect database data', done => {
        items.add(connData, itemData, (err) => {
            expect(err.message.length).toBeGreaterThan(1)
            done()
        })
    })

    test('Trying to get all items with incorrect database data', done => {
        items.getAll(connData, (err) => {
            expect(err.message.length).toBeGreaterThan(1)
            done()
        })
    })

})