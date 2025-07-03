package com.thingplanner.backend.event.service;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.dto.request.EventTypeRequest;
import com.thingplanner.backend.dto.response.EventResponse;
import com.thingplanner.backend.entity.EventEntity;
import com.thingplanner.backend.mapper.EventMapper;
import com.thingplanner.backend.repository.EventRepository;
import com.thingplanner.backend.service.EventService;
import jdk.jfr.Event;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;

import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class EventServiceTest {

    @Mock
    private EventRepository eventRepository;

    @Mock
    private EventMapper eventMapper;

    @InjectMocks
    private EventService eventService;


    private EventRequest testRequest() {
        EventRequest eventRequest = new EventRequest();
        EventTypeRequest eventTypeRequest = new EventTypeRequest();

        eventTypeRequest.setEventTypeName("Holiday");
        eventTypeRequest.setId(1L);

        eventRequest.setEventName("Italian Group Holiday 2025");
        eventRequest.setStartDate("2025-07-02T14:30:00");
        eventRequest.setEndDate("2025-07-14T14:30:00");
        eventRequest.setEventType(eventTypeRequest);

        return eventRequest;
    }

    @Test
    void testCreateEvent() {
        EventRequest request = testRequest();
        EventEntity eventEntity = new EventEntity();
        EventResponse expectedResponse = new EventResponse();

        eventEntity.setEventName("Italian Group Holiday 2025");
        expectedResponse.setEventName("Italian Group Holiday 2025");

        when(eventRepository.findAll(any(Specification.class))).thenReturn(Collections.emptyList());
        when(eventMapper.toEntity(request)).thenReturn(eventEntity);
        when(eventMapper.toResponse(eventEntity)).thenReturn(expectedResponse);

        EventResponse actualResponse = eventService.create(request);

        assertEquals(expectedResponse.getEventName(), actualResponse.getEventName());
        verify(eventRepository, times(1)).save(eventEntity);
    }

    @Test
    void testCreateEventAlreadyExists() {
        EventRequest request = testRequest();
        EventEntity existingEvent = new EventEntity();
        EventResponse response = new EventResponse();

        existingEvent.setEventName(request.getEventName());

        when(eventRepository.findAll(any(Specification.class))).thenReturn(List.of(existingEvent));

        RuntimeException runtimeException = assertThrows(RuntimeException.class, () -> {
            eventService.create(request);
        });

        assertEquals("Event already exists.", runtimeException.getMessage());

        verify(eventRepository, never()).save(any(EventEntity.class));
    }

    @Test
    void testGetEvent() {
        EventRequest request = testRequest();
        EventEntity eventEntity = new EventEntity();
        EventResponse expectedResponse = new EventResponse();

        eventEntity.setEventName(eventName);
        expectedResponse.setEventName(eventName);

        when(eventRepository.findAll(any(Specification.class))).thenReturn(List.of(eventEntity));
        when(eventMapper.toResponse(eventEntity)).thenReturn(expectedResponse);

        List<EventResponse> actualResponse = eventService.findByFields(request);

        assertEquals(1, actualResponse.size());
        assertEquals(expectedResponse.getEventName(), actualResponse.getFirst().getEventName());
    }
}
