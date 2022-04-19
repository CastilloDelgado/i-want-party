import React, { useState } from "react";

const LinkForm = ({ addOrEdit }) => {
  const initialValues = {
    url: "",
    name: "",
    description: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleSubmit = () => {
    if (addOrEdit(values)) {
      setValues(initialValues);
    }
  };

  const handleInputChange = (e) => {
    const newValues = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newValues);
  };

  return (
    <form className="card card-body">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="bi bi-link" />
        </div>
        <input
          type="text"
          name="url"
          value={values.url}
          className="form-control"
          placeholder="https://example.com"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group mt-2">
        <div className="input-group-text bg-light">
          <i className="bi bi-pencil" />
        </div>
        <input
          name="name"
          value={values.name}
          type="text"
          className="form-control"
          placeholder="Website name"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mt-2">
        <textarea
          name="description"
          value={values.description}
          type="text"
          className="form-control"
          placeholder="Write a description..."
          rows={3}
          onChange={handleInputChange}
        />
      </div>

      <button
        className="btn btn-primary mt-2"
        type="button"
        onClick={handleSubmit}
      >
        Save
      </button>
    </form>
  );
};

export default LinkForm;
