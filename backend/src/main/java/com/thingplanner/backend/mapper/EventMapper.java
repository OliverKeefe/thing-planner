package com.thingplanner.backend.mapper;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.dto.response.EventResponse;
import com.thingplanner.backend.entity.EventEntity;
import com.thingplanner.backend.entity.EventTypeEntity;
import org.springframework.stereotype.Component;
import com.thingplanner.backend.entity.EventTypeEntity;

@Component
public class EventMapper {

    private final EventTypeMapper eventTypeMapper;

    public EventMapper(EventTypeMapper eventTypeMapper) {
        this.eventTypeMapper = eventTypeMapper;
    }

    public EventEntity toEntity(EventRequest request) {
        EventEntity entity = new EventEntity();
        EventTypeEntity eventType = eventTypeMapper.toEntity(request.getEventType());
        entity.setEventName(request.getEventName());
        //entity.setDescription(dto.getDescription());
        entity.setStartDate(request.getStartDate());
        entity.setEndDate(request.getEndDate());
        entity.setEventType(eventType);
        return entity;
    }

    public EventResponse toResponse(EventEntity entity) {
        EventResponse response = new EventResponse();
        response.setEventId(entity.getId());
        response.setEventName(entity.getEventName());
        //response.setDescription(entity.getDescription());
        response.setStartDate(entity.getStartDate());
        response.setEndDate(entity.getEndDate());
        response.setEventType(eventTypeMapper.toResponse(entity.getEventType()));
        return response;
    }
}
