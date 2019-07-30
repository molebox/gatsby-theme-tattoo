import { graphql, useStaticQuery } from "gatsby";

interface Sitemetadata {
  title: string;
  description: string;
}

/**
 * Hook to provide the site meta data.
 * Provides title, description and author
 */
export function useSiteMetadata(): Sitemetadata {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
}
