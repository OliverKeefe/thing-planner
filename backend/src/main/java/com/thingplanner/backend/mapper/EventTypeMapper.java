package com.thingplanner.backend.mapper;

import com.thingplanner.backend.dto.response.EventResponse;
import com.thingplanner.backend.dto.response.EventTypeResponse;
import com.thingplanner.backend.entity.EventEntity;
import com.thingplanner.backend.entity.EventTypeEntity;
import org.springframework.stereotype.Component;

@Component
public class EventTypeMapper {


    public EventTypeResponse toResponse(EventTypeEntity entity) {
        EventTypeResponse response = new EventTypeResponse();
        response.setId(entity.getId());
        response.setEventTypeName(entity.getEventTypeName());
        return response;
    }


}
