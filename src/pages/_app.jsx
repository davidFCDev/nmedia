import 'focus-visible'
import '@/styles/tailwind.css'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <meta
                    http-equiv="Permissions-Policy"
                    content="interest-cohort=()"
                ></meta>

                {/* <meta
                    property="og:image"
                    content="https://imagizer.imageshack.com/img922/797/njUmcA.png"
                /> */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nnmedia.com" />
                <meta property="og:description" content="NN Media" />
                <meta property="og:title" content="NN Media" />
                <meta property="og:site_name" content="NN Media" />
                {/* <meta
                    property="article:publisher"
                    content="https://www.facebook.com/profile.php?id=100088710835317"
                ></meta> */}
                <meta
                    property="article:modified_time"
                    content="2023-05-24T13:20:08+00:00"
                ></meta>
                <meta
                    name="twitter:card"
                    property="twitter:card"
                    content="summary_large_image"
                ></meta>
                <meta
                    name="twitter:label1"
                    property="twitter:label1"
                    content="Est. reading time"
                ></meta>
                <meta
                    name="twitter:data1"
                    property="twitter:data1"
                    content="10 минути"
                ></meta>
                <meta
                    name="twitter:title"
                    property="twitter:title"
                    content="NN Media"
                />
                <meta
                    name="twitter:description"
                    property="twitter:description"
                    content="NN Media"
                />
                {/* <meta
                    name="twitter:image"
                    property="twitter:image"
                    content="https://imagizer.imageshack.com/img922/797/njUmcA.png"
                /> */}
                <meta property="twitter:image:width" content="1200" />
                <meta property="twitter:image:height" content="630" />
            </Head>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=AW-11220076704%22%3E"
                strategy="afterInteractive"
            ></Script>
            <Script strategy="afterInteractive" id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11220076704');
        `}
            </Script>
            {/* <!-- Meta Pixel Code --> */}
            <Script id="meta-pixel" strategy="afterInteractive">
                {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '229308899957593');
          fbq('track', 'PageView');
        `}
            </Script>
            <noscript>
                <Image
                    height="1"
                    width="1"
                    style="display:none"
                    alt="pixel"
                    src="https://www.facebook.com/tr?id=229308899957593&ev=PageView&noscript=1"
                />
            </noscript>
            {/* <!-- End Meta Pixel Code --> */}

            {/* <!-- Clarity Code --> */}
            <Script id="clarityCode" strategy="afterInteractive">
                {`
             (function(c,l,a,r,i,t,y){
                c[a]=c[a]function(){(c[a].q=c[a].q[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/%22+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "hyrk1w71i7");
        `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}

export default appWithTranslation(App)
