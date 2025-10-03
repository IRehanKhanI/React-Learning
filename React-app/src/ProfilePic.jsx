function ProfilePic() {
    const imgUrl = "./src/assets/profile.jpg"
    const handleClick = (e) => e.target.style.display = "none"
    return (
        <img src={imgUrl} onClick={(e) => handleClick(e)} alt="img" height="100px" />
    )
}
export default ProfilePic;