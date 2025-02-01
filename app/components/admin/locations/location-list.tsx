"use client";

import { FC } from "react";
import { Location } from "@/app/types";
import { UUID } from "crypto";

interface LocationListProps {
  locations: Location[];
}

const LocationList: FC<LocationListProps> = ({ locations }) => {
  const onEdit = (id: UUID) => {
    console.log(id);
  };

  const onDelete = (id: UUID) => {
    console.log(id);
  };
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Locations</h2>
      <table className="w-full rounded shadow">
        <thead className="text-left">
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">City</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {locations.length > 0 &&
            locations.map((location) => (
              <tr key={location.id} className="border-b">
                <td className="p-2">{location.name}</td>
                <td className="p-2">{location.city}</td>
                <td className="p-2">
                  <button
                    type="button"
                    onClick={() => onEdit(location.id)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => onDelete(location.id)}
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

export default LocationList;
