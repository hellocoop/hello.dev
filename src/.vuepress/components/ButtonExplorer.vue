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
watch([color, theme], () => {
    if (color.value === "black" && theme.value === "light") {
        isDefaultStyle.value = true
    } else {
        isDefaultStyle.value = false
    }
})
watch(hover, () => {
    lightPreviewButton.value.focus()
    setTimeout(()=>{
        lightPreviewButton.value.blur()
        darkPreviewButton.value.focus()
        setTimeout(() => {
            darkPreviewButton.value.blur()
        }, 250);
    }, 250)
})
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
        <div class="hello-container">
          <button
            ref="lightPreviewButton"
            class="hello-btn hello-btn-black-on-light"
            :class="{
                'hello-btn-black-on-light': color === 'black',
                'hello-btn-white-on-light': color === 'white',
                'hello-btn-loader': loading,
                'hello-btn-hover-glow': hover === 'glow',
                'hello-btn-hover-flare': hover === 'flare',
                'hello-btn-hover-none': hover === 'none',
            }"
          />
          <button v-if="about" class="hello-about" style="color: black" />
        </div>
      </div>
      <div id="button-explorer-dark">
        <div class="hello-container">
          <button
            ref="darkPreviewButton"
            class="hello-btn hello-btn-black-on-light"
            :class="{
                'hello-btn-black-on-light': color === 'black',
                'hello-btn-white-on-light': color === 'white',
                'hello-btn-loader': loading,
                'hello-btn-hover-glow': hover === 'glow',
                'hello-btn-hover-flare': hover === 'flare',
                'hello-btn-hover-none': hover === 'none',
            }"
          />
          <button v-if="about" class="hello-about" style="color: white" />
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
            <select>
                <option>Browser Language</option>
                <option>English (English)</option>
                <option>हिंदी (Hindi)</option>
                <option>العربية (Arabic)</option>
                <option>Français (French)</option>
                <option>Deutsch (German)</option>
            </select>
        </div>
    </div>

      <div class="language-html ext-html">
        <pre
          v-if="about"
          class="language-html code-copy-added"
          style=""
        ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{`hello-btn${!isDefaultStyle ? cssMap.color[color] : ""}${!isDefaultStyle ? cssMap.theme[theme] : ""}${cssMap.hover[hover]}${loading ? " hello-btn-loader" : ""}`}}<span class="token punctuation">"</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello-about<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code><div data-v-app=""><div class="code-copy" data-v-75ef7d1b=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hover" data-v-75ef7d1b="" style="top: 7.5px;"><path fill="none" d="M0 0h24v24H0z" data-v-75ef7d1b=""></path><path fill="white" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" data-v-75ef7d1b=""></path></svg><span class="" data-v-75ef7d1b="" style="top: 7.5px;">Copied!</span></div></div></pre>
        <pre
          v-else
          class="language-html code-copy-added"
          style=""
        ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{`hello-btn${!isDefaultStyle ? cssMap.color[color] : ""}${!isDefaultStyle ? cssMap.theme[theme] : ""}${cssMap.hover[hover]}${loading ? " hello-btn-loader" : ""}`}}<span class="token punctuation">"</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code><div data-v-app=""><div class="code-copy" data-v-75ef7d1b=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hover" data-v-75ef7d1b="" style="top: 7.5px;"><path fill="none" d="M0 0h24v24H0z" data-v-75ef7d1b=""></path><path fill="white" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" data-v-75ef7d1b=""></path></svg><span class="" data-v-75ef7d1b="" style="top: 7.5px;">Copied!</span></div></div></pre>
      </div>
    </div>
</template>

<style>
.control-center {
  background: #d4d4d4;
  display: flex;
  color: black;
  justify-content: center;
  padding: 10px;
  align-items: center;
  font-size: 14px;
  gap: 16px;
  flex-wrap: wrap;
}
#snippet {
  margin-top: 16px;
  background-color: #282c34;
  padding: 20px 25px;
  font-size: 13px;
  font-weight: 600;
  font-family: monospace;
}
.group {
  text-align: center;
}
.btn-group {
  border: 1px solid #303030;
  padding: 2px;
  border-radius: 2px;
}
.btn-group button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 2px;
  color: #303030;
}
.btn-group button.btn-active {
  background-color: #303030;
  color: white;
}
#button-explorer {
  background: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 190px;
}
#button-explorer-light,
#button-explorer-dark {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 20px;
}
#button-explorer-dark {
  background-color: black;
  height: 100%;
  box-sizing: border-box;
}
select{
    background: transparent;
    border: none;
    border: 1px solid #303030;
    color: #303030;
    border-radius: 2px;
    height: 33px;
}
select:focus {
    outline: none;
}
.label {
    display: inline-block;
    margin-bottom: 6px;
}
@media (max-width: 920px) { 
    #button-explorer {
        flex-direction: column;
        height: auto;
    }
    #button-explorer-light,
    #button-explorer-dark {
        width: 100%;
        height: 180px;
        box-sizing: border-box;
    }
}
</style>
