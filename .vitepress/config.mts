import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Bedstom",
  description: "Minestom Libraries by Bed",
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'StomMobs', link: '/stommobs/' },
      { text: 'StomUI', link: '/stomui/' },
      { text: 'StomBoards', link: '/stomboards/' }
    ],

    sidebar: {
      '/stommobs/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Introduction', link: '/stommobs/introduction' },
            { text: 'Vanilla Profiles', link: '/stommobs/vanilla-profiles' },
            { text: 'Pathfinding', link: '/stommobs/pathfinding' }
          ]
        },
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/stommobs/getting-started/installation' },
            { text: 'Quick Start', link: '/stommobs/getting-started/quickstart' }
          ]
        },
        {
          text: 'Usage Guide',
          items: [
            { text: 'Custom Mobs', link: '/stommobs/usage/custom-mobs' }
          ]
        },
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/stommobs/api/overview' },
            { text: 'Profiles', link: '/stommobs/api/profiles' },
            { text: 'Spawning', link: '/stommobs/api/spawning' },
            { text: 'Spawn Eggs', link: '/stommobs/api/spawn-eggs' }
          ]
        }
      ],
      '/stomui/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Introduction', link: '/stomui/' },
            { text: 'Getting Started', link: '/stomui/getting-started' }
          ]
        },
        {
          text: 'Concepts',
          items: [
            { text: 'Architecture', link: '/stomui/concepts/architecture' },
            { text: 'Menu DSL', link: '/stomui/concepts/menu-dsl' },
            { text: 'Forms', link: '/stomui/concepts/forms' }
          ]
        },
        {
          text: 'Components',
          items: [
            { text: 'GUIs', link: '/stomui/guis/gui' },
            { text: 'Bedrock Forms', link: '/stomui/bedrock-forms/forms' }
          ]
        }
      ],
      '/stomboards/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Introduction', link: '/stomboards/' },
            { text: 'Getting Started', link: '/stomboards/getting-started' }
          ]
        },
        {
          text: 'Guides',
          items: [
            { text: 'Sidebar Basics', link: '/stomboards/sidebar-basics' },
            { text: 'Animations', link: '/stomboards/animations' },
            { text: 'Player Lifecycle', link: '/stomboards/lifecycle' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bed-dev/bedstom' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 bed-dev'
    }
  }
})
