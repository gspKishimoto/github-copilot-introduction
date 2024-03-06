const require = require("commonjs");
const { getUsers } = require("./apiTest");
const { describe, it, expect } = require("jest");

describe("getUsers", () => {
  it("should return an array of users", () => {
    const expectedUsers = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
      { id: 3, name: "Bob Johnson" },
    ];

    const result = getUsers();

    expect(result).toEqual(expectedUsers);
  });
});
