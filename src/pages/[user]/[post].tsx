import { PostArticle, PostContainer, PostHeader } from "../../component/Post";
import TopBar from "../../component/TopBar/TopBar";

const Post = () => {
  return (
    <div>
      <TopBar type="scrollHeader" location="post" />
      <TopBar location="post" />
      <PostContainer>
        <PostHeader />
        <PostArticle />
      </PostContainer>
    </div>
  );
};

export default Post;
