import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { handleUpdateUser } from "../../redux/actions/index";
import { useState } from "react";

export function EditUser() {
  const _USER_ID = useSelector((e) => e?.user?.userId);
  const USER = useSelector((e) =>
    e?.user?.getUser.find((user) => user.id === _USER_ID)
  );
  const dispatch = useDispatch();
  const history = useNavigate();

  const [name, setName] = useState(USER.name);
  const [email, setEmail] = useState(USER.email);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        handleUpdateUser({
          id: _USER_ID,
          name,
          email,
        })
      );

      setError(null);
      history("/");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Save user
          </button>
        </div>
      </div>
    </div>
  );
}
