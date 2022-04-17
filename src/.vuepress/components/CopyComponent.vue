<script>
  export default {
    props: {
      url: String
    },
    data() {
      return {
        copying: false
      }
    },
    methods: {
      async copy(){
        this.copying = true
        await navigator.clipboard.writeText(this.url);
        setTimeout(()=>{
          this.copying = false
        }, 500)
      }
    }
  }
</script>

<template>
  <button @click="copy" style="position: relative; cursor: pointer; text-align: left; background: transparent; border: none; font-size: inherit; color: var(--c-text); width: 100%; height: 100%; display: flex; align-content: center; justify-content: space-between;">
    <span :class="{flash: copying}" style="margin-right: 2px;">{{url}}</span>
    <svg xmlns="http://www.w3.org/2000/svg" style="margin-top: 1px; right: -8px;" width="20" height="20" viewBox="0 0 24 24" data-v-75ef7d1b=""><path fill="none" d="M0 0h24v24H0z" data-v-75ef7d1b=""></path><path fill="gray" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" data-v-75ef7d1b=""></path></svg>
  </button>
</template>

<style>
  .flash{
    animation: flash-animation 0.5s ease-in-out;
  }

  @keyframes flash-animation {
    0% {
      opacity: 1;
    }
    50%{
      opacity: 0.5;
    }
    100%{
      opacity: 1;
    }
  }
</style>

