import React from "react";

const Assignments = () => {
  const assignments = [
    { title: "Logo design for Airline", deadline: "24/01/2025" },
    { title: "UI/UX Design - Ecommerce Mobile App", deadline: "24/01/2025" },
    { title: "User Persona and User Journey", deadline: "24/01/2025" },
  ];

  return (
    <div className="bg-white shadow rounded p-4 sm:hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Assignments</h2>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index} className="border-b py-2">
            <h3 className="font-medium">{assignment.title}</h3>
            <p className="text-gray-500">Deadline: {assignment.deadline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;
