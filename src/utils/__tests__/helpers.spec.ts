import { encodeUrl } from "../helpers";

describe("helpers", () => {
  it("encodeUrl", () => {
    expect(encodeUrl("Hello World")).toBe("hello-world");
    expect(encodeUrl('4 Projects in 4 Months')).toContain('4-projects-in-4-months');
  });
});
