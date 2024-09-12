import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/borukva-guide/',
  title: "Borukva Guide",
  description: "Гайд для серверу Боруква",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.avif',

    nav: [
      { text: 'Додому', link: '/' },
      { text: 'Гайд для новачків', link: '/get-started/index' },
    ],

    sidebar: [
      {
        text: 'Початок гри',
        collapsed: false,
        items: [
          { text: 'Передмова', link: '/get-started/index' },
          { text: 'Реєстрація', link: '/get-started/sign-up' },
          { text: 'Правила', link: '/get-started/rules' },
          { text: 'Лаунчер & Моди', link: '/get-started/modpack' },
          { text: 'Що робити далі?', link: '/get-started/joining' },
          { text: 'Офіційні канали сервера', link: '/get-started/channels' },
          { text: 'Команди Борукви', link: '/get-started/commands' },
          { text: 'Як отримати допомогу від адміністрації?', link: '/get-started/admin-ticket' },
          { text: 'Економіка', link: '/get-started/economics' },
          // { text: 'Об`єднання гравців', link: '/get-started/player-groups' },
          { text: 'Івенти', link: '/get-started/events' },
        ]
      },
      {
        text: 'Механіки',
        collapsed: false,
        items: [
          { text: 'Вступ', link: '/mechanics/index' },
          {text: 'Голосовий чат', link: '/mechanics/voice-chat'},
          {text: 'Мапа сервера', link: '/mechanics/dynmap'},
          {text: 'Артефакти', link: '/mechanics/artefacts'},
          {text: 'Кастомні крафти', link: '/mechanics/custom-crafts'},
          {text: 'Рейки', link: '/mechanics/rails'},
          {text: 'Риболовля', link: '/mechanics/fishing'},
          { text: 'Фермерство', link: '/mechanics/farming'},
          {text: 'Нові рослини', link: '/mechanics/new-plants'},
          { text: 'Їжа Борукви', link: '/mechanics/food'},  
          {text: 'Броварництво', link: '/mechanics/brewery'},
          {text: 'Меблі', link: '/mechanics/furniture'},
          {text: 'Полотно', link: '/mechanics/canvas'},
          {text: 'Радіо', link: '/mechanics/radio'},
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stikulzon/borukva-guide' },
      // https://vitepress.dev/reference/default-theme-config#sociallinks
    ]
  }
})
