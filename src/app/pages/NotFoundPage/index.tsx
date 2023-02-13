import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import ThemeSwitcher from 'app/components/ThemeSwitcher'

export function NotFoundPage() {
  const { t, i18n } = useTranslation('notfound')

  const changeLanguage = language => {
    i18n.changeLanguage(language)
  }

  return (
    <div className={styles.container}>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div className={styles.container__body}>
        <div className={styles.container__buttons}>
          <button
            className={styles.buttons__locales}
            type="button"
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button
            className={styles.buttons__locales}
            type="button"
            onClick={() => changeLanguage('ua')}
          >
            UA
          </button>
        </div>
        <div className={styles.container__themes}>
          <ThemeSwitcher />
        </div>
        <div className={styles.body__top}>
          <svg
            className={styles.top__svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1519 200"
          >
            <defs></defs>
            <path d="M708 103l9-5 13 1 2-2 5 1h8l1-1 42-5h7l7 3v1l12-2a9368 9368 0 0129-6l2-5 12 1 6-2 3 1 2 1v-2l13-2v1l4 2 7-1h1l17-3 1 2 4-1 18-7 3-1 4-1h9l13-1 1-4 3-2 13 1v2l22-2 10-3h6l10 5 16-5 15-3 2-1 8-4 6-2 12-1 7-2 8 5 7 1 22-9h7l5-1v-1l25-3 1 2 5 2v1h11l2 1 8-4h3l-1 1h11l10-6 6 3 9-1 4-1 1 1 1-2 6-1 1-1 10-2h2l7-5v1h4l3-1c11 0 23 2 34-3 2-2 7 0 10 0l12 1 4 1 9 2 12-1 11-3 11 1h4l10-6 17 1 2 1c9 2 19-3 22-11l1-1 9 1 15-5c3-1 9 4 9-5 5 0 5 3 5 7l2 3 4-1 4-2 9-4 3-3h3l8-4 6-3 26 2 7-4h18l7 1c10 3 13-6 17-12l8 4 3-1 14-3 15-2a38 38 0 01-5-1l-8-4 7-8 8-4-10-136-922 71 16 205z"></path>
            <path d="M-36 193l9-5 13 1 2-2 5 1h8l1-1 42-5h7l7 3v1l12-2a9328 9328 0 0129-6l2-5 12 1 6-2 3 1 2 1v-2l13-2v1l4 2 7-1h1l17-3 1 2 4-1 18-7 3-1 4-1h9l13-1 1-4 3-2 13 1v2l22-2 10-3h6l10 5 16-5 15-3 2-1 8-4 6-2 12-1 7-2 8 5 7 1 22-9h7l5-1v-1l25-3 1 2 5 2v1h11l2 1 8-4h3l-1 1h9a6 6 0 002 0l10-6 6 3 9-1 4-1a6 6 0 001 1l1-2 6-1 1-1 10-2h2l7-5v1h4l3-1c11 0 23 2 34-3 2-2 7 0 10 0l12 1 4 1 9 2 12-1 11-3 11 1h4l10-6 17 1 2 1c9 2 19-3 22-11l1-1 9 1 15-5c3-1 9 4 9-5 5 0 5 3 5 7l2 3 4-1 4-2 9-4 3-3h3l8-4 6-3 26 2 7-4h18l7 1c10 3 13-6 17-12l8 4 3-1 14-3 15-2a37 37 0 01-5-1l-8-4 7-8 8-4-10-136-922 71 16 205z"></path>
          </svg>
        </div>
        <div className={styles.container__content}>
          <div className={styles.content__article}>
            <a href="/home" className={styles.article__link}>
              <svg className={styles.link__logo} viewBox="0 0 24 24">
                <g color="#1da1f2">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </g>
              </svg>
            </a>
            <h1 className={styles.article__header}>{t('title')}</h1>
            <p className={styles.article__description}>{t('arcticle')}</p>
            <a href="/home" className={styles.article__button}>
              {t('button')}
            </a>
          </div>
          <img
            className={styles.content__image}
            src="https://abs.twimg.com/errors/ErrorState_NotFound.png"
            alt="Ухоженный пудель с бантиком на голове сидит в кресле, как человек."
          />
          <div className={styles.content__footer}>
            <ul className={styles.footer__ul}>
              <li className={styles.ul__li}>
                <a href="/#" className={styles.li__a}>
                  {t('home')}
                </a>
              </li>
              <li className={styles.ul__li}>
                <a href="/*" className={styles.li__a}>
                  {t('status')}
                </a>
              </li>
              <li className={styles.ul__li}>
                <a href="/*" className={styles.li__a}>
                  {t('terms')}
                </a>
              </li>
              <li className={styles.ul__li}>
                <a href="/*" className={styles.li__a}>
                  {t('privacy')}
                </a>
              </li>
              <li className={styles.ul__li}>
                <a href="/*" className={styles.li__a}>
                  {t('cookie')}
                </a>
              </li>
              <li className={styles.ul__li}>
                <a href="/*" className={styles.li__a}>
                  {t('contacts')}
                </a>
              </li>
              <li className={styles.ul__li}>
                <a href="/*" className={styles.li__a}>
                  {t('advertising')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: `
    block
    h-full
    overflow-hidden
    bg-[#fccbc0]
    bg-[url('https://abs.twimg.com/errors/cracking.png')]
    bg-center
    bg-no-repeat
    bg-blend-lighten
    bg-cover
  `,
  container__themes: `
    fixed
    right-0
    mt-1 
    mr-1 
    z-10
  `,
  container__body: `
    h-full
    overflow-hidden
    m-0
    p-0
    bg-transparent
    overflow-hidden
    text-[#000] dark:text-[#fff]
    max-h-[100vh]
  `,
  body__top: `
    bg-white dark:bg-[#030303]
    absolute
    h-[45vh]
    w-[100vw]
    z-[0]
    block
  `,
  top__svg: `
    fill-white dark:fill-[#030303]
    absolute
    w-full
    h-[auto]
    top-[99%]
  `,
  container__content: `
    max-w-[1200px]
    my-0 
    mx-[auto]
    relative
    h-full
  `,
  container__buttons: `
    flex 
    flex-row
    fixed 
    mt-1 
    ml-1 
    gap-1
    z-10
  `,
  buttons__locales: `
    w-max
    py-1 
    px-2 
    bg-gray-700 
    text-white 
    rounded-lg
  `,
  content__article: `
    pt-[5vh]
    px-[20px]
    pb-[0]
    ml-[4%]
    max-w-[520px]
    text-black dark:text-white
  `,
  content__image: `
    h-[80vh]
    z-[1]
    absolute
    top-0
    bottom-0
    my-[auto]
    mx-[0]
    w-[unset]
    left-[unset]
    right-0
    max-h-[unset]
  `,
  content__footer: `
    absolute
    bottom-0
    w-full
    text-center
    text-[13px]
    py-[10px]
    px-[0]
  `,
  footer__ul: `
    mb-[5px]
    p-[0]
    m-[0]
    list-none
  `,
  ul__li: `
    inline
    my-[0]
    mx-[5px]
    leading-[20px]
    whitespace-nowrap
    text-[#657786]
    p-[0]
    m-[0]
    list-none
  `,
  li__a: `
    text-[#657786]
    outline-[0]
    no-underline
    hover:underline
    focus:underline
  `,
  li__span: `
    inline-block
    min-w-[2em]
    text-[#657786]
  `,
  article__link: `
    block
    w-[46px]
    h-[38px]
  `,
  link__logo: `
    w-[46px]
    h-[38px]
  `,
  article__header: `
    mt-[30px]
    w-[350px]
    text-[60px]
    font-bold
    leading-none
  `,
  article__description: `
    my-[20px]
    w-[375px]
    text-[20px]
    leading-[25px]
  `,
  article__button: `
    inline-block
    px-[2em]
    py-[1em]
    rounded-full
    shadow-[0px_0px_0px_2px_black_inset] dark:shadow-[0px_0px_0px_2px_white_inset]
    hover:bg-black dark:hover:bg-white 
    hover:text-white dark:hover:text-black 
  `,
}
