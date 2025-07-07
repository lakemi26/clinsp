import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/especialidades`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicos`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sobre`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/adocao`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ambientes`,
    },
  ];
}
