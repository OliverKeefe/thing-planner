import { handleRequest } from "@/services/httpClient";
const API_URL = import.meta.env.VITE_API_URL;

console.log(API_URL);

interface EventTypePayload {
    id: number;
    eventTypeName: string;
}

interface EventPayload {
    id: number | null;
    name: string;
    eventType: EventTypePayload;
    startDate: string | undefined;
    endDate?: string | undefined;
    // invitedEmails?: string[];
}

interface EventResponse {
    id: string;
    name: string;
    createdAt: string;
}

export const EventsService = {
    createEvent: (payload: {
        id: null;
        name: string;
        eventType: EventTypePayload;
        startDate: string | undefined;
        endDate: string | undefined;
    }) => {
        return handleRequest<EventPayload, EventResponse>(
            payload,
            `${API_URL}/event/create`,
            "POST"
        );
    },

    getEvents: () => {
        return handleRequest<undefined, EventResponse[]>(
            undefined,
            "/api/events",
            "GET"
        );
    },

    getEventById: (id: string) => {
        return handleRequest<undefined, EventResponse>(
            undefined,
            `/api/events/${id}`,
            "GET"
        );
    },

    deleteEvent: (id: string) => {
        return handleRequest<undefined, void>(
            undefined,
            `/api/events/${id}`,
            "DELETE"
        );
    },
};