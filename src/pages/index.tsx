import React from 'react'
import { getFiles } from '../providers'
import { Files, Timer } from '../components'
import { listToTree, findNode, sortNode } from '../models'
import { TFIleType } from '@/types'

export async function getServerSideProps() {
  const res = await getFiles()
  if (res.error) {
    return res.error
  }
  const tree = listToTree(res.data)
  return { props: { tree } }
}

export default function Home({tree}: any) {
  const [activeNodeID, setActiveNodeID] = React.useState('')
  const [parentID, setParentID] = React.useState('')
  const [items, setItems] = React.useState(tree.children)

  React.useEffect(() => {
    const node = findNode(tree, activeNodeID)
    if (node) {
      setItems(sortNode(node.children))
      setParentID(node.parent)
    }
  }, [activeNodeID])

  const navHandler = (type: TFIleType, id?: string) => {
    if (type === 'folder' && id) {
      setActiveNodeID(id)
    } else if (type === 'back') {
      setActiveNodeID(parentID)
    }
  }

  return (
    <main className="flex justify-center min-h-screen px-4 py-16">
      <Timer onExpire={() => {window.location.reload()}} duration={180}/>
      <Files
        items={items}
        navHandler={navHandler}
        isRoot={!!activeNodeID}
      />
    </main>
  )
}
