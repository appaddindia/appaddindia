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

export default class MyApp extends App {
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
      };
      document.head.appendChild(script);
    } else {
      this.handleTagManage();
    }

    // Set loading state after 2 seconds (example)
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
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
      // Handle case where jQuery is not loaded
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
          {/* Additional script for tag management */}
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
          {/* Your other <link> and <meta> tags */}
        </Head>
        <Component {...pageProps} />
        <Loader loading={this.state.loading} />
        <GoTop scrollStepInPx="100" delayInMs="15.50" />
      </>
    );
  }
}
