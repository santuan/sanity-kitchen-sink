export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fec1920b41d9dac5bf8aee0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3zm8sc67',
                  apiId: '19fe6096-c055-4aaf-9c48-667ae1cc198b'
                },
                {
                  buildHookId: '5fec1920ecca61ce2b7df505',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ky8537od',
                  apiId: 'e65d0c76-84c0-47e5-aa23-b6fd9779b125'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/santuan/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ky8537od.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
