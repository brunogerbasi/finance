import { Alert } from "./Notify.styles"

interface NotifyProps {    
    msg: string
}
const Notify= ({msg}: NotifyProps) => {
  return <Alert > {msg}</Alert>
}

export default Notify