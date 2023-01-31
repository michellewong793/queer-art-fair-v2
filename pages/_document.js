import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Spartan:400, 400i,700&display=swap" rel="stylesheet"></link>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                            body {
                                font-family: "Spartan",
                                font-size:16px,
                            }
                            `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
