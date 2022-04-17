---
home: true
heroImage: https://cdn.hello.coop/images/mockup.png
tagline: Hellō is an OpenID Connect Provider that simplifies user registration and login, allowing you to provide all the choices your user's may want in hours instead of days or weeks.
---

<div class="features">
  <div class="feature">
    <h2><a href="/documentation/index.html">Documentation</a></h2>
    <p>An overview, step-by-step guide, and details on claims.</p>
  </div>

  <div class="feature">
    <h2><a href="/faqs/index.html">FAQs</a></h2>
    <p>Frequently asked developer questions.</p>
  </div>

  <div class="feature">
    <h2>
      <a href="https://console.hello.dev">
        <span>Console</span>
        <span><svg class="external-link-icon" style="margin-left: 4px; margin-top: 2px;" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="#303030" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="#303030" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg><span class="external-link-icon-sr-only">open in new window</span></span>
      </a>
    </h2>
    <p>Configure and manage your application(s).</p>
  </div>
</div>

<div style="position: fixed; width: 100%; left: 0; bottom: 0;" v-pre>
  <wc-footer/>
</div>

<style>
  .feature{
    padding-bottom: 4rem;
  }

  .feature a:hover{
    border-bottom: 2px solid #303030;
  }

  #links, #copyright, #social-links{
    display: flex;
  }

  #copyright{
    margin-top: 0.48rem;
  }

  #links, #social-links{
    gap: 0rem 1rem;
  }

  #social-links{
    justify-content: end;
  }
</style>