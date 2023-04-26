import { useTimer } from 'react-timer-hook';
interface ITimerProps {
  onExpire: () => void
  duration: number
}
export default function Timer({onExpire, duration}: ITimerProps): JSX.Element {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration)
  const { seconds, minutes } = useTimer({ expiryTimestamp, onExpire: onExpire })
  const addZeroToNum = (val: number): string => {
    return val < 10 ? `0${val}` : `${val}`
  }

  return (
    <span className="fixed w-full top-0 p-2 bg-slate-300 text-sm text-center">
      Will be reloaded in : {addZeroToNum(minutes)}:{addZeroToNum(seconds)}
    </span>
  )
}    