import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-a4b78024","/documentation/",{"title":"Introduction"},["/documentation/index.html","/documentation/README.md"]],
  ["v-1f8448c0","/documentation/errors.html",{"title":"Errors"},["/documentation/errors","/documentation/errors.md"]],
  ["v-2609ce1e","/documentation/hello-scopes.html",{"title":"Hellō Scopes"},["/documentation/hello-scopes","/documentation/hello-scopes.md"]],
  ["v-2c78141e","/documentation/using-hello.html",{"title":"Using Hellō"},["/documentation/using-hello","/documentation/using-hello.md"]],
  ["v-148e2c59","/faqs/",{"title":"FAQs"},["/faqs/index.html","/faqs/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
