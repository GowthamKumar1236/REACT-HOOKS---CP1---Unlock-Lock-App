// Write your code here
import {useState} from 'react'

import {BgContainer, Img, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [isUnlock, setStatus] = useState(false)

  const imgUrl = isUnlock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const imgText = isUnlock ? 'unlock' : 'lock'
  const lockUnlockText = isUnlock ? 'Unlocked' : 'Locked'
  const buttonText = isUnlock ? 'Lock' : 'Unlock'

  const onChangeLock = () => setStatus(prevState => !prevState)

  return (
    <BgContainer>
      <Img src={imgUrl} alt={imgText} />
      <Paragraph>Your Device is {lockUnlockText}</Paragraph>
      <Button type="button" onClick={onChangeLock}>
        {buttonText}
      </Button>
    </BgContainer>
  )
}

export default Unlock
