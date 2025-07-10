package com.thingplanner.backend.controller;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.dto.response.EventResponse;
import com.thingplanner.backend.service.EventService;
import org.apache.coyote.Response;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/event")
//@CrossOrigin(origins = "http://localhost:5173")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping("/create")
    public EventResponse createEvent(@RequestBody EventRequest request) {
        return eventService.create(request);
    }

    @PostMapping("/get")
    public List<EventResponse> getEvent(@RequestBody EventRequest request) {
        return eventService.findByFields(request);
    }

    @PostMapping("/update")
    public ResponseEntity<EventResponse> updateEvent(@RequestBody EventRequest request) {
        return ResponseEntity.ok(eventService.update(request));
    }

    @PostMapping("/delete")
    public EventResponse deleteEvent(@RequestBody EventRequest request) {
        return eventService.delete(request);
    }
}
