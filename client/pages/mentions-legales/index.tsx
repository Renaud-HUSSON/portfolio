import { NextSeo } from 'next-seo'
import { Ga } from '../../components/common/Ga/Ga'

const MentionsLegales = () => {
  return (
    <Ga>
      <NextSeo
        title='Renaud HUSSON - Mentions légales'
        description="Cette page présente les mentions légales liés au site, tel que mes informations et l'hébergeur du site"
        openGraph={{
          title: 'Renaud HUSSON - Mentions légales',
          description:
            "Cette page présente les mentions légales liés au site, tel que mes informations et l'hébergeur du site",
          type: 'website',
          images: [
            {
              url: 'https://renaudhusson.fr/ogbanner.big.png',
              width: 1920,
              height: 1080,
              alt: 'Site de Renaud HUSSON',
            },
            {
              url: 'https://renaudhusson.fr/ogbanner.png',
              width: 720,
              height: 405,
              alt: 'Site de Renaud HUSSON',
            },
            {
              url: 'https://renaudhusson.fr/ogbanner.min.png',
              width: 300,
              height: 169,
              alt: 'Site de Renaud HUSSON',
            },
          ],
          profile: {
            firstName: 'Renaud',
            lastName: 'HUSSON',
          },
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <main className='mentions-legales'>
        <h1>Mentions Légales:</h1>
        <section>
          <h2>Mes coordonnées:</h2>
          <p>Nom: HUSSON</p>
          <p>Préno: Renaud</p>
          <p>Numéro de téléphone: 06 78 91 02 75</p>
        </section>
        <section>
          <h2>Hébergement:</h2>
          <p>Nom: fastpipe.io</p>
          <p>Numéro de téléphone: +49 8764 258 989 0</p>
          <p>Adresse: Mitterfeld 47, 85419 Mauern, Allemagne</p>
        </section>
      </main>
    </Ga>
  )
}

export default MentionsLegales
