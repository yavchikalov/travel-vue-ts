export type TBlock = 'start' | 'center' | 'end';

export interface IListItemProp {
    title: string;
    anchor: string;
    block?: TBlock
}
