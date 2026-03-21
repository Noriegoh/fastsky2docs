// import { defineConfig } from 'vitepress'

// // https://vitepress.dev/reference/site-config
// export default defineConfig({
//   srcDir: "src",

//   title: "Fast Sky Documentation",
//   description: "Procedural Skybox Shader for Unity",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'Examples', link: '/markdown-examples' }
//     ],

//     sidebar: [
//       {
//         text: 'Examples',
//         items: [
//           { text: 'Markdown Examples', link: '/markdown-examples' },
//           { text: 'Runtime API Examples', link: '/api-examples' }
//         ]
//       }
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     ]
//   }
// })
import { defineConfig, type DefaultTheme } from 'vitepress'

let webLaunch = true;
import pkg from '../../package.json'
let base = webLaunch ? '/fastsky2docs/' : './';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fast Sky 2",
  description: "Sky Solution for Unity",
  buildConcurrency: 100,
  base: base,
  cleanUrls: webLaunch,
  outDir: "../build",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    footer: {
      message: `Version : ${pkg.version}`,
      copyright: 'Copyright © 2025-present Norex'
    },
    sidebar: [
      { text: 'Setup', link: '/setup' },
      {
        text: 'Fast Sky Component', link: '/fast-sky-component',
        items:
          [
            { text: 'Atmosphere', link: '/atmosphere-settings' },
            { text: 'Clouds', link: '/cloud-settings' },
            { text: 'Godrays', link: '/godrays-settings' },
            { text: 'Moon', link: '/moon-settings' },
            { text: 'Stars', link: '/star-settings' },
            { text: 'Skymaps', link: '/skymap-settings' }
          ]
      },
      { text: 'State Blending', link: '/state-blending' },
      { text: 'Best Practices', link: '/best-practices' },
      { text: 'Glossary', link: '/glossary' }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/nTn9GxhWAn' },
      { icon: 'youtube', link: ' https://www.youtube.com/channel/UCNRZ2fL6qdZ4Xq6gJetqiIw' }
    ],
    search: !webLaunch ? undefined : {
      provider: 'local',
    }
  },
  appearance: webLaunch ? 'dark' : 'force-dark',
  srcDir: "./src",
  head: [
    [
      `link`, { rel: 'icon', href: `${base}favicon-small.png` },
    ],
    [
      `meta`, { name: 'referrer', content: 'same-origin' },
    ]
  ],
  router: { prefetchLinks: false },
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    }
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Manual',
      link: 'setup',
    },
    {
      text: 'Changelog',
      link: 'changelog',
    }
  ]
}