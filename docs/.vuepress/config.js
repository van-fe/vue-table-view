const markdownItTaskLists = require('markdown-it-task-lists');

module.exports = {
  title: 'vue-table-view',
  description: 'An one line html code advance table component',
  lang: 'zh-CN',
  base: '/vue-table-view/',
  markdown: {
    extendMarkdown: md => {
      md.use(markdownItTaskLists)
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '语言',
        label: '中文'
      },
      '/en/': {
        selectText: 'Language',
        label: 'English'
      }
    },
    nav: [
      { text: '指南', link: '/' },
      { text: '使用', link: '/use/advance-search' },
      { text: '配置', link: '/config/global-config' },
      { text: '演示', link: 'https://van-fe.github.io/vue-table-view-preview/' },
    ],
    repo: 'van-fe/vue-table-view',
    '/zh/': {
      sidebar: 'auto'
    },
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
  }
}