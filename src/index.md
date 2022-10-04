---
editLink: false
pageClass: custom-page-class
---

<script setup>
  const join = () => {
    joinSlackCommunity('hello.dev')
  }
</script>

<h1>Identity in hours instead of days or weeks.</h1>
<picture id="mockup">
  <source srcset="https://cdn.hello.coop/images/mockup-light.png" media="(prefers-color-scheme: dark)">
  <img src="https://cdn.hello.coop/images/mockup.png">
</picture>

<section id="features">
  <div>
    <h2>Registration and Authentication in a Few Lines of Code</h2>
    <p>
      One free integration gets you any standard profile information you need including verified email and phone. Offer your users their preferred way to login including all the popular social logins, passwordless, crypto wallets, and Passkey.
    </p>
    <div id="snippet"><pre>{{`
<div class="hello-container">
  <button
    class="hello-btn-black-on-light"
  />
  <button
    class="hello-about"
  />
</div>`}}</pre>
    </div>
  </div>
  <div>
    <h2>Improved Development Workflows</h2>
    <p>
      Hellō reduces your application code paths. There’s no need to manage multiple authentication integrations or to support and test different authentication flows, email verification, or phone verification.
    </p>
    <img src="/images/ci-cd.png" style="width: 260px;">
  </div>
  <div>
    <h2>Show Users You Care About Their Privacy</h2>
    <p>
      Hellō shows users that you care about their privacy, consent, freedom of choice, and online safety.
    </p>
    <img src="/images/privacy.png" style="width: 260px;">
  </div>
</section>

<section id="start-building">
  <h1>Start building your next app with Hellō...</h1>
  <div id="links">
    <div>
      <a href="/documentation/">Documentation</a>
      <p>
        An overview and step-by-step guide.
      </p>
    </div>
    <div>
      <a href="/faqs/">FAQs</a>
      <p>
        Frequently asked developer questions.
      </p>
    </div>
    <div>
      <a href="https://playground.hello.dev/">
        Playground
        <span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg><span class="external-link-icon-sr-only">open in new window</span></span>
      </a>
      <p>
        Explore what you can do with Hellō.
      </p>
    </div>
    <div>
      <a href="https://console.hello.dev/">
        Console
        <span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg><span class="external-link-icon-sr-only">open in new window</span></span>
      </a>
      <p>
        Configure and manage your application(s).
      </p>
    </div>
    <div>
      <button id="join-slack-btn" @click="join" href="https://console.hello.dev/">
        Slack
        <span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg><span class="external-link-icon-sr-only">open in new window</span></span>
      </button>
      <p>
        Join the community to discuss Hellō.
      </p>
    </div>
  </div>
</section>

<div style="position: fixed; width: 100%; left: 0; bottom: 0;" v-pre>
  <wc-footer/>
</div>

<style scoped>
  h1 {
    text-align: center;
  }
  h2 {
    border-bottom: none;
    font-size: 1.2rem;   
    padding-bottom: 0; 
  }
  p {
    padding-top: 0;
    opacity: 0.8;
    line-height: 22px;
  }
  #mockup img {
    max-width: 360px;
    margin: 40px auto;
    display: block;
  }
  #features, #links {
    display: flex;
    justify-content: space-between;
    gap: 0px 20px;
    margin-top: 40px;
  }
  #features div {
    max-width: 290px;
  }
  #features div p {
    min-height: 160px;
  }
  #snippet {
    background-color: #303030;
  }
  #snippet pre {
    padding: 10px;
    font-size: 12px;
    line-height: 16px;
  }
  #start-building {
    margin-top: 80px;
    padding-bottom: 60px;
  }
  a, #join-slack-btn {
    font-size: 1.2rem;
  }
  a:hover, a:focus-visible, #join-slack-btn:hover, #join-slack-btn:focus-visible {
    text-decoration: underline;
    text-underline-offset: 8px;
    text-decoration-thickness: 2px !important;
  }
  #join-slack-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  @media (max-width: 1000px) {
    #features, #links {
      flex-direction: column;
      gap: 20px 0px;
    }
    #features div {
      max-width: 100%;
    }
    #features div p {
      min-height: auto;
    }
    #start-building {
      margin-top: 40px; 
    }
  }
</style>