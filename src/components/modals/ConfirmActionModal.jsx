import { XIcon } from "@heroicons/react/solid";
import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement(document.getElementById("root"));
function ConfirmActionModal({ modalIsOpen, setModalIsOpen, performAction }) {
  return (
    <ReactModal isOpen={modalIsOpen.isOpen} className=" flex h-screen">
      <div className="max-h-22 max-w-xs m-auto bg-white border p-2">
        <div className="flex justify-end">
          <button
            className="p-1 bg-gray-200 border border-gray-300 rounded-full"
            onClick={() => setModalIsOpen({ ...modalIsOpen, isOpen: false })}
          >
            <XIcon className="h-4" />
          </button>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">{modalIsOpen.title}</h1>
          <p className="mt-2">{modalIsOpen.text}</p>
          <div className="flex justify-between mt-2">
            <button
              className="py-1 px-10 bg-gray-300 rounded-sm text-[#222]"
              onClick={() => performAction()}
            >
              Yes
            </button>
            <button
              className="py-1 px-10 bg-blue-800 rounded-sm text-white"
              onClick={() => setModalIsOpen({ ...modalIsOpen, isOpen: false })}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

export default ConfirmActionModal;
