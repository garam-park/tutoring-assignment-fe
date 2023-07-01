export type Grade = '입문' | '초급' | '중급' | '중고급' | '고급' | string;
export default interface Topic {
  idx: string;
  title: string;
  grade: Grade;
  imgPath: string;
  likes?: number;
}
