import React from "react";
import styled from "styled-components";

interface Props {
    children?: React.ReactNode;
}

const LargeCard: React.FC<Props> = ({ children }) => {
    return (
        <Wrapper>
            <Card children={children} >

            </Card>
        </Wrapper>
    );
}

const Wrapper = styled.div`

`;

const Card = styled.div`
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default LargeCard;