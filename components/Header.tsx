import Image from "next/image"


const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Image src="/logo.png" alt="logo" height={50} width={50}/>
                <h2 className="header__name">Ytil.<span className="header__name_b">b</span>y</h2>
            </div>
            <div className="header__contacts">
                <a href="tel:+375291823580" className="header__phone_number">
                    <Image src="/phone.png" alt="phone" height={30} width={30}/>
                    <p>+375(29) 182-35-80</p>
                </a>
                <a href="viber://chat?number=%2B375291823580" className="header__viber">
                    <Image src="/viber_logo.png" alt="viber_logo" height={40} width={40}/>
                    <p>Viber</p>
                </a>
            </div>
            
        </header>
    )
}

export default Header