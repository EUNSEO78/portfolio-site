import { ModalProps } from "@/types/type";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  // isOpen이 false일 때 모달이 보이지 않도록
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/55 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white text-black rounded-xl p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
