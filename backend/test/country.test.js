const app = require("../server")
const request = require('supertest')

describe("Endpiont GET/countries", () => {
    test('Req whithout "valor" queryParam - should respond with a 400 status code', async() => {
        const response = await request(app).get('/countries').send();
        expect(response.status).toBe(400)
    })
    
    test('Req with less than 3 chars - should respond with a 204 status code', async() => {
        const response = await request(app).get('/countries/?valor=ab').send();
        expect(response.status).toBe(204)
    })
    
    test('Correct request - should respond with a 200 status code', async() => {
        const response = await request(app).get('/countries/?valor=ind').send();
        expect(response.status).toBe(200)
    })    
    
    test('Correct request with "valor"="ind" - should return between 0 and 5 countries', async() => {
        const response = await request(app).get('/countries/?valor=ind').send();
        expect(response.body.countries.length).toBeGreaterThanOrEqual(2)
        expect(response.body.countries.length).toBeLessThanOrEqual(5)
    })   
    test('Correct request with "valor"="asdds" - shouldnt return countries', async() => {
        const response = await request(app).get('/countries/?valor=asdds').send();
        expect(response.body.countries.length).toBe(0)
    })    
})

describe("Routes", () => {
    test('Invalid route request - should respond with a 404 status code', async() => {
        const response = await request(app).get('/other').send();
        expect(response.status).toBe(404)
    })
    
    test('Empty route request - should respond with a 404 status code', async() => {
        const response = await request(app).get('').send();
        expect(response.status).toBe(404)
    })
})
