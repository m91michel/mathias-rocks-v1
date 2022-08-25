export type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
  theme?: "dark" | "light";
  ogType?: "general" | "blog" | "gradient" | "personal";
};
const queryComponent = (key: string, value: string = "") => {
  return value ? `${key}=${encodeURIComponent(value.trim())}` : "";
};
const deploymentURL = "https://og-image.mathias.rocks";
export const openGraph = ({ siteName, templateTitle, description, logo, theme = "dark", ogType = "blog" }: OpenGraphType) => {
  const elements = [
    queryComponent("siteName", siteName),
    queryComponent("description", description),
    queryComponent("templateTitle", templateTitle),
    queryComponent("logo", logo),
    queryComponent("theme", theme),
  ];

  return `${deploymentURL}/api/${ogType}?${elements.filter((v) => Boolean(v)).join("&")}`;
};
