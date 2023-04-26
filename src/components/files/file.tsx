import { TFIleType } from '../../types'

interface IFileProps {
  type?: TFIleType
  name: string
}

const FolderIcon = (): JSX.Element => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" focusable="false" className="text-slate-500 mr-2" role="presentation" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path></svg>
const FileIcon = (): JSX.Element => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" focusable="false" className="text-slate-500 mr-2" role="presentation" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"></path></svg>

export default function File({type, name}: IFileProps): JSX.Element {
  return (
    <div className={`flex items-center py-2 px-4 text-sm ${type !== 'file' ? "cursor-pointer hover:bg-slate-200": ''}`}>
      {type === 'folder' ?
          <FolderIcon />
      :
          type === 'file' ?
              <FileIcon />
          :
              null
      }
      <span className="text-slate-800">{name}</span>
    </div>
  )
}    