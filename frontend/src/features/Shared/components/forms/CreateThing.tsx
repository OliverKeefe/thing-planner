import React from "react";
import styled from "styled-components";
import InputField from "../input/InputField.tsx";
import CheckBox from "../labels/CheckBox.tsx";
import PrimaryButton from "../../buttons/PrimaryButton.tsx";
import DateSelector from "./DateSelector.tsx";

interface Props {
    children?: React.ReactNode;
}

const CreateThing: React.FC<Props> = () => {
    return (

        <FormWrapper >
            <Wrapper>
                <InputField
                    name={"Plan Name"}
                    label={"Name your Plan."}
                />
            </Wrapper>
            <Wrapper>
                <h4>What type of plan is this?</h4>
            </Wrapper>
            <Wrapper>
                <CheckBox name={"EventCheckBox"} title={"Event"} value={"yes"} ></CheckBox>
                <CheckBox name={"MultiVenueEventCheckBox"} title={"Multi-Venue Event"} value={"yes"} ></CheckBox>
                <CheckBox name={"TripCheckBox"} title={"Trip"} value={"yes"} ></CheckBox>
                <CheckBox name={"HolidayCheckBox"} title={"Holiday"} value={"yes"} ></CheckBox>
            </Wrapper>
            <PrimaryButton buttonLabel={"Search"} />

            <DateSelector />
        </FormWrapper>
    );
}

const FormWrapper = styled.div`
    padding:  20px;
`;

const Wrapper = styled.div`
    padding: 20px;
`;

export default CreateThing;