package com.thingplanner.backend.dto.request;

public class EventRequest {
    private Long id;
    private String name;
    private EventTypeRequest eventType;
    private String startDate;
    private String endDate;
   // private List<String> attendeeEmails;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
