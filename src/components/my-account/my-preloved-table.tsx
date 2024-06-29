import React from "react";

// Define the type for the props
interface MyPrelovedTableProps {
  contact_no: string;
  created_at: string;
  note: string;
  status: string;
  user_id: string;
  want_to_do: string;
}

const MyPrelovedTable: React.FC<MyPrelovedTableProps> = ({
  contact_no,
  created_at,
  note,
  status,
  user_id,
  want_to_do,
}) => {
  // Parse the created_at date string
  const createdAtDate = new Date(created_at);

  // Check if the date is valid
  const isValidDate = !isNaN(createdAtDate.getTime());

  return (
    <div className="highlight-info">
      <h3>Important Information</h3>
      <ul>
        <li>Contact Number: {contact_no}</li>
        <li>
          Created At:{" "}
          {isValidDate ? createdAtDate.toLocaleString() : "Invalid Date"}
        </li>
        <li>Note: {note}</li>
        <li>Status: {status}</li>
        <li>User ID: {user_id}</li>
        <li>Want to Do: {want_to_do}</li>
      </ul>
    </div>
  );
};

export default MyPrelovedTable;
