package com.thingplanner.backend.dto.response;

import java.util.List;

public class EventResponse {
    private Long eventId;
    private String eventName;
    private EventTypeResponse eventType;
    private String startDate;
    private String endDate;
    // private List<String> attendeeEmails;

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public EventTypeResponse getEventType() {
        return eventType;
    }

    public void setEventType(EventTypeResponse eventType) {
        this.eventType = eventType;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    //public List<String> getAttendeeEmails() {
    //    return attendeeEmails;
    //}
//
    //public void setAttendeeEmails(List<String> attendeeEmails) {
    //    this.attendeeEmails = attendeeEmails;
    //}
}
