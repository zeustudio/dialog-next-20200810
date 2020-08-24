//import OtoDesktop from "../../components/desktop/works/oto"
import OtoMobile from "../../components/mobile/works/oto";
const Oto = () => {
  return (
    <>
      <OtoMobile />
    </>
  );
};
export default Oto;

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
