<script setup>
    import { ref, watch, onMounted } from 'vue'
    const color = ref('black')
    const loading = ref(false)
    const about = ref(true)
    const hover = ref('default')
    const theme = ref('light')
    const cssMap = {
        color: {
            black: 'hello-btn-black',
            white: 'hello-btn-white',
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
    watch(hover, () => {
    
    })
</script>

<template>
    <div id="button-explorer-container">
        <div class="control-center" style="border-radius: 6px 6px 0px 0px;">
            <div class="group">
                <span>Color</span>
                <div class="btn-group">
                    <button @click="color = 'black'" :class="{
                        'btn-active': color === 'black'
                    }">Black</button>
                    <button @click="color = 'white'" :class="{
                        'btn-active': color === 'white'
                    }">White</button>
                </div>
            </div>
            <div class="group">
                <div>
                    <span>Theme Ignore</span>
                    <span style="margin-left: 20px;">Theme Aware</span>
                </div>
                <div class="btn-group">
                    <button @click="theme = 'light'" :class="{
                        'btn-active': theme === 'light'
                    }">Light</button>
                    <button @click="theme = 'dark'" :class="{
                        'btn-active': theme === 'dark'
                    }">Dark</button>
                    <button @click="theme = 'invert'" :class="{
                        'btn-active': theme === 'invert'
                    }">Invert</button>
                    <button @click="theme = 'static'" :class="{
                        'btn-active': theme === 'static'
                    }">Static</button>
                </div>
            </div>
            <div class="group">
                <span>Hover</span>
                <div class="btn-group">
                    <button @click="hover = 'default'" :class="{
                        'btn-active': hover === 'default'
                    }">Default</button>
                    <button @click="hover = 'glow'" :class="{
                        'btn-active': hover === 'glow'
                    }">Glow</button>
                    <button @click="hover = 'flare'" :class="{
                        'btn-active': hover === 'flare'
                    }">Flare</button>
                    <button @click="hover = 'none'" :class="{
                        'btn-active': hover === 'none'
                    }">None</button>
                </div>
            </div>
        </div>
        <div id="button-explorer">
            <div id="button-explorer-light">
                <div class="hello-container">
                    <button class="hello-btn hello-btn-black-on-light"
                        :class="{
                            'hello-btn-black-on-light': color === 'black',
                            'hello-btn-white-on-light': color === 'white',
                            'hello-btn-loader': loading,
                            'hello-btn-hover-glow': hover === 'glow',
                            'hello-btn-hover-flare': hover === 'flare',
                            'hello-btn-hover-none': hover === 'none',
                        }"
                    />
                    <button class="hello-about" style="color: black;"/>
                </div>
            </div>
            <div id="button-explorer-dark">
                <div class="hello-container">
                    <button class="hello-btn hello-btn-black-on-light"
                        :class="{
                            'hello-btn-black-on-light': color === 'black',
                            'hello-btn-white-on-light': color === 'white',
                            'hello-btn-loader': loading,
                            'hello-btn-hover-glow': hover === 'glow',
                            'hello-btn-hover-flare': hover === 'flare',
                            'hello-btn-hover-none': hover === 'none',
                        }"
                    />
                    <button class="hello-about" style="color: white;"/>
                </div>
            </div>
        </div>
        <div class="control-center" style="border-radius: 0px 0px 6px 6px; justify-content: center;">
            <div class="group" style="display: flex; gap: 0px 20px;">
                <div class="btn-group">
                    <button @click="loading = !loading" :class="{
                        'btn-active': loading
                    }">Loading State</button>
                </div>
                <div class="btn-group">
                    <button @click="about = !about" :class="{
                        'btn-active': about
                    }">About Hellō</button>
                </div>
                <div class="btn-group">
                    <button @click="about = !about" :class="{
                        'btn-active': about
                    }">Browser Language</button>
                </div>
            </div>
        </div>
        
        <div>
            <pre v-if="about" id="snippet">
{{`<div id="hello-container">
    <button
        class="hello-btn ${cssMap.color[color]}${cssMap.theme[theme]}${cssMap.hover[hover]}${loading ? " hello-btn-loader" : ""}"
    />
    <button class="hello-about"/>
</div>`}}</pre>
            <pre v-else id="snippet">
{{`<div id="hello-container">
    <button
        class="hello-btn ${cssMap.color[color]}${cssMap.theme[theme]}${cssMap.hover[hover]}${loading ? " hello-btn-loader" : ""}"
    />
</div>`}}</pre>
        </div>
    </div>
</template>

<style>
    .control-center {
        height: 80px;
        background: #d4d4d4;
        display: flex;
        color: black;
        justify-content: space-around;
        padding: 0 10px;
        align-items: center;
        font-size: 14px;
    }
    #snippet {
        margin-top: 16px;
        background-color: #282C34;
        padding: 20px 25px;
        font-size: 13px;
        font-weight: 600;
        font-family: monospace;
    }
    .group{
        text-align: center;
    }
    .btn-group {
        margin-top: 8px;
        border: 1px solid black;
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
    #button-explorer-light, #button-explorer-dark {
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
</style>