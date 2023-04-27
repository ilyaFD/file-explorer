import React from 'react'
import { getFiles } from '../providers'
import { Files, Timer } from '../components'
import { listToTree, findNode, findSortedNodeItems } from '../models'
import { TFIleType } from '@/types'


function Home({tree, error}: any) {
  const [activeNodeID, setActiveNodeID] = React.useState('')
  const items = React.useMemo(() => findSortedNodeItems(tree, activeNodeID), [activeNodeID]);
  
  const navHandler = (type: TFIleType, id?: string) => {
    if (type === 'folder' && id) {
      setActiveNodeID(id)
    } else if (type === 'back') {
      setActiveNodeID(findNode(tree, activeNodeID)?.parent || '')
    }
  }

  const onExpire = (): void => {
    window.location.reload();
  }

  return (
    <main className="flex justify-center min-h-screen px-4 py-16">
      {
        error ?
          <p>{error}</p>
        :
          <>
            <Timer
              onExpire={onExpire}
              duration={180}
            />
            <Files
              items={items}
              navHandler={navHandler}
              isRoot={!!activeNodeID}
            />
          </>
      } 
    </main>
  )
}


Home.getInitialProps = async () => {
  const res = await getFiles()
  const tree = listToTree(res.data)
  return { tree, error: res.error } 
}
export default Home