import { useEffect, useState } from "react";
import styled from "styled-components";
import { PostEditor, MarkdownPostHeader } from "../component/MarkdownRender";
import SubmitContainer from "../component/MarkdownRender/SubmitContainer";
import theme from "../styles/theme";

const Write = () => {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    if (window.document.documentElement.clientWidth <= 568) setDevice("mobile");
    else setDevice("desktop");
  }, []);

  return (
    <div>
      <MarkdownPostHeader />
      <PostWrapper>
        <PostEditor />
      </PostWrapper>
      {device === "mobile" && <SubmitContainer />}
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
