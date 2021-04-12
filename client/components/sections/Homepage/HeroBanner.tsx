import { RefObject } from 'react'
import Particles from 'react-tsparticles'
import { Banner } from '../../../interfaces'

interface HeroBannerProps {
  banner: Banner
  projetsRef: RefObject<HTMLElement>
  handleArrowClick?: () => void
}

export const HeroBanner = ({
  banner,
  projetsRef,
  handleArrowClick = () => {
    projetsRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  },
}: HeroBannerProps) => {
  return (
    <>
      <Particles
        style={{ position: 'absolute' }}
        options={{
          particles: {
            number: {
              value: 15,
              density: {
                enable: false,
              },
            },
            fpsLimit: 60,
            opacity: {
              value: 1,
              anim: {
                minimumValue: 1,
              },
            },
            size: {
              value: 6,
              random: true,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              outMode: 'bounce',
              random: true,
              speed: 0.5,
              straight: false,
            },
            color: {
              value: '#fe4a57',
            },
          },
        }}
      />
      <section className='home__hero'>
        <nav>
          <p>RENAUD HUSSON</p>
          <p>À PROPOS</p>
        </nav>
        <div className='home__banner'>
          <div className='home__banner__left'>
            <div className='home__banner__logo'>
              <div>
                <h1>RENAUD HUSSON</h1>
              </div>
              <div>
                <p>Développeur web frontend</p>
              </div>
            </div>
            <p>{banner.description}</p>
          </div>
          <div className='home__banner__right'>
            <svg
              width='514'
              height='714'
              viewBox='0 0 514 714'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                width='514'
                height='714'
                rx='2'
                fill='#0F0F10'
                fillOpacity='0.9'
              />
              <circle id='circle1' cx='51' cy='41' r='11' fill='#FE4A57' />
              <circle id='circle2' cx='83' cy='41' r='11' fill='#ED8144' />
              <circle id='circle3' cx='115' cy='41' r='11' fill='#33C141' />
              <mask
                id='mask0'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='42'
                y='117'
                width='264'
                height='20'
              >
                <rect x='42' y='117' width='264' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask0)'>
                <rect
                  x='42'
                  y='117'
                  width='64'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='116'
                  y='117'
                  width='80'
                  height='20'
                  rx='10'
                  fill='#FE4A57'
                />
                <rect
                  x='206'
                  y='117'
                  width='100'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask1'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='86'
                y='149'
                width='354'
                height='20'
              >
                <rect x='86' y='149' width='354' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask1)'>
                <rect
                  x='86'
                  y='149'
                  width='88'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='184'
                  y='149'
                  width='77'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='277'
                  y='149'
                  width='88'
                  height='20'
                  rx='10'
                  fill='#FE4A57'
                />
                <rect
                  x='380'
                  y='149'
                  width='60'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask2'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='86'
                y='181'
                width='388'
                height='20'
              >
                <rect x='86' y='181' width='388' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask2)'>
                <rect
                  x='86'
                  y='181'
                  width='88'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='184'
                  y='181'
                  width='93'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='287'
                  y='181'
                  width='70'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='367'
                  y='181'
                  width='107'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask3'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='40'
                y='213'
                width='424'
                height='20'
              >
                <rect x='40' y='213' width='424' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask3)'>
                <rect
                  x='40'
                  y='213'
                  width='101'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='151'
                  y='213'
                  width='75'
                  height='20'
                  rx='10'
                  fill='#FE4A57'
                />
                <rect
                  x='236'
                  y='213'
                  width='100'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='346'
                  y='213'
                  width='118'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask4'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='74'
                y='245'
                width='315'
                height='20'
              >
                <rect x='74' y='245' width='315' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask4)'>
                <rect
                  x='74'
                  y='245'
                  width='101'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='185'
                  y='245'
                  width='136'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='331'
                  y='245'
                  width='58'
                  height='20'
                  rx='10'
                  fill='#FE4A57'
                />
              </g>
              <mask
                id='mask5'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='74'
                y='277'
                width='366'
                height='20'
              >
                <rect x='74' y='277' width='366' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask5)'>
                <rect
                  x='74'
                  y='277'
                  width='78'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='162'
                  y='277'
                  width='111'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='283'
                  y='277'
                  width='41'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='334'
                  y='277'
                  width='106'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask6'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='123'
                y='309'
                width='232'
                height='20'
              >
                <rect x='123' y='309' width='232' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask6)'>
                <rect
                  x='123'
                  y='309'
                  width='87'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='220'
                  y='309'
                  width='135'
                  height='20'
                  rx='10'
                  fill='#FE4A57'
                />
              </g>
              <mask
                id='mask7'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='72'
                y='341'
                width='301'
                height='20'
              >
                <rect x='72' y='341' width='301' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask7)'>
                <rect
                  x='72'
                  y='341'
                  width='117'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='199'
                  y='341'
                  width='47'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='256'
                  y='341'
                  width='117'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask8'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='72'
                y='373'
                width='340'
                height='20'
              >
                <rect x='72' y='373' width='340' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask8)'>
                <rect
                  x='72'
                  y='373'
                  width='51'
                  height='20'
                  rx='10'
                  fill='#FE4A57'
                />
                <rect
                  x='133'
                  y='373'
                  width='103'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='246'
                  y='373'
                  width='166'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask9'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='40'
                y='405'
                width='158'
                height='20'
              >
                <rect x='40' y='405' width='158' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask9)'>
                <rect
                  x='40'
                  y='405'
                  width='74'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='124'
                  y='405'
                  width='74'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask10'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='40'
                y='437'
                width='294'
                height='20'
              >
                <rect x='40' y='437' width='294' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask10)'>
                <rect
                  x='40'
                  y='437'
                  width='139'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='189'
                  y='437'
                  width='84'
                  height='20'
                  rx='10'
                  fill='#FE4A57'
                />
                <rect
                  x='283'
                  y='437'
                  width='51'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask11'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='107'
                y='469'
                width='340'
                height='20'
              >
                <rect x='107' y='469' width='340' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask11)'>
                <rect
                  x='107'
                  y='469'
                  width='51'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='168'
                  y='469'
                  width='91'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='269'
                  y='469'
                  width='178'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask12'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='107'
                y='501'
                width='275'
                height='20'
              >
                <rect x='107' y='501' width='275' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask12)'>
                <rect
                  x='107'
                  y='501'
                  width='203'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='320'
                  y='501'
                  width='62'
                  height='20'
                  rx='10'
                  fill='#FE4A57'
                />
              </g>
              <mask
                id='mask13'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='74'
                y='533'
                width='333'
                height='20'
              >
                <rect x='74' y='533' width='333' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask13)'>
                <rect
                  x='74'
                  y='533'
                  width='130'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='214'
                  y='533'
                  width='193'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask14'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='40'
                y='565'
                width='334'
                height='20'
              >
                <rect x='40' y='565' width='334' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask14)'>
                <rect
                  x='40'
                  y='565'
                  width='98'
                  height='20'
                  rx='10'
                  fill='#FE4A57'
                />
                <rect
                  x='151'
                  y='565'
                  width='148'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='309'
                  y='565'
                  width='65'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask15'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='40'
                y='597'
                width='291'
                height='20'
              >
                <rect x='40' y='597' width='291' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask15)'>
                <rect
                  x='40'
                  y='597'
                  width='158'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='208'
                  y='597'
                  width='123'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
              </g>
              <mask
                id='mask16'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='40'
                y='629'
                width='310'
                height='20'
              >
                <rect x='40' y='629' width='310' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask16)'>
                <rect
                  x='40'
                  y='629'
                  width='55'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='105'
                  y='629'
                  width='109'
                  height='20'
                  rx='10'
                  fill='#C4C4C4'
                />
                <rect
                  x='224'
                  y='629'
                  width='126'
                  height='20'
                  rx='10'
                  fill='#FE4A57'
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          className='home__banner__arrow'
          onClick={handleArrowClick}
          data-testid='scroll-down-arrow'
        >
          <svg
            width='16'
            height='19'
            viewBox='0 0 16 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.29289 18.7071C7.68342 19.0976 8.31658 19.0976 8.70711 18.7071L15.0711 12.3431C15.4616 11.9526 15.4616 11.3195 15.0711 10.9289C14.6805 10.5384 14.0474 10.5384 13.6569 10.9289L8 16.5858L2.34315 10.9289C1.95262 10.5384 1.31946 10.5384 0.928932 10.9289C0.538407 11.3195 0.538407 11.9526 0.928932 12.3431L7.29289 18.7071ZM7 -6.71024e-08L7 9L9 9L9 6.71024e-08L7 -6.71024e-08ZM7 9L7 18L9 18L9 9L7 9Z'
              fill='#FE4A57'
            />
          </svg>
        </div>
      </section>
    </>
  )
}
