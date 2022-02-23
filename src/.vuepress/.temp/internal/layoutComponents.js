import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/thoran/hello/www.hello.dev/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/thoran/hello/www.hello.dev/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
