import React, { useContext, useState } from "react";
import "./List.scss";
import Girl from "../../assets/girl.png";
import Man from "../../assets/man.png";
import { useUser, DeleteUser } from "../../utils/firebaseFunctions";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import NoFetched from "../NoFetched/NoFetched";
import Modal from "../Modal/Modal";
import { MainContext } from "../../context/ContextProvider";

const List = () => {
  const [showModal, setShowModal] = useState();
  const [editItem, seteditItem] = useState();
  const { isLoading, contactList } = useUser(false);
  const { user } = useContext(MainContext);

  const handleEdit = (id, username, phoneNumber, gender) => {
    setShowModal("active");
    seteditItem({ id, username, phoneNumber, gender });
  };
  // console.log(editItem)

  return (
    <>
      <div className="contact-list">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : contactList?.length === 0 ? (
          <NoFetched />
        ) : (
          contactList?.map((item) => (
            <div key={item.id} className="list-group mb-3 mt-3">
              <div className="list-group-item list-group-item-action d-flex gap-3">
                {item.gender === "female" ? (
                  <img src={Girl} alt="profile" width={50} />
                ) : (
                  <img src={Man} alt="profile" width={50} />
                )}
                <div className="d-flex gap-2 justify-content-between">
                  <div className="row">
                    <h6 className="mb-0">{item.username.toLowerCase()}</h6>
                    <p className="mb-0 opacity-75">{item.phoneNumber}</p>
                  </div>
                  {user && (
                    <div className="opacity-10 text-nowrap">
                      <div className="d-flex">
                        <MdDelete
                          onClick={() => DeleteUser(item.id)}
                          className="me-2 delete"
                        />
                        <RiEdit2Fill
                          className="edit"
                          onClick={() =>
                            handleEdit(
                              item?.id,
                              item?.username,
                              item?.phoneNumber,
                              item?.gender
                            )
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={`modal-container ${showModal}`}>
        <Modal
          seteditItem={seteditItem}
          editItem={editItem}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </>
  );
};

export default List;
