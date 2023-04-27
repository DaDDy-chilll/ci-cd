const superTest = require("supertest");
const app = require("./app");
const request = superTest(app);

describe("Test Get /names", () => {
  test("It Should respond name with 200 success", async () => {
    const data = await request
      .get("/names")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(data.body.name).toBe("DaDDy Chill");
  });
});
