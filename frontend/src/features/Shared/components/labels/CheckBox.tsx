import React from "react";
import styled from "styled-components";

interface Props {
    name: string;
    title: string;
    value: string;
}

const CheckBox: React.FC<Props> = ({ name, title, value }) => {
    return (
        <Wrapper>
            <Label>
                <Input
                    type="checkbox"
                    id={name}
                    name={name}
                    value={value}>
                </Input>

                {title}

            </Label>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
`;

const Label = styled.label`
    color: #242424;
`;

const Input = styled.input`

`;

export default CheckBox;