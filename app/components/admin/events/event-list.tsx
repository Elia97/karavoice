"use client";

import { FC } from "react";
import { Event } from "@/app/types";
import { UUID } from "crypto";

interface EventListProps {
  events: Event[];
}

const EventList: FC<EventListProps> = ({ events }) => {
  const onEdit = (id: UUID) => {
    console.log(id);
  };

  const onDelete = (id: UUID) => {
    console.log(id);
  };
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Events</h2>
      <table className="w-full rounded shadow">
        <thead className="text-left">
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 &&
            events.map((event) => (
              <tr key={event.id} className="border-b">
                <td className="p-2">{event.name}</td>
                <td className="p-2">
                  {new Date(event.date).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    onClick={() => onEdit(event.id)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => onDelete(event.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
