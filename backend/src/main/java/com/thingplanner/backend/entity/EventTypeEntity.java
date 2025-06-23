package com.thingplanner.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "event_type")
public class EventTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "event_type_name")
    private String eventTypeName;

    public int getId() {
        return id;
    }

    public String getEventTypeName() {
        return eventTypeName;
    }

    public void setEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
    }
}
