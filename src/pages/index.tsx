import React from 'react'
import { getFiles } from '../providers'
import { Files, Timer } from '../components'
import { listToTree, findNode, findSortedNodeItems } from '../models'
import { TFIleType } from '@/types'


function Home(props: any) {
  const [activeNodeID, setActiveNodeID] = React.useState('')
  const [tree, setTree] = React.useState(props.tree)
  const [error, setError] = React.useState(props.error)
  const [loading, setLoading] = React.useState(false)
  const items = React.useMemo(() => findSortedNodeItems(tree, activeNodeID), [activeNodeID]);
  
  const navHandler = (type: TFIleType, id?: string) => {
    if (type === 'folder' && id) {
      setActiveNodeID(id)
    } else if (type === 'back') {
      setActiveNodeID(findNode(tree, activeNodeID)?.parent || '')
    }
  }

  const onExpire = async (): Promise<void> => {
    setLoading(true)
    setActiveNodeID('')
    const res = await getFiles()
    if (res.error) {
      setError(res.error)
    } else {
      const tree = listToTree(res.data)
      setTree(tree)
    }
    setLoading(false)
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
              duration={10}
            />
            <Files
              items={items}
              navHandler={navHandler}
              isRoot={!!activeNodeID}
              loading={loading}
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