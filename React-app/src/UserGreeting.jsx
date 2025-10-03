function UserGreeting(props) {
    const welcomeMessage = <h2>Welcome {props.username} u are logged in</h2>;
    const loginMessage = <h2>Please log in</h2>
    return (props.isLoggedin ? welcomeMessage : loginMessage)

}
export default UserGreeting;