<script setup>
import { ref, watch, onMounted } from 'vue'
const color = ref('black')
const loading = ref(false)
const about = ref(true)
const hover = ref('default')
const theme = ref('light')
const isDefaultStyle = ref(true)
const lightPreviewButton = ref(null)
const darkPreviewButton = ref(null)
const copiedText = ref(null)
const snippet = ref(null)
const lang = ref(null)
const cssMap = {
    color: {
        black: ' hello-btn-black',
        white: ' hello-btn-white',
    },
    theme: {
        light: '-on-light',
        dark: '-on-dark',
        invert: '-and-invert',
        static: '-and-static'
    },
    hover: {
        default: "",
        glow: " hello-btn-hover-glow",
        flare: " hello-btn-hover-flare",
        none: " hello-btn-hover-none"
    }
}
const langMap = {
  "Browser Locale": null,
  "English (English)": "en",
  "हिंदी (Hindi)": "hi",
  "العربية (Arabic)": "ar",
  "Français (French)": "fr",
  "Deutsch (German)": "de"
}
watch([color, theme, hover], () => {
    lightPreviewButton.value.focus()
    setTimeout(()=>{
        lightPreviewButton.value.blur()
        darkPreviewButton.value.focus()
        setTimeout(() => {
            darkPreviewButton.value.blur()
        }, 250);
    }, 250)
    if (color.value === "black" && theme.value === "light") {
        isDefaultStyle.value = true
    } else {
        isDefaultStyle.value = false
    }
})

async function copy(){
  let copyText
  if(about.value){
    copyText = `  
  <div class="hello-container"${lang.value ? ` lang="${lang.value}"` : ""}>
    <button class="${`hello-btn${!isDefaultStyle.value ? cssMap.color[color] : ""}${!isDefaultStyle.value ? cssMap.theme[theme] : ""}${hover.value ? cssMap.hover[hover.value] : ""}${loading.value ? " hello-btn-loader" : ""}`}"></button>
    <button class="hello-about"></button>
  </div>`
  } else {
    copyText = `  
  <div class="hello-container"${lang.value ? ` lang="${lang.value}"` : ""}>
    <button class="${`hello-btn${!isDefaultStyle.value ? cssMap.color[color] : ""}${!isDefaultStyle.value ? cssMap.theme[theme] : ""}${hover.value ? cssMap.hover[hover.value] : ""}${loading.value ? " hello-btn-loader" : ""}`}"></button>
  </div>`
  }
  await navigator.clipboard.writeText(copyText)
  copiedText.value.style.opacity = 1
  setTimeout(() => {
    copiedText.value.style.opacity = 0
  }, 650);
}
</script>

<template>
  <div id="button-explorer-container">
    <div class="control-center" style="border-radius: 6px 6px 0px 0px">
      <div class="group">
        <span class="label">Color</span>
        <div class="btn-group">
          <button
            @click="color = 'black'"
            :class="{
                'btn-active': color === 'black'
            }"
          >
            Black
          </button>
          <button
            @click="color = 'white'"
            :class="{
                'btn-active': color === 'white'
            }"
          >
            White
          </button>
        </div>
      </div>
      <div class="group">
        <div>
            <span class="label">Theme Ignore</span>
          <span style="margin-left: 20px">Theme Aware</span>
        </div>
        <div class="btn-group">
          <button
            @click="theme = 'light'"
            :class="{
                'btn-active': theme === 'light'
            }"
          >
            Light
          </button>
          <button
            @click="theme = 'dark'"
            :class="{
                'btn-active': theme === 'dark'
            }"
          >
            Dark
          </button>
          <button
            @click="theme = 'invert'"
            :class="{
                'btn-active': theme === 'invert'
            }"
          >
            Invert
          </button>
          <button
            @click="theme = 'static'"
            :class="{
                'btn-active': theme === 'static'
            }"
          >
            Static
          </button>
        </div>
      </div>
      <div class="group">
        <span class="label">Hover</span>
        <div class="btn-group">
          <button
            @click="hover = 'default'"
            :class="{
                'btn-active': hover === 'default'
            }"
          >
            Default
          </button>
          <button
            @click="hover = 'glow'"
            :class="{
                'btn-active': hover === 'glow'
            }"
          >
            Glow
          </button>
          <button
            @click="hover = 'flare'"
            :class="{
                'btn-active': hover === 'flare'
            }"
          >
            Flare
          </button>
          <button
            @click="hover = 'none'"
            :class="{
                'btn-active': hover === 'none'
            }"
          >
            None
          </button>
        </div>
      </div>
    </div>
    <div id="button-explorer">
      <div id="button-explorer-light">
        <div class="hello-container" :lang="lang">
          <button
            ref="lightPreviewButton"
            class="hello-btn"
            :class="{
                'hello-btn-black-on-dark': color === 'black' && theme === 'dark',
                'hello-btn-black-and-invert': color === 'black' && theme === 'invert',
                'hello-btn-black-and-static': color === 'black' && theme === 'static',
                'hello-btn-white-on-light': color === 'white' && theme === 'light',
                'hello-btn-white-on-dark': color === 'white' && theme === 'dark',
                'hello-btn-white-and-invert': color === 'white' && theme === 'invert',
                'hello-btn-white-and-static': color === 'white' && theme === 'static',
                'hello-btn-loader': loading,
                'hello-btn-hover-glow': hover === 'glow',
                'hello-btn-hover-flare': hover === 'flare',
                'hello-btn-hover-none': hover === 'none',
            }"
          />
          <button v-if="about" class="hello-about" />
        </div>
      </div>
      <div id="button-explorer-dark">
        <div class="hello-container" :lang="lang">
          <button
            ref="darkPreviewButton"
            class="hello-btn"
            :class="{
                'hello-btn-black-on-dark': color === 'black' && theme === 'dark',
                'hello-btn-black-and-invert': color === 'black' && theme === 'invert',
                'hello-btn-black-and-static': color === 'black' && theme === 'static',
                'hello-btn-white-on-light': color === 'white' && theme === 'light',
                'hello-btn-white-on-dark': color === 'white' && theme === 'dark',
                'hello-btn-white-and-invert': color === 'white' && theme === 'invert',
                'hello-btn-white-and-static': color === 'white' && theme === 'static',
                'hello-btn-loader': loading,
                'hello-btn-hover-glow': hover === 'glow',
                'hello-btn-hover-flare': hover === 'flare',
                'hello-btn-hover-none': hover === 'none',
            }"
          />
          <button v-if="about" class="hello-about" />
        </div>
      </div>
    </div>
    <div
      class="control-center"
      style="border-radius: 0px 0px 6px 6px;"
    >
        <div class="group">
            <div class="btn-group">
            <button
                @click="loading = !loading"
                :class="{
                    'btn-active': loading
                }"
            >
                Loading State
            </button>
            </div>
        </div>
        <div>
            <div class="btn-group">
            <button
                @click="about = !about"
                :class="{
                    'btn-active': about
                }"
            >
                About Hellō
            </button>
            </div>
        </div>
        <div>
            <select v-model="lang">
                <option v-for="(value, key) in langMap" :value="value">{{key}}</option>
            </select>
        </div>
    </div>

      <div class="language-html ext-html">
        <pre
          v-if="about"
          class="language-html code-copy-added"
          style=""
        ><code ref="snippet"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token attr-name"> class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello-container<span class="token punctuation">"</span></span><span v-if="lang"><span class="token attr-name"> lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{lang}}<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{`hello-btn${!isDefaultStyle ? cssMap.color[color] : ""}${!isDefaultStyle ? cssMap.theme[theme] : ""}${cssMap.hover[hover]}${loading ? " hello-btn-loader" : ""}`}}<span class="token punctuation">"</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span></span><span class="token punctuation">&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello-about<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span></span><span class="token punctuation">&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code><div data-v-app=""><div class="code-copy" data-v-75ef7d1b="" style="position: absolute; right: 0; top: 8px;"><button @click="copy" style="cursor: pointer; background: none; border: none; position: absolute; right: 0; top: 0;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hover" data-v-75ef7d1b="" style="top: 7.5px;"><path fill="none" d="M0 0h24v24H0z" data-v-75ef7d1b=""></path><path fill="white" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" data-v-75ef7d1b=""></path></svg></button><span ref="copiedText" class="" data-v-75ef7d1b="" style="top: 1.5px; opacity: 0; right: 34px; position: absolute;">Copied!</span></div></div></pre>
        <pre
          v-else
          class="language-html code-copy-added"
          style=""
          ><code ref="snippet"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token attr-name"> class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello-container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{`hello-btn${!isDefaultStyle ? cssMap.color[color] : ""}${!isDefaultStyle ? cssMap.theme[theme] : ""}${cssMap.hover[hover]}${loading ? " hello-btn-loader" : ""}`}}<span class="token punctuation">"</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span></span><span class="token punctuation">&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code><div data-v-app=""><div class="code-copy" data-v-75ef7d1b="" style="position: absolute; right: 0; top: 8px;"><button @click="copy" style="cursor: pointer; background: none; border: none; position: absolute; right: 0; top: 0;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hover" data-v-75ef7d1b="" style="top: 7.5px;"><path fill="none" d="M0 0h24v24H0z" data-v-75ef7d1b=""></path><path fill="white" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" data-v-75ef7d1b=""></path></svg></button><span ref="copiedText" data-v-75ef7d1b="" style="top: 1.5px; opacity: 0; right: 34px; position: absolute;">Copied!</span></div></div></pre>
      </div>
    </div>
</template>

<style scoped>
  .control-center{
    background:#d4d4d4;
    display:flex;
    color:#000;
    justify-content:center;
    padding:16px 10px;
    align-items:center;
    font-size:14px;
    gap:16px;
    flex-wrap:wrap
}
#snippet{
    margin-top:16px;
    background-color:#282c34;
    padding:20px 25px;
    font-size:13px;
    font-weight:600;
    font-family:monospace
}
.group{
    text-align:center
}
.btn-group{
    border:1px solid #303030;
    padding:2px;
    border-radius:2px
}
.btn-group button{
    background:none;
    border:none;
    cursor:pointer;
    padding:6px 12px;
    border-radius:2px;
    color:#303030
}
.btn-group .btn-active{
    background-color:#303030;
    color:#fff
}
#button-explorer{
    background: #f8f8f8;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    height:190px
}
#button-explorer-light,#button-explorer-dark{
    width:50%;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    padding-top:20px
}
#button-explorer-dark{
    background-color:#151515;
    height:100%;
    box-sizing:border-box
}
select{
    background:transparent;
    border:none;
    border:1px solid #303030;
    color:#303030;
    border-radius:2px;
    height:33px;
    padding-left: 3px;
    padding-right: 3px;
}
select:focus{
    outline:none
}
.label{
    display:inline-block;
    margin-bottom:6px
}
@media (max-width: 920px){
    #button-explorer{
        flex-direction:column;
        height:auto
    }
    #button-explorer-light,#button-explorer-dark{
        width:100%;
        height:180px;
        box-sizing:border-box
    }
}
#button-explorer-light .hello-about {
    color: #303030;
}

#button-explorer-dark .hello-about {
    color: #d4d4d4;
}

#button-explorer-dark .hello-btn-black-and-static{
    background:#303030;
    color:#d4d4d4;
    box-shadow:0 0 0 2px #585858
}
#button-explorer-dark .hello-btn-black-and-static:disabled{
    color:#d4d4d4
}
#button-explorer-dark .hello-btn-white-and-static{
    background:#d4d4d4;
    color:#303030;
    box-shadow:0 0 0 1px #d4d4d4
}
#button-explorer-dark .hello-btn-white-and-static:disabled{
    color:#303030
}
#button-explorer-dark .hello-btn-white-and-static.hello-btn-loader::after {
    background-image: url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(48,48,48);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E");
}
#button-explorer-light .hello-btn-black-and-static{
    background:#303030;
    color:#fff;
    box-shadow:0 0 0 1px #303030
}
#button-explorer-light .hello-btn-black-and-static:disabled{
    color:#fff
}
#button-explorer-light .hello-btn-white-and-static{
    background:#fff;
    color:#303030;
    box-shadow:0 0 0 1px #303030
}
#button-explorer-light .hello-btn-white-and-static:disabled{
    color:#303030
}
#button-explorer-light .hello-btn-black-and-invert.hello-btn-loader::after {
    background-image: url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: white;' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E");
}
#button-explorer-light .hello-btn-black-and-static.hello-btn-loader::after {
    background-image: url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: white;' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E");
}
#button-explorer-dark .hello-btn-black-and-invert{
    background:#d4d4d4;
    color:#303030;
    box-shadow:0 0 0 1px #d4d4d4
}
#button-explorer-dark .hello-btn-black-and-invert:disabled{
    color:#303030
}
#button-explorer-dark .hello-btn-white-and-invert{
    background:#303030;
    color:#d4d4d4;
    box-shadow:0 0 0 2px #585858
}
#button-explorer-dark .hello-btn-white-and-invert:disabled{
    color:#d4d4d4
}
#button-explorer-light .hello-btn-black-and-invert{
    background:#303030;
    color:#fff;
    box-shadow:0 0 0 1px #303030
}
#button-explorer-light .hello-btn-black-and-invert:disabled{
    color:#fff
}
#button-explorer-light .hello-btn-white-and-invert{
    background:#fff;
    color:#303030;
    box-shadow:0 0 0 1px #303030
}
#button-explorer-light .hello-btn-white-and-invert:disabled{
    color:#303030
}
#button-explorer-dark .hello-btn-black-and-invert:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 2px #d4d4d4
}
#button-explorer-dark .hello-btn-white-and-invert:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 3px #585858
}
#button-explorer-light .hello-btn-black-and-invert:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 2px #303030
}
#button-explorer-light .hello-btn-white-and-invert:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 2px #585858
}
#button-explorer-dark .hello-btn-white-and-invert.hello-btn-hover-glow:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 3px 3px rgba(128,128,128,0.7)
}
#button-explorer-dark .hello-btn-white-and-static.hello-btn-hover-glow:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 3px 3px rgba(212,212,212,0.7)
}
#button-explorer-dark .hello-btn-black-and-static.hello-btn-hover-glow:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 3px 3px rgba(128,128,128,0.7)
}
#button-explorer-dark .hello-btn-black-and-invert.hello-btn-hover-glow:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 3px 3px rgba(212,212,212,0.7)
}
#button-explorer-light .hello-btn-white-and-invert.hello-btn-loader::after {
    background-image: url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(48,48,48);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E");
}
#button-explorer-dark .hello-btn-white-and-invert.hello-btn-loader::after {
    background-image: url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(212,212,212);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E");
}
#button-explorer-dark .hello-btn-black-and-invert.hello-btn-loader::after {
    background-image: url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(48,48,48);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E");
}
#button-explorer-light .hello-btn-black-and-invert.hello-btn-hover-glow:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 3px 3px rgba(128,128,128,0.7)
}
#button-explorer-light .hello-btn-white-and-invert.hello-btn-hover-glow:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 3px 3px rgba(128,128,128,0.7)
}
#button-explorer-light .hello-btn-black-and-static.hello-btn-hover-glow:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 3px 3px rgba(128,128,128,0.7)
}
#button-explorer-light .hello-btn-white-and-static.hello-btn-hover-glow:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 3px 3px rgba(128,128,128,0.7)
}
#button-explorer-dark .hello-btn-white-and-static:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 2px #d4d4d4
}
#button-explorer-light .hello-btn-black-and-static:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 2px #303030
}
#button-explorer-light .hello-btn-white-and-static:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 2px #303030
}
#button-explorer-dark .hello-btn-black-and-invert.hello-btn-hover-flare:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 1px #d4d4d4
}
#button-explorer-dark .hello-btn-black-and-static.hello-btn-hover-flare:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 2px #585858
}
#button-explorer-dark .hello-btn-white-and-invert.hello-btn-hover-flare:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 1px #585858
}
#button-explorer-dark .hello-btn-white-and-static.hello-btn-hover-flare:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 1px #d4d4d4
}
#button-explorer-light .hello-btn-black-and-invert.hello-btn-hover-flare:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 1px #303030
}
#button-explorer-light .hello-btn-black-and-static.hello-btn-hover-flare:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 1px #303030
}
#button-explorer-light .hello-btn-white-and-invert.hello-btn-hover-flare:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 1px #303030
}
#button-explorer-light .hello-btn-white-and-static.hello-btn-hover-flare:is(:hover,:active,:focus):not(:disabled):not(.hello-btn-hover-none):not(.hello-btn-loader){
    box-shadow:0 0 0 1px #303030
}
#button-explorer-dark .hello-btn-black-and-invert::after{
    background:#d4d4d4
}
#button-explorer-dark .hello-btn-black-and-static::after{
    background:#303030
}
#button-explorer-dark .hello-btn-white-and-invert::after{
    background:#303030
}
#button-explorer-dark .hello-btn-white-and-static::after{
    background:#d4d4d4
}
#button-explorer-dark .hello-btn-black-and-static.hello-btn-loader::after {
    background-image: url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(212,212,212);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E");
}
#button-explorer-light .hello-btn-black-and-invert::after{
    background:#303030
}
#button-explorer-light .hello-btn-black-and-static::after{
    background:#303030
}
#button-explorer-light .hello-btn-white-and-static::after{
    background:#fff
}
#button-explorer-light .hello-btn-white-and-invert::after{
    background:#fff
}
#button-explorer-light .hello-btn-white-and-static.hello-btn-loader::after {
    background-image: url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(48,48,48);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E");
}
</style>