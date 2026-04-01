'use client'

export default function SlackButton({ children }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => typeof joinSlackCommunity === 'function' && joinSlackCommunity('hello.dev')}
      onKeyDown={(e) => e.key === 'Enter' && typeof joinSlackCommunity === 'function' && joinSlackCommunity('hello.dev')}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  )
}
