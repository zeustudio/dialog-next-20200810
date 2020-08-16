import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
const Mobile = () => {
  return (
    <Wrapper>
      <Link href={"/mobile/works/fumin"}>Fumin</Link>
      <br />
      <Link href={"/mobile/works/hazuki"}>Hazuki</Link> <br />
      <Link href={"/mobile/works/heejun"}>Heejun</Link> <br />
      <Link href={"/mobile/works/kana"}>Kana</Link> <br />
      <Link href={"/mobile/works/oga"}>Oga</Link> <br />
      <Link href={"/mobile/works/oto"}>Oto</Link> <br />
      <Link href={"/mobile/works/shinogu"}>Shinogu</Link> <br />
      <Link href={"/mobile/works/takuro"}>Takuro</Link> <br />
      <Link href={"/mobile/works/uena"}>Uena</Link> <br />
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
