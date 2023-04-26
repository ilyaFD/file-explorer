
export type TFIleType = 'file' | 'folder' | 'back'

export type TMap = {id: number}

export interface INode {
    id: string;
    type: TFIleType;
    parent: string;
    name: string;
    ext?: string;
    children: INode[];
}