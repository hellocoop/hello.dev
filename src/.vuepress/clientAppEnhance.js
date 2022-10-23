import { defineClientAppEnhance } from '@vuepress/client'

const sendEvent = async() => {
  if (localStorage.plausible_ignore) {
    console.warn("Ignoring Event: localStorage flag")
    return;
  }
  const _body = {
      w: window.innerWidth,
      d: "hello.dev",
      n: "pageview",
      r: document.referrer || null,
      u: window.location.href
  };
  try {
      const endpoint = new URL('/api/event', window.location.origin + window.location.pathname)
      await fetch(endpoint.href, {
          method: "POST",
          body: JSON.stringify(_body),
      });
      console.info(`Event sent: ${_body.u} (${_body.n})`);
  } catch (err) {
      console.error(err);
  }
}

export default defineClientAppEnhance(({ router }) => {
  if(__VUEPRESS_SSR__) return
  router.afterEach((toPage) => {
    if(toPage.hash) return // ignore anchor links
    sendEvent()
  })
})