package com.thingplanner.backend.controller;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.dto.response.EventResponse;
import com.thingplanner.backend.service.EventService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/event")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping("/create")
    public EventResponse createEvent(@RequestBody EventRequest request) {
        return (EventResponse) eventService.create(request);
    }

    @PostMapping("/get")
    public EventResponse getEvent(@RequestBody EventRequest request) {
        return (EventResponse) eventService.findByFields(request);
    }



}
