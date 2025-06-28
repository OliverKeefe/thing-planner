package com.thingplanner.backend.mapper;

import com.thingplanner.backend.dto.request.EventTypeRequest;
import com.thingplanner.backend.dto.response.EventResponse;
import com.thingplanner.backend.dto.response.EventTypeResponse;
import com.thingplanner.backend.entity.EventEntity;
import com.thingplanner.backend.entity.EventTypeEntity;
import org.springframework.stereotype.Component;

@Component
public class EventTypeMapper {

    public EventTypeEntity toEntity(EventTypeRequest request) {
        EventTypeEntity entity = new EventTypeEntity();
        entity.setId(request.getId());
        entity.setEventTypeName(request.getEventTypeName());
        return entity;
    }

    public EventTypeResponse toResponse(EventTypeEntity entity) {
        EventTypeResponse response = new EventTypeResponse();
        response.setId(entity.getId());
        response.setEventTypeName(entity.getEventTypeName());
        return response;
    }


}
