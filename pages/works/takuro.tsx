//import TakuroDesktop from "../../components/desktop/works/takuro"
import TakuroMobile from "../../components/mobile/works/takuro";
const Takuro = () => {
  return (
    <>
      <TakuroMobile />
    </>
  );
};
export default Takuro;

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
