import React from "react";
import styled from "@emotion/styled";
import lineUp from "../../images/lineUp.svg";
import lineDown from "../../images/lineDown.svg";
import WorkData from "../../constants/workdata";
import Link from "next/link";
const keyArray: string[] = Array.from(WorkData.keys());
interface Props {
  width: number;
  height: number;
  isEnglishState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Works: React.FC<Props> = ({
  width,
  height,
  isEnglishState: [isEnglish, setIsEnglish],
}) => {
  return (
    <Wrapper style={{ width: width, height: height }}>
      <JPEN
        onClick={() => {
          setIsEnglish(!isEnglish);
        }}
      >
        JP/EN
      </JPEN>
      <TitleWrapper>
        <Line src={lineUp} />
        <Title>Works</Title>
        <Line src={lineDown} />
      </TitleWrapper>

      <WorksWrapper>
        {keyArray.map((key, index) => {
          return (
            <Link
              href={{
                pathname: `/mobile/works/${key}`,
                query: { isEnglish: isEnglish },
              }}
              key={index}
            >
              <WorkWrapper>
                <Thumb src={WorkData.get(key).overview.img} />
                {WorkData.get(key).overview.TitleJP === ""}
                <SmokedGlass>
                  {WorkData.get(key).overview.TitleJP === ""
                    ? WorkData.get(key).overview.TitleEN
                    : isEnglish
                    ? WorkData.get(key).overview.TitleEN
                    : WorkData.get(key).overview.TitleJP}
                </SmokedGlass>
              </WorkWrapper>
            </Link>
          );
        })}
      </WorksWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  scroll-snap-align: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #eac69a;
  position: relative;
`;
const Line = styled.img`
  width: 90%;
`;
const Title = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  line-height: 4rem;
`;
const WorksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const WorkWrapper = styled.div`
  width: 30%;
  position: relative;
  margin: 1%;
`;
const Thumb = styled.img`
  width: 100%;
  height: 100%;
`;
const SmokedGlass = styled.div`
  position: absolute;
  width: 90%;
  height: 40%;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: right;
  padding: 5%;
  overflow: scroll;
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const JPEN = styled.div`
  position: absolute;
  width: 80px;
  height: 40px;
  right: 5%;
  top: 3%;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
`;
export default Works;
