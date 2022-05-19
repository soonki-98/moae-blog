import styled from "styled-components";
import theme from "../../styles/theme";

const Article = () => {
  return (
    <Wrapper>
      <p>
        프론트엔드 개발할때 가장 많이 사용하는 최적화 방법 중 하나가 쓰로틀링 / 디바운싱이다. throttle과 debounce는 자주
        실행되는 함수들의 실행빈도를 줄여서 성능을 개선할 수 있다. throttle의 경우 함수 실행을 지연시켜서 실행 횟수를
        줄이면서 지정한 시간동안 한번의 실행을 보장하고, debounce는 여러번 발생하는 이벤트를 단일 이벤트로 묶는다는
        차이가 있다. 예를 들면 스크롤 이벤트에 throttle을 적용하는 경우 이벤트가 일정시간마다 발생하고, debounce를
        적용하는 경우 스크롤 이벤트가 끝난 후 (또는 시작 직후)에만 발생하게 된다.
      </p>
    </Wrapper>
  );
};

export default Article;

const Wrapper = styled.article`
  padding: 0 2rem;
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  p {
    font-size: ${theme.FONT.NORMAL.fontSize};
    line-height: ${theme.FONT.NORMAL.lineHeight};
  }
`;
