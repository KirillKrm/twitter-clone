import { useTranslation } from 'react-i18next'
import BasePage from 'app/pages/BasePage'
import SvgCurveLine from 'app/components/SVG/SvgCurveLine'
import SvgLogo from 'app/components/SVG/SvgLogo'

const buttons = [
  'home',
  'status',
  'terms',
  'privacy',
  'cookie',
  'contacts',
  'advertising',
]

export function NotFoundPage() {
  const { t } = useTranslation('notfound')

  return (
    <BasePage
      helmet={{
        title: '404 Page Not Found',
        description: 'Twitter Clone Page not found',
      }}
      langSwitch={{ page: 'notfound' }}
    >
      <div className={styles.container}>
        <div className={styles.container__body}>
          <div className={styles.body__top}>
            <div className={styles.top__svg}>
              <SvgCurveLine />
            </div>
          </div>
          <div className={styles.container__content}>
            <div className={styles.content__article}>
              <a href="/home" className={styles.article__link}>
                <SvgLogo />
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
              alt={t('imageAlt')}
            />
            <div className={styles.content__footer}>
              <ul className={styles.footer__ul}>
                {buttons.map(name => (
                  <li className={styles.ul__li}>
                    <a href="/#" className={styles.li__a}>
                      {t(name)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BasePage>
  )
}

const styles = {
  container: `
    block
    h-full
    w-full
    overflow-hidden
    bg-[#fccbc0]
    bg-[url('https://abs.twimg.com/errors/cracking.png')]
    bg-center
    bg-no-repeat
    bg-blend-lighten
    bg-cover
  `,
  container__body: `
    h-full
    overflow-hidden
    m-0
    p-0
    bg-transparent
    overflow-hidden
    text-black dark:text-white
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
  article__link: `
    block
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
