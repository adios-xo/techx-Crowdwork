import React from "react";
import { Link } from "react-router-dom";

const CreateIssueButton = () => {
  return (
    <div className="fixed bottom-15 right-10">
      <Link to="/createIssue" className="py-4 px-6 bg-slate-800 text-white rounded-full shadow-md text-3xl font-bold hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
        +
      </Link>
    </div>
  );
};

export default CreateIssueButton;
