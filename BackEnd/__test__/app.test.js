const app = require('../app')
const request = require('supertest')

const databaseData = {
    host: 'localhost',
    user: 'root',
    password: '55',
    database: 'acerreseller'
};

describe("Computer", () => {

    test('/computers should return 201', (done) => {
        request(app).get('/api/v1.0/computers').then((response) => {
            expect(response.statusCode).toBe(201)
            done();
        })
    });
})


describe("purchase", () => {

    const itemData = {
        userID: 5,
        title: "acer aspire 3",
        device: "laptop",
        type: "Gaming",
        CPU: "i7",
        RAM: "16GB",
        GPU: "GTX 1080",
        storage: "SSD",
        size: "500GB",
        price: 500
    }


    test('/purchase should return 201', async () => {
        const response = await request(app).post('/api/v1.0/purchase')
            .send(itemData)
        expect(response.statusCode).toBe(201)
    })
})

describe("User", () => {
    let userData = {
        firstName: "Skengdo",
        surname: "jaabir",
        email: "twobunny@hotmail.co.uk",
        username: "code",
        password: "Password01."
    }

    test('/purchase should return 201', async () => {
        const response = await request(app).post('/api/v1.0/users')
            .send(userData)
        expect(response.statusCode).toBe(201)
    })

    test('/users should return 201', (done) => {
        request(app).get('/api/v1.0/users').then((response) => {
            expect(response.statusCode).toBe(201)
            done();
        })
    });

});

describe("Login", () => {
    const loginData = {
        username: "abdos",
        password: "Password01."
    }
    test('/login should return 401', async () => {
        const response = await request(app).post('/api/v1.0/login')
        expect(response.statusCode).toBe(401)
    })
})
