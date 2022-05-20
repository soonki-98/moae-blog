import { CommentSection, PostArticle, PostContainer, PostHeader } from "../../component/Posts";
import TopBar from "../../component/TopBar/TopBar";

const Post = () => {
  const categories = [
    {
      id: "1283078as",
      name: "Front-End",
      link: "frontend",
    },
    {
      id: "1237uyxzc",
      name: "Back-End",
      link: "backend",
    },
    {
      id: "123213uyxzc",
      name: "Design",
      link: "design",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "computerscience",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "computerscience",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "computerscience",
    },
  ];
  const writerInfoList = [
    {
      writerInfo: {
        name: "아이유",
        date: "2022-05-22",
        description: "좋다 이거야ㅐ~~",
        img: "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
      },
    },
  ];
  return (
    <div>
      <TopBar type="scrollHeader" location="post" user="soonki" categories={categories} />
      <TopBar location="post" user="soonki" categories={categories} />
      <PostContainer>
        <PostHeader />
        <PostArticle />
        <CommentSection writerInfoList={writerInfoList} />
      </PostContainer>
    </div>
  );
};

export default Post;
