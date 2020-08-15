import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const FormModal = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button className="button" onClick={() => setOpen(true)}>
        try it now
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="FormModal">
          <h2>Enter Spotify Username</h2>
          <p className="form-description">
            You can either enter only your username or enter a friend username
            to combine both of your playlist and give a a playlist with your
            most listened songs!
          </p>
          <form>
            <p>
              <label htmlFor="username">
                {/**
               Spotify username:
            */}
                Spotify username:
                <input
                  type="text"
                  name="username"
                  id="username"

                  // placeholder="Spotify Username"
                />
              </label>
            </p>
            <p>
              <label htmlFor="username2">
                {/**
               Spotify username 2:
            */}
                Spotify username 2 (Optional):
                <input
                  type="text"
                  name="username2"
                  id="username2"
                  // placeholder="Spotify Username 2 (Optional)"
                />
              </label>
            </p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;
