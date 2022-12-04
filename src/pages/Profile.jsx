import React from "react";

const Profile = () => {
  return (
    <div className="d-flex align-items-center h-100 col-md-12">
      <div className="col card mx-5 profile" style={{ borderRadius: "15px" }}>
        <div className="card-body text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            className="rounded-circle img-fluid"
            style={{ width: "100px" }}
            alt="Profile"
          />
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
