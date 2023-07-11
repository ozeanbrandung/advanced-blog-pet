import {User} from 'entities/User';

export enum BlockTypes {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

interface BlockBaseFields {
    id: string;
    type: BlockTypes;
}

export interface TextArticleBlock extends BlockBaseFields {
    type: BlockTypes.TEXT,
    title?: string;
    paragraphs: string[];
}

export interface ImageArticleBlock extends BlockBaseFields {
    type: BlockTypes.IMAGE,
    src: string;
    title: string;
}

export interface CodeArticleBlock extends BlockBaseFields {
    type: BlockTypes.CODE,
    code: string;
}

export type ArticleBlocks = TextArticleBlock | ImageArticleBlock | CodeArticleBlock;

enum ArticleTypes {
    IT = 'IT',
    MANAGEMENT = 'MANAGEMENT',
    MARKETING = 'MARKETING'
}

export interface IArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    user : User;
    type: ArticleTypes[],
    blocks: ArticleBlocks[];
}

export interface ArticleStateSchema {
    isLoading: boolean;
    error?: string;
    data: IArticle | undefined;
}

export enum ArticlesViewMode {
    GRID = 'GRID',
    LIST = 'LIST'
}
