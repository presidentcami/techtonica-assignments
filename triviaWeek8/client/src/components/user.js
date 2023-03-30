import { useState } from "react";

const UserForm = (props) => {
  const [value, setValue] = useState("");
  const [disableForm, setDisableForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableForm(true)
    if (!value) return;
    props.grabUser(value);
    console.log(value);
    setValue("");
  };

  return (
    <div>
    {disableForm ? null : (
    <div className="ListMain">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Please enter your name"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>)
    }
    </div>
  );
};

export default UserForm;