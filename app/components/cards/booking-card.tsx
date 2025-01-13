import { FC } from "react";

interface BookingCardProps {
  title: string;
  location: string;
}

const BookingCard: FC<BookingCardProps> = ({ title, location }) => (
  <div
    className={`rounded-lg border-2 border-neon-pink p-6 shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg`}
  >
    <h3 className="mb-2 text-lg font-semibold tracking-wide text-white">
      {title}
    </h3>
    <p className="text-sm tracking-wide text-white">{location}</p>
  </div>
);

export default BookingCard;
