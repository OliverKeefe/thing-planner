package com.thingplanner.backend.service;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.dto.response.EventResponse;
import com.thingplanner.backend.entity.EventEntity;
import com.thingplanner.backend.mapper.EventMapper;
import com.thingplanner.backend.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.thingplanner.backend.specification.EventSpecifications.eventSpecification;

@Service
public class EventService {

    private final EventRepository eventRepository;
    private final EventMapper eventMapper;

    public EventService(EventRepository eventRepository, EventMapper eventMapper) {
        this.eventRepository = eventRepository;
        this.eventMapper = eventMapper;
    }

    public EventResponse create(EventRequest request) {
        EventEntity eventEntity = eventMapper.toEntity(request);

        boolean alreadyExists = eventRepository.exists(eventSpecification(request));

        if (!alreadyExists) {
            try {
                request.setId(null);
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
            return eventRepository.findById(request.getId()).stream()
                    .map(eventMapper::toResponse)
                    .toList();
        } catch (Exception e) {
            throw new RuntimeException("Could not find event with id" + request.getId(), e);
        }
    }

    public List<EventResponse> search(EventRequest request) throws UnsupportedOperationException {
        throw new UnsupportedOperationException("Not implemented yet.");
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
        EventEntity entityToDelete = eventMapper.toEntity(request);

        if (eventRepository.existsById(request.getId())) {
            try {
                eventRepository.delete(entityToDelete);
                return eventMapper.toResponse(entityToDelete);
            } catch (Exception e) {
                throw new RuntimeException(("Couldn't delete event: " + entityToDelete.getEventName() + e));
            }
        } else {
            throw new RuntimeException("Couldn't delete event " + entityToDelete.getEventName() + ", because it doesn't exist.");
        }
    }
}
