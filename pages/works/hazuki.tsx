import HazukiDesktop from "../../components/desktop/works/hazuki";
import HazukiMobile from "../../components/mobile/works/hazuki";
const Hazuki = () => {
  return (
    <>
      <HazukiDesktop />
      <HazukiMobile />
    </>
  );
};
export default Hazuki;

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
