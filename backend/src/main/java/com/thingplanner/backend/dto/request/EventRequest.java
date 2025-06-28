package com.thingplanner.backend.dto.request;

import java.util.List;

public class EventRequest {
    private Long eventId;
    private String eventName;
    private EventTypeRequest eventType;
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

    public EventTypeRequest getEventType() {
        return eventType;
    }

    public void setEventType(EventTypeRequest eventType) {
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
