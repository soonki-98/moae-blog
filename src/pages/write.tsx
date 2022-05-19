import styled from "styled-components";
import PostEditor from "../component/MarkdownRender/PostEditer";
import TopBar from "../component/TopBar/TopBar";
import theme from "../styles/theme";

const Write = () => {
  return (
    <div>
      <TopBar type="scrollHeader" location="post" />
      <TopBar location="post" />
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
