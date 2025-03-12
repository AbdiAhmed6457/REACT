import profile from "./assets/image.png";

function Header(){

    return(
        <header>
            <h1> My website</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">about</a></li>
            </ul>
              <img className="card-image" src={profile} alt="" />
            <hr />
        </header>
    )
}

export default Header;