import styled from "styled-components";
import Slider from "react-slick";
import StoryItem from "./StoryItem";
import "../styles/customSlick.css";

export default function StoriesComponent() {
    const StoriesBox = styled.section`
        width: 100%;
        background-color: #fff;
        border: 1px solid var(--primary-color);
        border-radius: 3px;
        padding: 16px 0;
        margin-bottom: 24px;
    `;

    const StoriesContain = styled.div`
        height: 84px;
        overflow: hidden;
    `;

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: false,
        initialSlide: 0,
      };

    return (
        <div>
            <StoriesBox>
                <StoriesContain>
                    <Slider {...settings}>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div><div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                        <div>
                            <StoryItem />
                        </div>
                    </Slider>
                </StoriesContain>
            </StoriesBox>
        </div>
    );
}