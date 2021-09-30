import React from "react"


function DeckForm({ formData, handleChange, handleSubmit }){

    return (
      <form onSubmit = {handleSubmit} >
<div>
        <label className="form-label">Name:</label>
        <input
          required
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          style={{ width: "100%" }}
        />



        <label className="form-label">Description:</label>
        <textarea
          required
          id="description"
          type="textarea"
          name="description"
          rows="3"
          onChange={handleChange}
          value={formData.description}
          style={{ width: "100%" }}
        />
</div>
      </form>

    );
  };

export default DeckForm;
