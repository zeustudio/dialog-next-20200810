import UenaDesktop from "../../components/desktop/works/uena";
import UenaMobile from "../../components/mobile/works/uena";
const Uena = () => {
  return (
    <>
      <UenaDesktop />
      <UenaMobile />
    </>
  );
};
export default Uena;

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
