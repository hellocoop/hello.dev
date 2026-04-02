//Based off of https://github.com/shuding/nextra/blob/main/packages/nextra/src/components/cards.tsx
//To support description for cards

import cn from 'clsx'
import NextLink from 'next/link'
import type { ComponentProps, CSSProperties, ReactNode } from 'react'

const classes = {
  cards: cn(
    'nextra-cards x:mt-4 x:gap-4 x:grid',
    'not-prose' // for nextra-theme-docs
  ),
  card: cn(
    'nextra-card x:group x:flex x:flex-col x:justify-start x:overflow-hidden x:rounded-lg x:border x:border-gray-200',
    'x:text-current x:no-underline x:dark:shadow-none',
    'x:hover:shadow-gray-100 x:dark:hover:shadow-none x:shadow-gray-100',
    'x:active:shadow-sm x:active:shadow-gray-200',
    'x:transition-all x:duration-200 x:hover:border-gray-300'
  ),
  title: cn(
    'x:flex x:font-semibold x:items-start x:gap-2 x:p-4 x:text-gray-700 x:hover:text-gray-900'
  )
}

const arrowEl = (
  <span className="x:transition-transform x:duration-75 x:group-hover:translate-x-[2px]">
    →
  </span>
)

export function Card({
  children,
  title,
  icon,
  image,
  arrow,
  href,
  description,
  ...props
}: {
  children: ReactNode
  title: string
  description?: string
  icon: ReactNode
  image?: boolean
  arrow?: boolean
  href: string
}) {
  const animatedArrow = arrow ? arrowEl : null

  if (image) {
    return (
      <NextLink
        href={href}
        className={cn(
          classes.card,
          'x:bg-gray-100 x:shadow x:dark:border-neutral-700 x:dark:bg-neutral-800 x:dark:text-gray-50 x:hover:shadow-lg x:dark:hover:border-neutral-500 x:dark:hover:bg-neutral-700'
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            classes.title,
            'x:dark:text-gray-300 x:dark:hover:text-gray-100'
          )}
        >
          {icon}
          <span className="x:flex x:gap-1">
            {title}
            {animatedArrow}
          </span>
        </span>
      </NextLink>
    )
  }

  return (
    <NextLink
      href={href}
      className={cn(
        classes.card,
        'x:bg-transparent x:shadow-sm x:dark:border-neutral-800 x:hover:bg-slate-50 x:hover:shadow-md x:dark:hover:border-neutral-700 x:dark:hover:bg-neutral-900'
      )}
      {...props}
    >
      <span
        className={cn(
          classes.title,
          'x:dark:text-neutral-200 x:dark:hover:text-neutral-50 x:flex x:flex-col x:items-start'
        )}
      >
        {icon}
        {title}
        <span className="x:block x:-mt-1 x:opacity-60 x:text-sm x:text-left">{description}</span>
        {animatedArrow}
      </span>
    </NextLink>
  )
}

function _Cards({
  children,
  num = 3,
  className,
  style,
  ...props
}: { num?: number } & ComponentProps<'div'>) {
  return (
    <div
      className={cn(classes.cards, className)}
      {...props}
      style={
        {
          ...style,
          '--rows': num
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}

export const Cards = Object.assign(_Cards, { displayName: 'Cards', Card })
