import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
const Mobile = () => {
  return (
    <Wrapper>
      <Link href={"/mobile/works/fumin"}>Fumin</Link>
      <br />
      <Link href={"/mobile/works/hazuki"}>
        <a>Hazuki</a>
      </Link>{" "}
      <br />
      <Link href={"/mobile/works/heejun"}>
        <a>Heejun</a>
      </Link>{" "}
      <br />
      <Link href={"/mobile/works/kana"}>
        <a>Kana</a>
      </Link>{" "}
      <br />
      <Link href={"/mobile/works/oga"}>
        <a>Oga</a>
      </Link>{" "}
      <br />
      <Link href={"/mobile/works/oto"}>
        <a>Oto</a>
      </Link>{" "}
      <br />
      <Link href={"/mobile/works/shinogu"}>
        <a>Shinogu</a>
      </Link>{" "}
      <br />
      <Link href={"/mobile/works/takuro"}>
        <a>Takuro</a>
      </Link>{" "}
      <br />
      <Link href={"/mobile/works/uena"}>
        <a>Uena</a>
      </Link>{" "}
      <br />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export default Mobile;
