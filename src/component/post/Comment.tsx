import styled from "styled-components";
import theme from "../../styles/theme";
import { WriterInfoType } from "../../types/comment";

const Comment = ({ writerInfo }: WriterInfoType) => {
  const { img, name, date, description } = writerInfo;
  const [year, mounth, day] = date.split("-");

  return (
    <Wrapper>
      <WritterInfo>
        <img src={img} />
        <div>
          <p>{name}</p>
          <p id="date">{`${year}년 ${mounth}월 ${day}일`}</p>
        </div>
      </WritterInfo>
      <div>
        <p id="description">{description}</p>
      </div>
    </Wrapper>
  );
};

export default Comment;

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  border-bottom: 1px solid #eaeaea;
  #date {
    color: #a9a9a9;
    font-size: 14px;
  }
  img {
    border-radius: 50%;
  }

  @media (max-width: 568px) {
    p {
      font-size: 14px;
    }
    #date {
      font-size: ${theme.FONT.SMALL.fontSize};
    }
  }
`;

const WritterInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    margin-right: 1rem;
  }
  p {
    margin: 0;
  }
`;