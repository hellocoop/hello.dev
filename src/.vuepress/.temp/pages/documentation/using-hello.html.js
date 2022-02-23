export const data = {
  "key": "v-2c78141e",
  "path": "/documentation/using-hello.html",
  "title": "Using Hellō",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1. App Registration",
      "slug": "_1-app-registration",
      "children": []
    },
    {
      "level": 2,
      "title": "2. Hellō Buttons",
      "slug": "_2-hello-buttons",
      "children": []
    },
    {
      "level": 2,
      "title": "3. Create Request URL",
      "slug": "_3-create-request-url",
      "children": []
    },
    {
      "level": 2,
      "title": "4. Make Request",
      "slug": "_4-make-request",
      "children": []
    },
    {
      "level": 2,
      "title": "5. Receive Response",
      "slug": "_5-receive-response",
      "children": []
    },
    {
      "level": 2,
      "title": "6. Validate ID Token",
      "slug": "_6-validate-id-token",
      "children": [
        {
          "level": 3,
          "title": "Introspection",
          "slug": "introspection",
          "children": []
        },
        {
          "level": 3,
          "title": "Self Validation",
          "slug": "self-validation",
          "children": []
        },
        {
          "level": 3,
          "title": "Signature Verification Keys",
          "slug": "signature-verification-keys",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "documentation/using-hello.md"
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
