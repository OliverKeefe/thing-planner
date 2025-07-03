package com.thingplanner.backend.service;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.dto.response.EventResponse;
import com.thingplanner.backend.entity.EventEntity;
import com.thingplanner.backend.mapper.EventMapper;
import com.thingplanner.backend.mapper.EventTypeMapper;
import com.thingplanner.backend.repository.EventRepository;
import org.apache.coyote.Response;
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

    public EventResponse create(EventRequest request) {
        if (findByFields(request).isEmpty()) {
            try {
                EventEntity eventEntity = eventMapper.toEntity(request);
                eventRepository.save(eventEntity);
                return eventMapper.toResponse(eventEntity);
            } catch (Exception e) {
                throw new RuntimeException("Failed to create event", e);
            }
        } else {
            throw new RuntimeException("Event already exists.");
        }
    }

    public List<EventResponse> findByFields(EventRequest request) {
        return eventRepository.findAll(eventSpecification(request)).stream()
                .map(eventMapper::toResponse)
                .toList();
    }

    public List<EventResponse> findById(EventRequest request) {
        try {
            return eventRepository.findById(request.getEventId()).stream()
                    .map(eventMapper::toResponse)
                    .toList();
        } catch (Exception e) {
            throw new RuntimeException("Could not find event with id" + request.getEventId(), e);
        }
    }

    public List<EventResponse> search(EventRequest request) {
        throw new NotImplemented
    }

    public EventResponse update(EventRequest request) {
        EventEntity updatedEventEntity = eventMapper.toEntity(request);

        try {
            EventEntity eventEntity = eventRepository.findById(updatedEventEntity.getId())
                    .orElseThrow(() -> new RuntimeException(("Event not found with id: " + updatedEventEntity.getId())));

            eventRepository.save(eventMapper.toUpdatedEntity(eventEntity, updatedEventEntity));

            return eventMapper.toResponse(updatedEventEntity);
        } catch (Exception e) {
            throw new RuntimeException("Couldn't update event: " + updatedEventEntity.getEventName(), e);
        }
    }

    //TODO: Implement deleteEvent.
    public EventResponse delete(EventRequest request) {
        return eventMapper.toResponse(eventMapper.toEntity(request));
    }
}
