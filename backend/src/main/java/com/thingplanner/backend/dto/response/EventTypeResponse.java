package com.thingplanner.backend.dto.response;

public class EventTypeResponse {
    private Integer id;
    private String eventTypeName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEventTypeName() {
        return eventTypeName;
    }

    public void setEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
    }

    public void setEventTypeId(Integer id) {
    }
}
