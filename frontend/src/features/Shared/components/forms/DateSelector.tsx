import React, {useState} from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateSelectorProps {
    startDate?: Date;
    endDate?: Date;
}

const DateSelector: React.FC<DateSelectorProps> = ({ startDate, endDate }) => {
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    return (
        <Container>
        <Wrapper>
            <StyledDatePicker
                selected={selectedStartDate}
                onChange={(startDate: Date | null) =>  {
                    if (startDate) setSelectedStartDate(startDate);
                }}
            />
        </Wrapper>
        <Wrapper>
            <StyledDatePicker
                selected={selectedEndDate}
                onChange={(endDate: Date | null) => {
                    if (endDate) setSelectedEndDate(endDate);
                }}
            />
        </Wrapper>
        </Container>
    );
}

const Wrapper = styled.div`
    display: flex;
    padding: 20px;
`;

const StyledDatePicker = styled(DatePicker)`
    padding: 10px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 100%;
    margin: 10px;
    background: #ffffff;
    color: #181818;
    
`;

const Container = styled.div`
    display: flex;
`;

export default DateSelector;
