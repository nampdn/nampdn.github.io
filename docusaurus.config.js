module.exports = {
  title: "nampdn",
  tagline: '"Keep Thinking, Seek Sourcing"',
  url: "https://nampdn.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "nampdn", // Usually your GitHub org/user name.
  projectName: "nampdn", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "nampdn",
      logo: {
        alt: "nampdn",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/doc1", label: "Explore", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/nampdn",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Explore",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1"
            },
            {
              label: "Second Doc",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Projects",
          items: [
            {
              label: "VGM TV",
              href: "https://vgm.tv"
            },
            {
              label: "DISC Test",
              href: "https://disctest.net"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/nampdn"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/_nampdn"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
