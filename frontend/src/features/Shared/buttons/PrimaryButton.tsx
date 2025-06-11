import React from "react";
import styled from "styled-components";

interface PrimaryButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    buttonLabel: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, buttonLabel }) => {
    return (
        <Wrapper>
            <Button>{buttonLabel}</Button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding:  20px;
`;

const Button = styled.button`
    border: #0c2c20 solid 1px;
    background-color: #45dc82;
    color: #0c2c20;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
`;

export default PrimaryButton;