package com.thingplanner.backend.mapper;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.entity.EventEntity;
import com.thingplanner.backend.entity.EventTypeEntity;
import com.thingplanner.backend.dto.response.EventResponse;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface EventMapper {

    @Mapping(target = "eventType", source = "eventType")
    EventEntity toEntity(EventRequest dto, @Context EventTypeEntity eventType);

    @Mapping(target = "eventTypeName", source = "eventType.eventTypeName")
    EventResponse toResponse(EventEntity entity);

    @AfterMapping
    default void setEventType(@MappingTarget EventEntity entity, @Context EventTypeEntity eventType) {
        entity.setEventType(eventType);
    }
}
