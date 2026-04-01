'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SidebarNav() {
  const router = useRouter()

  useEffect(() => {
    function handleClick(e) {
      const button = e.target.closest('button[data-href]')
      if (!button) return
      const href = button.getAttribute('data-href')
      if (href) {
        router.push(href + '/')
      }
    }

    const sidebar = document.querySelector('.nextra-sidebar')
    if (sidebar) {
      sidebar.addEventListener('click', handleClick)
      return () => sidebar.removeEventListener('click', handleClick)
    }
  }, [router])

  return null
}
