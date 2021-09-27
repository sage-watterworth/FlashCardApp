import React from "react"

function CardForm(props){
return (


<div>
   <form onSubmit={props.handleSubmit}>
        <div className="form-group">
            <label htmlFor="front"
            className="form-label">
            Front
            </label>
            <textarea
                type="textarea"
                className="form-control"
                id="front"
                name="front"
                placeholder={props.formData.front}
                value={props.formData.front}
                onChange={props.handleChange}
                />
        </div>
        <div className="form-group">
            <label htmlFor="back"
            className="form-label">
                Back
            </label>
            <textarea
                type="textarea"
                className="form-control"
                id="back"
                name="back"
                placeholder={props.formData.back}
                value={props.formData.back}
                onChange={props.handleChange}
                />
        </div>
        <input
            className="btn btn-secondary mr-3"
            type="reset"
            onClick={props.handleReset}
            value="Done">
            </input>
            <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
)}

export default CardForm;
