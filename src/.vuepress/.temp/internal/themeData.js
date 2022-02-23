export const themeData = {
  "contributors": false,
  "darkMode": false,
  "repo": "",
  "editLinks": false,
  "docsDir": "",
  "editLinkText": "",
  "lastUpdated": false,
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "Documentation",
          "link": "/documentation/"
        },
        {
          "text": "FAQs",
          "link": "/faqs/"
        },
        {
          "text": "Console",
          "link": "https://console.hello.dev"
        }
      ],
      "sidebar": {
        "/documentation/": [
          {
            "text": "Documentation",
            "collapsible": false,
            "children": [
              "/documentation/README.md",
              "/documentation/using-hello.md",
              "/documentation/hello-scopes.md",
              "/documentation/errors.md"
            ]
          }
        ],
        "/faqs/": [
          {
            "text": "FAQs",
            "collapsible": false
          }
        ]
      },
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
