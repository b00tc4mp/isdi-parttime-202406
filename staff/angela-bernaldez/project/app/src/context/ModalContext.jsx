import { createContext, useContext, useState, useRef } from 'react'
import ES from '../locals/en.json'

const ModalContext = createContext()

function Modal({ modalRef, modalData }) {
  return (
    <dialog 
      ref={modalRef} 
      className="modal" 
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} 
    >
      <div className="modal-box bg-white text-error-content">
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
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  )
}

function ModalProvider({ children }) {
  const [modalData, setModalData] = useState({ title: "", paragraph: "" })
  const modalRef = useRef(null);

  const openModalError = (error) => {
    setModalData({
      title: ES.modalErrors[error.constructor.name]?.title ?? ES.modalErrors.default.title,
      paragraph: ES.modalErrors[error.constructor.name]?.paragraph ?? ES.modalErrors.default.paragraph,
    })

    setTimeout(() => modalRef.current?.showModal(), 0)
  }

  return (
    <ModalContext.Provider value={{ openModalError }}>
      {children}
      <Modal modalRef={modalRef} modalData={modalData} />
    </ModalContext.Provider>
  )
}

const useModalError = () => {
  return useContext(ModalContext).openModalError
}

export {
  ModalProvider, 
  useModalError
}

