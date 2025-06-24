package com.thingplanner.backend.specification;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.entity.EventEntity;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.criteria.Predicate;


public class EventSpecifications {
    public static Specification<EventEntity> withDynamicFields(EventRequest request) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (request.getEventName() != null && !request.getEventName().isBlank()) {
                predicates.add(cb.equal(root.get("eventName"), request.getEventName()));
            }

            if (request.getEventType() != null && !request.getEventName().isEmpty()) {
                predicates.add(cb.equal(root.get("eventType"), request.getEventType()));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
