import { useState } from "react";

import SvgLogo from "./assets/vite.svg?react";
import SvgTitle from "./assets/vite.svg";
import JpgLogo from "./assets/vite.jpg";
import PngLogo from "./assets/vite.png";

function App() {
  const [svgCount, setSvgCount] = useState(0);
  const [svgImgCount, setSvgImgCount] = useState(0);
  const [jpgCount, setJpgCount] = useState(0);
  const [pngCount, setPngCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        width: "calc(100dvw - 50px)",
        height: "calc(100dvh - 50px)",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ width: "100%", textAlign: "center", marginBottom: "50px" }}>Svg ReactComponent</h1>
        <SvgLogo style={{ width: "300px", height: "300px", marginBottom: "50px" }} onClick={() => setSvgCount((count) => count + 1)} />
        <div style={{ width: "100%", textAlign: "center" }}>Svg ReactComponent count is {svgCount}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ width: "100%", textAlign: "center", marginBottom: "50px" }}>Svg As String</h1>
        <img
          src={SvgTitle}
          alt="Svg as Title"
          style={{ width: "300px", height: "300px", marginBottom: "50px" }}
          onClick={() => setSvgImgCount((count) => count + 1)}
        />
        <div style={{ width: "100%", textAlign: "center" }}>Svg with Img Src count is {svgImgCount}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ width: "100%", textAlign: "center", marginBottom: "50px" }}>JPG</h1>
        <img
          src={JpgLogo}
          alt="Jpg logo"
          style={{ width: "300px", height: "300px", marginBottom: "50px" }}
          onClick={() => setJpgCount((count) => count + 1)}
        />
        <div style={{ width: "100%", textAlign: "center" }}>Jpg count is {jpgCount}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ width: "100%", textAlign: "center", marginBottom: "50px" }}>PNG</h1>
        <img
          src={PngLogo}
          alt="Png logo"
          style={{ width: "300px", height: "300px", marginBottom: "50px" }}
          onClick={() => setPngCount((count) => count + 1)}
        />
        <div style={{ width: "100%", textAlign: "center" }}>Png count is {pngCount}</div>
      </div>
    </div>
  );
}

export default App;
