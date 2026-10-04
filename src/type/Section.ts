import { IArticle } from "./Article";

export interface ISection {

    title:string,
    curationId:string
    articles: IArticle[];
}