import { css } from "@emotion/core";
import emotionReset from "emotion-reset";
import { Color } from "./../constants/Color";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const globalCSS = css`
  ${emotionReset}
  ${dom.css()}
  html {
    width: 100%;
    font-size: 62.5%;
  }

  body {
    width: 100%;
    color: ${Color.FONT_COLOR};
    font-size: 1.4rem;
    font-family: "Jost", "YuGothic", "Yu Gothic", "游ゴシック", "Meiryo",
      "メイリオ", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
      -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    background-color: ${Color.BASE_COLOR};
  }

  ul,
  ol {
    list-style: none;
  }

  h1 {
    font-size: 5rem;
    line-height: 5.5rem;
  }

  h2 {
    font-size: 3.5rem;
    line-height: 4.2rem;
  }

  h3 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: bold;
  }

  button {
    font-size: 2.4rem;
    line-height: 3.2rem;

    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    white-space: pre-line;
    text-align: justify;
  }
`;

export default globalCSS;
