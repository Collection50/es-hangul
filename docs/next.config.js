// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  mdxOptions: {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    remarkPlugins: [require('remark-sandpack').remarkSandpack],
  },
});

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
  },
});
