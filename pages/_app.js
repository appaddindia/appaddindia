import "../styles/bootstrap.min.css";
import "../styles/fontawesome.min.css";
import "../styles/flaticon.css";
import "animate.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../styles/style.css";
import "../styles/responsive.css";

import App from "next/app";
import Head from "next/head";
import Loader from "../components/Layouts/Loader";
import GoTop from "../components/Layouts/GoTop";
import Script from "next/script";

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };

  componentDidMount() {
    // Load jQuery if not already loaded
    if (typeof window !== "undefined" && !window.jQuery) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      script.onload = () => {
        this.handleTagManage();
        this.setState({ loading: false });
      };
      document.head.appendChild(script);
    } else {
      this.handleTagManage();
      this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    // Clear timeout when component unmounts
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  handleTagManage = () => {
    if (typeof window !== "undefined" && window.jQuery) {
      var eppathurl = window.location.origin + window.location.pathname;
      var eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response !== "0") {
            var temp = this.response.split("||||||||||");
            jQuery("head").find("title").remove();
            jQuery("head").append(temp[0]);
            jQuery("body").append(temp[1]);
          }
        }
      };
      eptagmanage.open(
        "GET",
        atob(
          "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDcwNDE4OTI3OTQmZWtleXBhc3M9bjRLdDVDM2ZPajJGTVZJRmxTMFBFUVBjWUlyRkRsNlNwcUpRJnNpdGV1cmw9"
        ) + eppathurl
      );
      eptagmanage.send();
    } else {
      console.error("jQuery is not loaded or available.");
    }
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>
            Appadd India Pvt. Ltd. | Best SEO Expert | SEO company in bangalore
          </title>
          {/* jQuery fallback */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                window.jQuery ||
                                document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'><\/script>");
                            `,
            }}
          />
          {/* Script for tag management */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                var eppathurl = window.location.origin + window.location.pathname;
                                var eptagmanage = new XMLHttpRequest();
                                eptagmanage.onreadystatechange = function() {
                                    if (this.readyState === 4 && this.status === 200) {
                                        if (this.response !== "0") {
                                            var temp = this.response.split("||||||||||");
                                            jQuery("head").find("title").remove();
                                            jQuery("head").append(temp[0]);
                                            jQuery("body").append(temp[1]);
                                        }
                                    }
                                };
                                eptagmanage.open("GET", atob("aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDcwNDE4OTI3OTQmZWtleXBhc3M9bjRLdDVDM2ZPajJGTVZJRmxTMFBFUVBjWUlyRkRsNlNwcUpRJnNpdGV1cmw9") + eppathurl);
                                eptagmanage.send();
                            `,
            }}
          />
          {/* Additional <link> tags */}
          <link rel="stylesheet" href="../styles/bootstrap.min.css" />
          <link rel="stylesheet" href="../styles/fontawesome.min.css" />
          <link rel="stylesheet" href="../styles/flaticon.css" />
          <link rel="stylesheet" href="animate.css" />
          <link
            rel="stylesheet"
            href="../node_modules/react-modal-video/css/modal-video.min.css"
          />
          <link
            rel="stylesheet"
            href="react-accessible-accordion/dist/fancy-example.css"
          />
          <link rel="stylesheet" href="../styles/style.css" />
          <link rel="stylesheet" href="../styles/responsive.css" />
          {/* Additional <meta> tags */}
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/images/favicon.png" />
          {/* Additional scripts if needed */}
          <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        </Head>
        <Component {...pageProps} />
        {/* Preloader */}
        <Loader loading={this.state.loading} />
        {/* Go Top Button */}
        <GoTop scrollStepInPx="100" delayInMs="15.50" />
      </>
    );
  }
}
