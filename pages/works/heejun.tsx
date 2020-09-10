import HeejunDesktop from "../../components/desktop/works/heejun";
import HeejunMobile from "../../components/mobile/works/heejun";
const Heejun = () => {
  return (
    <>
      <HeejunDesktop />
      <HeejunMobile />
    </>
  );
};
export default Heejun;

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
