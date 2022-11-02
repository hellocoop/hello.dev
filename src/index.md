---
home: true
pageClass: home-page-class
heroText: #leave empty
tagline: #leave empty
---

<script setup>
  const join = () => {
    joinSlackCommunity('hello.dev')
  }
</script>

<div id="hero">
  <h1>Identity in hours,<br/>not days or weeks.</h1>
  <picture id="mockup">
    <source srcset="https://cdn.hello.coop/images/mockup-light.png" media="(prefers-color-scheme: dark)">
    <img src="https://cdn.hello.coop/images/mockup.png">
  </picture>
</div>

<section id="features">
  <div>
    <h3>Registration and Login with a Few Lines of Code - For Free</h3>
    <p>
      With one integration you get any standard profile information you request and offer your users their preferred way to login.
    </p>
    <div id="snippet"><pre>
<span style="opacity: 0.6;">&lt;div</span> <span class="class-opacity">class=</span><span>"hello-container"</span><span style="opacity: 0.6;">&gt;</span>
  <span class="snippet-border-left" style="opacity: 0.6;">&lt;button</span> <span class="class-opacity">class=</span><span>"hello-btn"</span><span style="opacity: 0.6;">/&gt;</span>
  <span style="opacity: 0.6;">&lt;button</span> <span class="class-opacity">class=</span><span>"hello-about"</span><span style="opacity: 0.6;">/&gt;</span>
<span style="opacity: 0.6;">&lt;/div&gt;</span></pre>
    </div>
  </div>
  <div>
    <h3>Improve Your Development and Testing Workflows</h3>
    <p>
   Unlike social login providers, Hellō lets you develop on localhost. Fully automate registration and login for complete end-to-end test coverage.
    </p>
    <img src="/images/ci-cd.png" style="width: 260px;">
  </div>
  <div>
    <h3>Show Users You Care About Their Privacy</h3>
    <p>
      Hellō shows users that you care about their privacy, consent, freedom of choice, and online safety.
    </p>
    <img src="/images/privacy.png" style="width: 260px;">
  </div>
</section>

<section id="start-building">
  <h2>Start building your next app with Hellō ...</h2>
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
        Explore what you can do with <b>Hellō</b>.
      </p>
    </div>
    <div>
      <a href="https://console.hello.coop/">
        Console
        <span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg><span class="external-link-icon-sr-only">open in new window</span></span>
      </a>
      <p>
        Configure and manage your application(s).
      </p>
    </div>
    <div>
      <button id="join-slack-btn" style="font-weight: 500;" @click="join" href="https://console.hello.coop/">
        Slack
        <span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg><span class="external-link-icon-sr-only">open in new window</span></span>
      </button>
      <p>
        Join the community to discuss <b>Hellō</b>.
      </p>
    </div>
  </div>
</section>

<div style="position: fixed; width: 100%; left: 0; bottom: 0;" v-pre>
  <wc-footer/>
</div>

<style scoped>
  #hero {
    display: flex;
    text-align: left;
    justify-content: space-between;
    margin: 40px auto;
  }
  #hero h1 {
    text-align: left;
    margin-top: 50px;
    font-size: 4.6rem;
  }
  h2 {
    text-align: center;
    border-bottom: none;
    padding-bottom: 0; 
    font-size: 2.4rem;
  }
  h3 {
    font-size: 1.2rem;   
    padding-bottom: 0; 
  }
  p {
    padding-top: 0;
    opacity: 0.8;
    line-height: 22px;
  }
  #mockup img {
    max-width: 300px;
    animation: float 5s infinite;
  }
  @keyframes float {
      0%,
      100% {
          transform: translateY(0px);
      }
      50% {
          transform: translateY(-10px);
      }
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
    min-height: 150px;
  }
  #snippet pre {
    font-size: 14px;
    line-height: 22px;
    margin-top: 45px;
    padding: 0;
    position: relative;
  }
  .snippet-border-left::before {
    content: '';
    height: 45px;
    width: 1.5px;
    opacity: 0.3;
    position: absolute;
    left: 0;
  }
  #start-building {
    margin-top: 80px;
    padding-bottom: 130px;
  }
  a, #join-slack-btn {
    font-size: 1.2rem;
    color: inherit;
    font-weight: 500 !important;
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
    font-family: inherit;
  }
  @media (max-width: 1000px) {
    #features, #links {
      flex-direction: column;
      gap: 20px 0px;
    }
    #links p {
      margin-top: 8px;
    }
    #features {
      margin-top: 0px;
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
    #mockup img{
      max-width: 100%;
    }
    #hero {
      flex-direction: column;
      margin-bottom: 0px;
      margin-top: 24px;
    }
    #hero h1{
      font-size: 2.4rem;
      margin: 0;
    }
    #hero img {
      max-width: 300px;
      margin: 40px auto;
      display: block;
    }
    h2 {
      font-size: 1.8rem;
      text-align: left;
    }
  }
  @media (max-width: 400px) {
    #hero h1 {
      font-size: 9.5vW;
    }
  }
  @media (max-width: 320px) {
    #snippet pre {
      font-size: 4.4vW;
    }
  }
  @media (prefers-color-scheme: light) {
    #snippet pre {
      color: black;
    }
    .snippet-border-left::before {
      background-color: black;
    }
    .class-opacity {
      opacity: 0.45;
    }
  }
  @media (prefers-color-scheme: dark) {
    h1, h2, h3, a, #join-slack-btn {
      color: white;
    }
    #snippet pre {
      color: white;
    }
    .snippet-border-left::before {
      background-color: #d4d4d4;
    }
    .class-opacity {
      opacity: 0.4;
    }
  }
</style>