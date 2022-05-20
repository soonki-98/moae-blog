import dynamic from "next/dynamic";
import styled from "styled-components";
import theme from "../../styles/theme";

const MarkdownViewer = dynamic(() => import("./MarkdownViewer"), { ssr: false });

const markdown = `
  # h1

  ## h2

  **굵게**

  \`\`\`javascript
    const a = "string";
  \`\`\`

  \`hi\`
`;

const PostArticle = () => {
  return (
    <Wrapper>
      <MarkdownViewer initialValue={markdown} />
    </Wrapper>
  );
};

export default PostArticle;

const Wrapper = styled.article`
  padding-right: 4rem;
  margin-top: 3rem;
  width: 100%;
  p {
    font-size: ${theme.FONT.NORMAL.fontSize};
    line-height: ${theme.FONT.NORMAL.lineHeight};
  }
  @media (max-width: 568px) {
    padding-right: 0;
  }
`;
