import KanaDesktop from "../../components/desktop/works/kana";
import KanaMobile from "../../components/mobile/works/kana";
const Kana = () => {
  return (
    <>
      <KanaDesktop />
      <KanaMobile />
    </>
  );
};
export default Kana;

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
