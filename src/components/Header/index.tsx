import "./styles.scss"
import Logo from "../../assets/shopper-logo.webp"

function Header(){


    return (
        <header>
            <div className="container div-header">
                <img src={Logo} />
                <div>
                    <button className="doubt-button">Dúvidas frequentes</button>
                    <button className="login-button">Fazer Login</button>
                    <button className="register-button">Cria sua Conta</button>
                </div>

            </div>
        </header>
    )
}

export default Header