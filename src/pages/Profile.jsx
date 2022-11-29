import React from "react";

const Profile = () => {
  return (
    <div className="col-md-12 col-xl-4 m-5">
      <div className="card profile" style={{ borderRadius: "15px" }}>
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
              className="rounded-circle img-fluid"
              style={{ width: "100px" }}
              alt="Profile"
            />
          </div>
          <h4 className="mb-2">Julie L. Arsenault</h4>
          <p className="mb-0">4751 Total Contacts</p>
        </div>
        <button type="button" className="btn btn-danger btn-rounded">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default Profile;
