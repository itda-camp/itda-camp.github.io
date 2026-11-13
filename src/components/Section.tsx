import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  /** 색 띠: white(흰) · cream(크림) · dark(진초록) */
  tone?: 'white' | 'cream' | 'dark'
  children: ReactNode
}

export default function Section({ id, title, tone = 'white', children }: Props) {
  return (
    <section id={id} className={`band band-${tone}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
