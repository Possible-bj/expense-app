import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is some info: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is a private message, please do not share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ? 
        <WrappedComponent {...props} /> :
        <p>Please Log In to continue.</p>
      }
    </div>
  )
}
// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info='these are the info' />,
  document.querySelector('#app')
)
