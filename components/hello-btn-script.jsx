'use client'
import Script from 'next/script'

export default function HelloBtnScript() {
  return (
    <Script
      src="https://cdn.hello.coop/js/hello-btn.js"
      onLoad={() => dispatchEvent(new Event('load'))}
    />
  )
}
