import { ChangeEvent, FC, FormEvent, useState } from "react";

interface UserFormProps {
  initialData: { name: ""; email: "" };
  onSubmit: (data: { name: ""; email: "" }) => void;
}

const UserForm: FC<UserFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(
    initialData || { name: "", email: "" },
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded p-4 shadow">
      <h2 className="mb-4 text-xl font-semibold">User Form</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default UserForm;
