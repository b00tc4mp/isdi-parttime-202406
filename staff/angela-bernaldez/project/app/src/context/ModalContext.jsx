import { createContext, useContext, useState, useRef } from 'react';
import EN from '../locals/en.json'

const ModalContext = createContext()

function Modal({ modalRef, modalData, onConfirm = () => {} }) {
  return (
    <dialog ref={modalRef} className="modal" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="modal-box bg-white text-black">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-600"
            onClick={() => modalRef.current.close()}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{modalData.title}</h3>
        <p className="py-4">{modalData.paragraph}</p>

        {/* Only render confirmation modal if modalData.action === true */}
        {modalData.action && (
          <div className="flex justify-end gap-2">
            <button
              className="btn btn-sm btn-ghost text-gray-500"
              onClick={() => modalRef.current.close()}
            >
              Cancel
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                onConfirm()
                modalRef.current.close()
              }}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </dialog>
  )
}

function ModalProvider({ children }) {
  const [modalData, setModalData] = useState({ title: '', paragraph: '', action: false })
  const modalRef = useRef(null)

  const openModal = (modalData) => {
    setModalData(modalData)
    setTimeout(() => modalRef.current?.showModal(), 0)
  }

  const openModalError = (error) => {
    setModalData({
      title: EN.modalErrors[error.constructor.name]?.title ?? EN.modalErrors.default.title,
      paragraph: EN.modalErrors[error.constructor.name]?.paragraph ?? EN.modalErrors.default.paragraph,
      action: false, 
    })
    setTimeout(() => modalRef.current?.showModal(), 0)
  }

  return (
    <ModalContext.Provider value={{ openModal, openModalError }}>
      {children}
      <Modal modalRef={modalRef} modalData={modalData} onConfirm={modalData.onConfirm} />
    </ModalContext.Provider>
  )
}

const useModal = () => {
  return useContext(ModalContext)
}

export { ModalProvider, useModal }
