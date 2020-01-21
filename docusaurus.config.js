module.exports = {
  title: "nampdn",
  tagline: '"keep kneeing, seek something"',
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
        { to: "docs/my-cheat-sheet", label: "Cheat Sheet", position: "left" },
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
          title: "Cheat Sheet",
          items: [
            {
              label: "Git",
              to: "docs/generate-ssh-key"
            },
            {
              label: "Docker",
              to: "docs/why-you-need-docker"
            }
          ]
        },
        {
          title: "Projects",
          items: [
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
          editUrl: "https://github.com/nampdn/nampdn/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
