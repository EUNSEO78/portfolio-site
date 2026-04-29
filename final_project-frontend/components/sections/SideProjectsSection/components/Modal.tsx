import { ModalProps } from "@/types/type";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl border border-white/20 p-6 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-green-500 hover:text-green-700 text-boldtransition"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
