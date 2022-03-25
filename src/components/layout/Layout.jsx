import s from './Layout.module.scss';

export function Layout({ title, children }) {
  return (
    <div className={s.Layout}>
      <header className={s.Layout__header}>
        <h1>title</h1>
      </header>
      <main>
        <section className={s.Layout__section}>{children}</section>

      </main>
      <footer className={s.Layout__footer}></footer>
    </div>
  )
}
