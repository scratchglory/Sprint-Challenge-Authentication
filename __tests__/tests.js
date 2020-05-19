const axios = require("axios");
// test dummy
test("dum bum", () => {
  expect(1 + 1).toBe(2);
});

const supertest = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

// will destroy all after the test have ran
// will remove the teardown error
afterAll(async () => {
  await db.destroy();
});

describe("Get /, get request", () => {
  it("gets the homepage", async () => {
    // ARRANGE
    const endpoint = "/";
    const status = 200;

    // ACT
    const res = await supertest(server).get(endpoint);

    // ASSERT
    expect(res.statusCode).toBe(status);
    expect(res.type).toBe("application/json");
    expect(res.body.message).toBe("!!!WELCOME!!!");
  });
});

describe("Get /api/users", () => {
  it("returns a 401 with users because of no cred", async () => {
    // ARRANGE
    const endpoint = "/api/users";
    const status = 401;

    // ACT
    const res = await supertest(server).get(endpoint);

    // ASSERT
    expect(res.statusCode).toBe(status);
    expect(res.type).toBe("application/json");
  });

  it("gets /api/users/:id", async () => {
    const res = await supertest(server).get("/api/users/1");

    expect(res.statusCode).toBe(401);
    expect(res.type).toBe("application/json");
  });
});

describe("Get /api/auth/", () => {
  it("/register", async () => {
    const res = await supertest(server).get("/api/auth/register");

    expect(res.statusCode).toBe(404);
  });

  it("/login", async () => {
    const res = await supertest(server).get("/api/auth/login");

    expect(res.statusCode).toBe(404);
  });
});

describe("Get /api/jokes/", () => {
  it("gets jokes", async () => {
    const res = await supertest(server).get("/api/jokes");

    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
  });
});

// test("GET /api/jokes", async () => {
//   const res = await supertest(server).get("/api/jokes");
//   jest.spyOn(axios, "get");
//   jest.spyOn(console, "log");
//   expect(console.log).toHaveBeenCalledWith(expect.any(Error));
//   expect(res.statusCode).toBe(500);
// });
