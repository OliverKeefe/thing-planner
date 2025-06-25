package com.thingplanner.backend.specification;

import com.thingplanner.backend.dto.request.EventRequest;
import com.thingplanner.backend.entity.EventEntity;
import jakarta.persistence.criteria.Join;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.criteria.Predicate;


public class EventSpecifications {
    public static Specification<EventEntity> withDynamicFields(EventRequest request) {
        return (root, criteriaQuery, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (request.getEventName() != null && !request.getEventName().isBlank()) {
                predicates.add(criteriaBuilder.equal(root.get("eventName"), request.getEventName()));
            }

            if (request.getEventType() != null && !request.getEventName().isBlank()) {
                predicates.add(criteriaBuilder.equal(root.get("eventType"), request.getEventType()));
            }

            if (request.getStartDate() != null && !request.getStartDate().isBlank()) {
                predicates.add(criteriaBuilder.equal(root.get("startDate"), request.getStartDate()));
            }

            if (request.getEndDate() != null && !request.getEndDate().isBlank()) {
                predicates.add(criteriaBuilder.equal(root.get("endDate"), request.getEndDate()));
            }

            //if (request.getAttendeeEmails() != null && !request.getAttendeeEmails().isEmpty()) {
            //    Join<EventEntity, String> attendeesJoin = root.join("attendeeEmails");
            //    request.getAttendeeEmails().forEach(email ->
            //            predicates.add(criteriaBuilder.equal(emailsJoin, email))
            //    );
            //}

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
