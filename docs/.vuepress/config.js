const markdownItTaskLists = require('markdown-it-task-lists');

module.exports = {
  title: 'vue-table-view',
  lang: 'zh-CN',
  base: '/vue-table-view/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'vue-table-view',
      description: '一行HTML代码的高级表格组件'
    },
    '/en/': {
      lang: 'en-US',
      title: 'vue-table-view',
      description: 'An one line html code advance table component'
    },
  },
  markdown: {
    extendMarkdown: md => {
      md.use(markdownItTaskLists)
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '语言',
        label: '中文',
        nav: [
          { text: '指南', link: '/' },
          { text: '使用', link: '/use/advance-search' },
          { text: '配置', link: '/config/global-config' },
          { text: '演示', link: 'https://vue-table-view-preview.microrice.vip/' },
        ],
        sidebar: [
          {
            title: '开始',
            collapsable: false,
            children: [
              {
                title: '介绍',
                path: '/'
              },
              {
                title: '如何使用',
                path: '/start/how-to-use'
              },
              {
                title: '依赖',
                path: '/start/dependence'
              },
              {
                title: '适用人群',
                path: '/start/suit-for'
              },
              {
                title: '未来支持',
                path: '/start/will-support'
              }
            ]
          },
          {
            title: '使用',
            collapsable: false,
            children: [
              {
                title: '高级搜索',
                path: '/use/advance-search'
              }, {
                title: '工具栏',
                path: '/use/tools-bar'
              }, {
                title: '数据展示',
                path: '/use/data-view'
              }, {
                title: '分页',
                path: '/use/pagination'
                // }, {
                //   title: '创建/修改弹框',
                //   path: '/use/create-edit-dialog'
              }
            ]
          },
          {
            title: '配置',
            collapsable: false,
            children: [
              {
                title: '全局配置',
                path: '/config/global-config'
              }, {
                title: '组件配置',
                path: '/config/component-config'
              }, {
                title: '操作栏配置',
                path: '/config/operation-config'
              }, {
                title: '列配置',
                path: '/config/column-config'
              }, {
                title: '高级搜索配置',
                path: '/config/advanced-search-config'
              }
            ]
          }
        ]
      },
      '/en/': {
        selectText: 'Language',
        label: 'English',
        nav: [
          { text: 'Start', link: '/en/' },
          { text: 'Usage', link: '/en/use/advance-search' },
          { text: 'Config', link: '/en/config/global-config' },
          { text: 'Preview', link: 'https://vue-table-view-preview.microrice.vip/' },
        ],
        sidebar: [
          {
            title: 'Start',
            collapsable: false,
            children: [
              {
                title: 'Introduce',
                path: '/en/'
              },
              {
                title: 'How to use',
                path: '/en/start/how-to-use'
              },
              {
                title: 'Dependence',
                path: '/en/start/dependence'
              },
              {
                title: 'Suit for',
                path: '/en/start/suit-for'
              },
              {
                title: 'Will support',
                path: '/en/start/will-support'
              }
            ]
          },
          {
            title: 'Usage',
            collapsable: false,
            children: [
              {
                title: 'Advanced search',
                path: '/en/use/advance-search'
              }, {
                title: 'Tools bar',
                path: '/en/use/tools-bar'
              }, {
                title: 'Data view',
                path: '/en/use/data-view'
              }, {
                title: 'Pagination',
                path: '/en/use/pagination'
                // }, {
                //   title: '创建/修改弹框',
                //   path: '/use/create-edit-dialog'
              }
            ]
          },
          {
            title: 'Config',
            collapsable: false,
            children: [
              {
                title: 'Global config',
                path: '/en/config/global-config'
              }, {
                title: 'Component config',
                path: '/en/config/component-config'
              }, {
                title: 'Operation column config',
                path: '/en/config/operation-config'
              }, {
                title: 'Column config',
                path: '/en/config/column-config'
              }, {
                title: 'Advanced search config',
                path: '/en/config/advanced-search-config'
              }
            ]
          }
        ]
      }
    },
    repo: 'van-fe/vue-table-view',
  }
}
