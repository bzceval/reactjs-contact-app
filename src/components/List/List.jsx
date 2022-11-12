import React from "react";
import "./List.scss";
import Girl from "../../assets/girl.png";
import Man from "../../assets/man.png";
import { useUser, DeleteUser } from "../../utils/firebaseFunctions";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import NoFetched from '../NoFetched/NoFetched'

const List = ({ editUser }) => {
  const { isLoading, contactList } = useUser();
  return (
    <div className="contact-list p-3">
      <div className="container">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : contactList?.length === 0 ?(
          <NoFetched />
        ) : (
          contactList?.map((item, id) => (
            <div className="list-group w-auto mb-3">
              <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                {item.gender === "female" ? (
                  <img src={Girl} alt="profile" width={50} height={50} />
                ) : (
                  <img src={Man} alt="profile" width={50} height={50} />
                )}
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div className="row">
                    <h5 className="mb-0">{item.username.toLowerCase()}</h5>
                    <p className="mb-0 opacity-75">{item.phoneNumber}</p>
                  </div>
                  <div className="opacity-10 text-nowrap">
                    <div className="d-flex">
                      <MdDelete
                        onClick={() => DeleteUser(item.id)}
                        className="me-2 delete"
                      />
                      <RiEdit2Fill
                        onClick={() =>
                          editUser(
                            item.id,
                            item.username,
                            item.phoneNumber,
                            item.gender
                          )
                        }
                        className="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;
