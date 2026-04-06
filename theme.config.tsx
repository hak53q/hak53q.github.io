import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "nextra/hooks";

const config: DocsThemeConfig = {
  logo: <span>Docs Template</span>,

  search: {
    placeholder: "Search documentation..."
  },

  project: {
    link: "https://github.com/ericx20/zz-method-docs",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/ericx20/zz-method-docs/tree/main",
  // banner: {
  //   key: "2025-08-13_yoruba_zzwr",
  //   content: <Link href="/blog/yoruba-6.51-zzwr">6.51 ZZ World Record average by Yoruba!</Link>,
  // },
  // i18n: [
  //   { locale: 'en', name: 'English' },
  // ],
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://zzmethod.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    const isHomepage = asPath === "/" || asPath === `/${locale}${asPath}`;
    const titleText = "Docs Template";
    const defaultDescription = "A minimal documentation site template";
    return (
      <>
        <title>{(isHomepage || !frontMatter.title) ? titleText : `${frontMatter.title} – ${titleText}`}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || titleText} />
        <meta
          property="og:description"
          content={
            frontMatter.description || defaultDescription
          }
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    );
  },
  main: ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();
    return (
      <>
        <h1 className="_mt-2 _mb-2 _text-4xl _font-bold _tracking-tight">
          {frontMatter?.title}
        </h1>
        {frontMatter?.date && (
          <p className="_block _text-sm _text-gray-500 dark:_text-gray-400">
            {frontMatter.date}
          </p>
        )}
        {frontMatter?.author && (
          <p className="_block _text-sm _text-gray-500 dark:_text-gray-400">
            {`By ${frontMatter.author}`}
          </p>
        )}
        <div>{children}</div>
      </>
    );
  },

  toc: {
    float: true,
    title: "On This Page",
    backToTop: "Scroll to top",
  },

  feedback: {
    content: "Question? Give feedback →"
  },

  editLink: {
    content: "Edit this page"
  },

  gitTimestamp: ({ timestamp }) => {
    const { locale } = useRouter();
    return (
      <>
        Last updated on{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    )
  },

  footer: {
    content: "Built with Nextra",
  },
};

export default config;
