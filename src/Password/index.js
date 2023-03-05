import './index.css'

const Password = props => {
  const {eachPassword, showPasswords, onDeletePassword} = props
  const {id, website, username, password} = eachPassword

  const clickDelete = () => {
    onDeletePassword(id)
  }

  return (
    <li className="each-list">
      <div>{website[0].toUpperCase()}</div>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {showPasswords ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button
        type="button"
        onClick={clickDelete}
        className="delete-button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Password
