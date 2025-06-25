package com.thingplanner.backend.controller;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.dto.response.EventResponse;
import com.thingplanner.backend.service.EventService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping("/event")
    public EventResponse getEvent(@RequestBody EventRequest request) {
        return (EventResponse) eventService.findByFields(request);
    }

}
