//import ShinoguDesktop from "../../components/desktop/works/shinogu"
import ShinoguMobile from "../../components/mobile/works/shinogu";
const Shinogu = () => {
  return (
    <>
      <ShinoguMobile />
    </>
  );
};
export default Shinogu;

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
