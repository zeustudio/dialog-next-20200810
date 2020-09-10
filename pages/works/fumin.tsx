import FuminDesktop from "../../components/desktop/works/fumin";
import FuminMobile from "../../components/mobile/works/fumin";
const Fumin = () => {
  return (
    <>
      <FuminDesktop />
      <FuminMobile />
    </>
  );
};
export default Fumin;

//モバイルページとデスクトップページのurl/ogp周りを統一させるためのページ、
/*
モバイルの場合
  @media screen and (min-width: 1025px) {
    display: none;
  }
デスクトップの場合 
　@media screen and (max-width: 1024px) {
    display: none;
  }
  で表示を制御しましょう。
*/
