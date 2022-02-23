export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "hello.dev",
  "description": "Hellō is an OpenID Connect Provider that simplifies user registration and login, allowing you to provide all the choices your user's may want in hours instead of days or weeks.",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://cdn.hello.coop/images/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#303030"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
