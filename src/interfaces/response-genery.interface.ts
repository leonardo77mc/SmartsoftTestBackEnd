import { AnswersEnum } from "../utils/enums/answers.enum";

export interface IResponseGeneryInterface<T> {
  data: Promise<T>;
  message: AnswersEnum;
}

export interface IResponseTables<T> {
  data: T[],
  message: AnswersEnum
}