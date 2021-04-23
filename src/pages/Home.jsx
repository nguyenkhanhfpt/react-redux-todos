import MenuComponent from "../Components/MenuComponent";
import { MainStyle, Wrapper } from "../styles/StyleComponent";
import "../styles/home.css";

export default function Home() {
    return (
        <div className="">
            <MenuComponent/>

            <MainStyle>
                <Wrapper>
                    <div className="contain-home">
                        <div className="contain-home__news">
                        </div>
                        <div className="contain-home__suggest">
                        </div>
                    </div>
                </Wrapper>
            </MainStyle>
        </div>
    )
}