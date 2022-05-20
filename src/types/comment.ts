export interface CommentType {
  writerInfoList: WriterInfoType[] | [];
}

export interface WriterInfoType {
  writerInfo: { img: string; name: string; date: string; description: string };
}
