function Button() {
    //e=event
    const handclick = (e) => {
        e.target.textContent = "Ouch 😘 !"
    }
    return (
        <button onDoubleClick={(e) => handclick(e)}>Click me 👌</button>
    )
}
export default Button;