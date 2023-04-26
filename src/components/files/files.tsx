import { INode, TFIleType } from '../../types'
import File from './file'

interface IFilesProps {
  items: INode[]
  navHandler: (type: TFIleType, id?: string) => void
  isRoot: boolean
}

export default function Files({items, navHandler, isRoot}: IFilesProps): JSX.Element {

  return (
    <ul className="border border-slate-200 rounded-lg w-full overflow-hidden max-w-lg">
      {isRoot ?
        <li onClick={() => navHandler('back')}>
          <File name="..."/>
        </li>
      :
        null
      }
      {items?.map((item: INode, index: number) => {
          const isLast: boolean = index + 1 === items?.length
          const name = item.ext ? `${item.name}.${item.ext}` : item.name
          return (
            <li
              key={`${item.id}${index}`}
              onClick={() => navHandler(item.type, item.id)}
            >
              <File
                type={item.type}
                name={name}
              />
              {!isLast ? <hr /> : null}
            </li>
          )
        })
      }
    </ul>
  )
}
