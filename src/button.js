const Button = props => {
  const {details, clicked} = props
  const {buttonText, id} = details
  const onClickBtn = () => {
    clicked(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickBtn}>
        {buttonText}
      </button>
    </li>
  )
}
export default Button
