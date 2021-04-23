import styled from "styled-components";

export default function StoryItem() {
    const StoryItem = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        height: 100px;
        width: 80px;
        padding: 0 2px;
        background-color: #f00;
    `;

    const BorderStory = styled.div`
        width: 66px;
        height: 66px;
        overflow: hidden;
        border: 2px solid transparent;
        border-image-source: linear-gradient(to left, #00C853, #B2FF59);
        border-radius: 1em;
        padding: 2px;
    `;

    const Avatar = styled.span`
        width: 56px;
        height: 56px;
        border-radius: 100%;
    `;

    return (
        <StoryItem>
            <BorderStory>
                <Avatar>
                    <img style={{borderRadius: '100%'}} src="https://instagram.fsgn2-2.fna.fbcdn.net/v/t51.2885-19/s150x150/160492536_470987904339154_3457409699494682341_n.jpg?tp=1&_nc_ht=instagram.fsgn2-2.fna.fbcdn.net&_nc_ohc=LeQk2MSQBZkAX9YyeqI&edm=ALlQn9MAAAAA&ccb=7-4&oh=bda2c2ead20254664f0095f88ae0ffdd&oe=60A73102&_nc_sid=48a2a6" />
                </Avatar>
            </BorderStory> 
        </StoryItem>
    )
}