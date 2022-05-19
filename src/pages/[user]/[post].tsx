import { Article, PostContainer, PostHeader } from "../../component/post";
import TopBar from "../../component/TopBar/TopBar";

const Post = () => {
  return (
    <div>
      <TopBar type="scrollHeader" location="post" />
      <TopBar location="post" />
      <PostContainer>
        <PostHeader />
        <Article />
      </PostContainer>
    </div>
  );
};

export default Post;
