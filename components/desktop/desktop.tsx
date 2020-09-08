import styled from "@emotion/styled";
import Link from "next/link";

const Desktop = () => {
  return (
    <Wrapper>
      <Link href="works/fumin">
        <a>fumin</a>
      </Link>
      <br />
      <Link href="works/hazuki">
        <a>hazuki</a>
      </Link>
      <br />
      <Link href="works/heejun">
        <a>heejun</a>
      </Link>
      <br />
      <Link href="works/kana">
        <a>kana</a>
      </Link>
      <br />
      <Link href="works/oga">
        <a>oga</a>
      </Link>
      <br />
      <Link href="works/oto">
        <a>oto</a>
      </Link>
      <br />
      <Link href="works/shinogu">
        <a>shinogu</a>
      </Link>
      <br />
      <Link href="works/takuro">
        <a>takuro</a>
      </Link>
      <br />
      <Link href="works/uena">
        <a>uena</a>
      </Link>
      <br />
    </Wrapper>
  );
};

export default Desktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
