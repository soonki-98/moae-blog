import styled from "styled-components";
import { PostEditor, PostHeader } from "../component/MarkdownRender";
import theme from "../styles/theme";

const Write = () => {
  return (
    <div>
      <PostHeader />
      <PostWrapper>
        <PostEditor />
      </PostWrapper>
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
`;

export default Write;
