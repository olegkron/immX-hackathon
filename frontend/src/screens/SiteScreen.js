// main screen, displays big title underlined by a gradient line, subtitle

import React, { useRef, useState } from "react";
import TextH1 from "../text/TextH1";
import colors from "../constants/colors";
import { MetaTags } from "react-meta-tags";

// import
function SiteScreen() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [dimentions, setDimentions] = useState({ height: windowSize.current[1], width: windowSize.current[0] });
  //   useEffect(() => {
  //     setDimentions({ height: windowSize.current[1], width: windowSize.current[0] });
  //   }, [windowSize]);
  console.log(dimentions.width * 0.85);

  return (
    <div className="site-screen" style={{ flex: 1, maxWidth: 1500, width: "100vw" }}>
      <MetaTags>
        <script src="https://unpkg.com/scrollreveal"></script>
      </MetaTags>

      <div className="header" style={{ alignItems: "center" }}>
        <TextH1 style={{ fontSize: "4vw" }}>Create competitions.</TextH1>
        <TextH1 style={{ fontSize: "4vw" }} bold>
          find the best talent.
        </TextH1>
      </div>

      <div
        className="shadow"
        style={{
          flex: 1,
          aspectRatio: 1.5,
          backgroundColor: colors.background,
          position: "relative",
        }}
      ></div>
      <div
        style={{
          flex: 1,
          position: "relative",
          minHeight: 250,
        }}
        className="second-container"
      >
        <div
          style={{
            maxWidth: "75%",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <TextH1 id="second-container-text">
            <span className="custom-underline"> Showcase</span> is a web3 competition portal for photographers, copywriters, designers, and other
            creatives.
          </TextH1>
        </div>
        <div className="second-image-container" style={{ minWidth: 200 }}>
          <div
            className="shadow"
            style={{
              flex: 1,
              aspectRatio: 1.5,
              //   width: 200,
              backgroundColor: colors.background,
              position: "relative",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          position: "relative",
          minHeight: 250,
        }}
        className="second-container"
      >
        <div
          style={{
            maxWidth: "75%",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <TextH1 id="second-container-text">
            Our gamified competitions help businesses <span className="custom-underline">find talent</span>, rewarding artists with prizes &
            opportunities.
          </TextH1>
        </div>
        <div className="second-image-container" style={{ minWidth: 200 }}>
          <div
            className="shadow"
            style={{
              flex: 1,
              aspectRatio: 1.5,
              backgroundColor: colors.background,
              position: "relative",
            }}
          ></div>
        </div>
      </div>

      <div style={{ alignItems: "center", padding: "80px 20px" }}>
        <div style={{ flex: 1 }}>
          <TextH1 id="last-container-text">The cutting edge.</TextH1>
          <TextH1 id="second-container-text">
            <span className="custom-underline"> Showcase</span> is using the security of Ethereum and speed of ImmutableX to ensure fast & gas-free
            operation.
          </TextH1>
        </div>
        <div style={{ flex: 1, alignItems: "center" }}>
          <div
            className="btn-shadow"
            style={{
              backgroundColor: colors.background,
              borderRadius: 12,
            }}
          >
            <TextH1 id="second-container-text">VIEW DEMO</TextH1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteScreen;
