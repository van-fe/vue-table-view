import { defineUserConfig } from 'vuepress';
// @ts-ignore
import markdownItTaskLists from 'markdown-it-task-lists';

export default defineUserConfig({
  title: 'vue-table-view',
  description: 'An one line html code advance table component',
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '一行html代码的高级table组件'
    }
  },
  extendsMarkdown: (md) => {
    md.use(markdownItTaskLists);
  },
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: '中文'
      },
      '/en/': {
        selectLanguageName: 'English'
      }
    },
    repo: 'van-fe/vue-table-view',
    sidebar: [
      {
        text: '开始',
        children: [
          {
            text: '介绍',
            link: '/'
          },
          {
            text: '快速使用',
            link: '/start/how-to-use'
          },
          {
            text: '依赖',
            link: '/start/dependence'
          },
          {
            text: '适用人群',
            link: '/start/suit-for'
          },
          {
            text: '未来支持',
            link: '/start/will-support'
          }
        ]
      },
      // {
      //   text: '使用',
      //   children: [
      //     {
      //       text: '高级搜索',
      //       link: '/use/advance-search'
      //     }, {
      //       text: '工具栏',
      //       link: '/use/tools-bar'
      //     }, {
      //       text: '数据展示',
      //       link: '/use/data-view'
      //     }, {
      //       text: '分页',
      //       link: '/use/pagination'
      //     }, {
      //       text: '创建/修改弹框',
      //       link: '/use/create-edit-dialog'
      //     }
      //   ]
      // },
      {
        text: '配置',
        children: [
          {
            text: '全局配置',
            link: '/config/global-config'
          }, {
            text: '组件配置',
            link: '/config/component-config'
          }, {
            text: '操作栏配置',
            link: '/config/operation-config'
          }, {
            text: '列配置',
            link: '/config/column-config'
          }, {
            text: '高级搜索配置',
            link: '/config/advanced-search-config'
          }
        ]
      }
    ]
  }
})
