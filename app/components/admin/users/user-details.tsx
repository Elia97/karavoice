import { FC } from "react";

interface UserDetailsProps {
  user?: {
    name: string;
    email: string;
  }; // Definisce il tipo opzionale per l'utente
}

const UserDetails: FC<UserDetailsProps> = ({ user }) => {
  if (!user) {
    return <p>Select a user to view details.</p>;
  }

  return (
    <div className="rounded p-4 shadow">
      <h2 className="mb-4 text-xl font-semibold">User Details</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default UserDetails;
