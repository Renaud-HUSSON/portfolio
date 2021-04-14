import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { Layout } from '../components/common/Layout/Layout'

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='fr'>
        <Head />
        <body>
          <Layout>
            <>
              <Main />
              <NextScript />
            </>
          </Layout>
        </body>
      </Html>
    )
  }
}

export default CustomDocument
