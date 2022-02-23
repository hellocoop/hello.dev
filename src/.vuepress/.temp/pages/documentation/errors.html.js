export const data = {
  "key": "v-1f8448c0",
  "path": "/documentation/errors.html",
  "title": "Errors",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Request Errors",
      "slug": "request-errors",
      "children": []
    },
    {
      "level": 2,
      "title": "Introspection Errors",
      "slug": "introspection-errors",
      "children": []
    }
  ],
  "filePathRelative": "documentation/errors.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
