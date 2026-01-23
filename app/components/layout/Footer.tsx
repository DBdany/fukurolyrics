import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-primary)] py-4 mt-auto">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[var(--text-muted)]">
          <p>Unofficial lyrics archive for 梟</p>
          <span className="text-[var(--border-secondary)]">·</span>
          <a
            href="https://ko-fi.com/enchantedruin"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent-gold)]"
          >
            Support on Ko-fi
          </a>
          <span className="text-[var(--border-secondary)]">·</span>
          <p>Translations may contain errors</p>
        </div>
      </Container>
    </footer>
  )
}
