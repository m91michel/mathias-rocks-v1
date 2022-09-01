import { openGraph, OpenGraphType } from "../og-image";

describe("og-image", () => {
  it("includes all attributes", () => {
    const props: OpenGraphType = {
      siteName: "siteName",
      description: "description",
      templateTitle: "templateTitle",
      logo: "logo",
      theme: "dark",
    };
    const url = openGraph(props);

    expect(url).toContain(props.siteName);
    expect(url).toContain(props.description);
    expect(url).toContain(props.templateTitle);
    expect(url).toContain(props.logo);
    expect(url).toContain(props.theme);
  });

  it("includes all attributes", () => {
    const props: OpenGraphType = {
      siteName: "siteName",
      description: "description",
    };
    const url = openGraph(props);

    expect(url).toContain(props.siteName);
    expect(url).toContain(props.description);
    expect(url).not.toContain("templateTitle");
  });

  it("includes all attributes", () => {
    const props: OpenGraphType = {
      siteName: "siteName",
      description: "description",
    };
    const url = openGraph(props);
    expect(url).toBe(
      "https://og-image.mathias.rocks/api/blog?siteName=siteName&description=description&theme=dark"
    );
  });
});
