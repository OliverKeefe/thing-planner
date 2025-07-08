import { handleRequest } from "@/services/httpClient";
const API_URL = import.meta.env.VITE_API_URL;

interface CreateEventPayload {
console.log(API_URL);
    name: string;
    description?: string;
    startDate: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
    invitedEmails: string[];
}

interface EventResponse {
    id: string;
    name: string;
    createdAt: string;
}

export const EventsService = {
    createEvent: (payload: CreateEventPayload) => {
        return handleRequest<CreateEventPayload, EventResponse>(
            payload,
            "/api/events",
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