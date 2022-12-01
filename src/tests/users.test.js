const supertest = require("supertest");
const app = require("../app");
const { Users } = require("../models");
const server = require("../server");
const db = require("../utils/database");

const api = supertest(app);
const token =
	"Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJFcmVuIFllYWdlciIsImVtYWlsIjoiZXJlbkBnbWFpbC5jb20iLCJpYXQiOjE2Njk5MzU3NjgsImV4cCI6MTY2OTkzOTM2OH0.huO37-cOfuoAWQ4MOgeqris55Td0J7YRaIHnX_B6a8kJkr9FANxKRlmiLqq2KyHI3tPzIHtHe0fJ43hyjd8uEA";

describe("GET users endpoints test", () => {
	test("test if get /api/v1/users endpoint returns a json", async () => {
		await api
			.get("/api/v1/users")
			.set({ Authorization: token })
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});
	test("test if get /api/v1/users endpoint returns an array", async () => {
		const { body } = await api
			.get("/api/v1/users")
			.set({ Authorization: token });
		expect(body).toBeInstanceOf(Array);
	});
});

describe("POST users endpoints test", () => {
	test("user created", async () => {
		const user = {
			username: "Daniel Perez",
			email: "daniel@gmail.com",
			password: "777dfgs"
		};
		await api.post("/api/v1/users").send(user).expect(201);
	});
});

afterAll(async () => {
    await Users.destroy({ where: { email: "daniel@gmail.com"} });
	server.close();
	db.close();
});
