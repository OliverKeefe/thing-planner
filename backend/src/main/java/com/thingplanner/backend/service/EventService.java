package com.thingplanner.backend.service;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.dto.response.EventResponse;
import com.thingplanner.backend.entity.EventEntity;
import com.thingplanner.backend.mapper.EventMapper;
import com.thingplanner.backend.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static com.thingplanner.backend.specification.EventSpecifications.withDynamicFields;

@Service
public class EventService {

    private final EventRepository eventRepository;
    private final EventMapper eventMapper;

    public EventService(EventRepository eventRepository, EventMapper eventMapper) {
        this.eventRepository = eventRepository;
        this.eventMapper = eventMapper;
    }

    public List<EventResponse> findByFields(EventRequest request) {
        return eventRepository.findAll(withDynamicFields(request)).stream()
                .map(eventMapper::toResponse)
                .toList();
    }
}
