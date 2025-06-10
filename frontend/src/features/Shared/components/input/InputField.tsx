import React from "react";
import styled from "styled-components";

interface InputFieldProps {
    label: string;
    name: string;
    children?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ( { label, name } ) => {
    return (
        <Wrapper>
            <Label htmlFor={name}>{label}</Label>
            <Input id={name} name={name}></Input>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    margin-bottom: 0.5rem;
    color: #242424;
    font-weight: bold;
`;

const Input = styled.input`
    background-color: white;
    color: #1a1a1a;
    border: #213547 1px solid;
    border-radius: 8px;
`;

export default InputField;