import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

import logo from "../../../../images/logo_white.png";

import WorkData from "../../../../constants/workdata";
import { Author } from "../../../../constants/Types";

const keyArray: Author[] = Array.from(WorkData.keys()); //作品作者リスト

interface Props {
  author: Author;
  englishTrig: boolean;
  navBarExpandTrigState: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ];
}

const NavMenu: React.FC<Props> = ({
  author,
  englishTrig,
  navBarExpandTrigState: [navBarExpandTrig, setNavBarExpandTrig],
}) => {
  const navBarAnimation = useSpring({
    transform: navBarExpandTrig
      ? `translate3d(0px,0px,0px)`
      : `translate3d(0px,120%,0px)`,
  });
  return (
    <Wrapper style={navBarAnimation}>
      <Link href={{ pathname: "/", query: { isEnglish: englishTrig } }}>
        <ItemWrapper>
          <Logo src={logo} />
          {englishTrig ? (
            <TextBox>Return to Top</TextBox>
          ) : (
            <TextBox>トップページ</TextBox>
          )}
        </ItemWrapper>
      </Link>

      {keyArray.map((key, index) => {
        return (
          <Link
            href={{
              pathname: `/works/${keyArray[index]}`,
              query: { isEnglish: englishTrig },
            }}
            key={index}
          >
            <ItemWrapper
              style={{
                backgroundColor: key === author ? "#555555" : "#282729",
              }}
            >
              <Thumb src={WorkData.get(key)?.overview.img} />
              {WorkData.get(key)?.overview.TitleJP !== "" ? (
                !englishTrig ? (
                  <TextBox>{WorkData.get(key)?.overview.TitleJP}</TextBox>
                ) : (
                  <TextBox>{WorkData.get(key)?.overview.TitleEN}</TextBox>
                )
              ) : (
                <TextBox>{WorkData.get(key)?.overview.TitleEN}</TextBox>
              )}
            </ItemWrapper>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default NavMenu;

const Wrapper = animated(styled.div`
  width: 100%;
  position: fixed;
  bottom: 40px;
  left: 0;
  background-color: #282729;
  @media screen and (max-height: 600px) {
    height: 90%;
    overflow: scroll;
  }
`);
const ItemWrapper = styled.div`
  width: 100%;
  height: 50px;
  border: white solid 1px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  margin-left: 20px;
  margin-right: 20px;
  width: 40px;
  height: 40px;
`;
const Thumb = styled.img`
  margin-left: 25px;
  margin-right: 25px;
  width: 30px;
  height: 30px;
`;
const TextBox = styled.div`
  color: white;
  font-size: 1.6rem;
`;
