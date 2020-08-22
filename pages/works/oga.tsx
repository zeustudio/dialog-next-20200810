//import OgaDesktop from "../../components/desktop/works/oga"
import OgaMobile from "../../components/mobile/works/oga";
const Oga = () => {
  return (
    <>
      <OgaMobile />
    </>
  );
};
export default Oga;

//モバイルページとデスクトップページのurl/ogp周りを統一させるためのページ、
/*
モバイルの場合
  @media screen and (min-width: 1024px) {
    display: none;
  }
デスクトップの場合 
　@media screen and (max-width: 1025px) {
    display: none;
  }
  で表示を制御しましょう。
*/
