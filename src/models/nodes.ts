import { INode, TMap, TFIleType } from '../types'

export const listToTree = (list:INode[] = []): INode => {

  // Create map, set childs
  const map = {} as TMap
  list.forEach((node:INode, index: number) => {
    list[index].children = []
    map[node.id as keyof typeof map] = index 
  })

  // Create tree
  const rootID = ''
  const tree = {
    id: '',
    type: '' as TFIleType,
    parent: rootID,
    name: '',
    children: [] as INode[]
  }
  list.forEach((node: INode) => {
    const parentIndex = node.parent && map[node.parent as keyof typeof map]
    if (parentIndex) {
      list[parentIndex].children.push(node);
    } else {
      tree.children.push({...node, parent: rootID});
    }
  })
  return tree
};
  
export const findNode = (tree: INode, activeNodeID: string): INode | null => {
  const queue = [tree];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current?.id === activeNodeID) {
      return current;
    }
    current?.children?.forEach(child => queue.push(child));
  }
  return null;
}

export const sortNode = (items: INode[]): INode[] => [
  ...items.filter(item => item.type !== 'file' && item.type !== 'folder'),
  ...items.filter(item => item.type === 'folder'),
  ...items.filter(item => item.type === 'file')
]
  