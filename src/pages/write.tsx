import styled from "styled-components";
import { PostEditor, PostHeader } from "../component/MarkdownRender";
import SubmitContainer from "../component/MarkdownRender/SubmitContainer";
import theme from "../styles/theme";

const Write = () => {
  return (
    <div>
      <PostHeader />
      <PostWrapper>
        <PostEditor />
      </PostWrapper>
      <SubmitContainer />
    </div>
  );
};

const PostWrapper = styled.div`
  padding: 0 6rem;
  min-height: 90vh;

  .MoaeBlogEditor {
    min-height: 90vh;
  }
  .ProseMirror,
  .toastui-editor-contents,
  .toastui-editor-md-preview {
    font-size: 16px;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.COLORS.MAIN};
    }
  }
  @media (max-width: 568px) {
    padding: 0;
    .ProseMirror,
    .toastui-editor-contents,
    .toastui-editor-md-preview {
      font-size: 14px;
      padding: 0;
    }
  }
`;

export default Write;
