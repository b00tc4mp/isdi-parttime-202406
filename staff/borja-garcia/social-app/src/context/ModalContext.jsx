import { createContext, useContext, useState } from "react";
import ES from "../locales/es.json"
const Context = createContext(null);

function Provider({ children }) {
    const [data, setData] = useState({
        title: "",
        paragraph: "",
    });

    const openModalError = (error) => {
        setData({
          title:
            ES.modalErrors[error.constructor.name]?.title ??
            ES.modalErrors.default.title,
          paragraph:
            ES.modalErrors[error.constructor.name]?.paragraph ??
            ES.modalErrors.default.paragraph,
        });
        setTimeout(() => document.getElementById("modalError").showModal(), 0);
      };

    return (
        <>
        <Context.Provider value={{ openModalError }}>
            {children}
            <dialog id="modalError" className="modal">
                <div className="modal-box bg-secondary text-secondary-content">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕  
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">{data.title}</h3>
                    <div className="prose prose-sm text-secondary-content">
                        <p className="py-4">{data.paragraph}</p>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
            </dialog>
        </Context.Provider>
        </>
    );
}

export const useModalError =() => {
    const { openModalError } = useContext(Context);

    return openModalError;
};

const ModalContext = {
    Context,
    Provider,
    useModalError,
};

export default ModalContext;
