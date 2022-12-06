import CardAbout from "./CardAbout"
import Image from "next/image"
import Title from "./Title"

const About = () => {
    
   
    
    return (
        <div className="about">
            <Title
            greenText="Что мы"
            text="вывозим"
            />
            <div className="about__cards">
                <CardAbout 
                icon={<Image src="/about/1.png" alt="1" width={50} height={50}/>}
                text="Мусор со стройплощадок"
                />
                <CardAbout 
                icon={<Image src="/about/2.png" alt="1" width={50} height={50}/>}
                text="Твердые бытовые отходы (ТБО)"
                />
                <CardAbout 
                icon={<Image src="/about/3.png" alt="1" width={50} height={50}/>}
                text="Древесные остатки"
                />
                <CardAbout 
                icon={<Image src="/about/4.png" alt="1" width={50} height={50}/>}
                text="Крупногабаритный мусор"
                />
                <CardAbout 
                icon={<Image src="/about/5.png" alt="1" width={50} height={50}/>}
                text="Отходы III и IV класса опасности"
                />
            </div>
        </div>
    )
}

export default About