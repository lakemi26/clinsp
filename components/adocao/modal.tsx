"use client";

import React, {
  ForwardedRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

interface ModalProps {
  children: ReactNode;
  titulo: string;
  ref: ForwardedRef<ModalHandle>;
}

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

const Modal = ({ children, titulo, ref }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current?.showModal();
      },
      close() {
        dialogRef.current?.close();
      },
    };
  });

  const handleOutsideClick = (e: MouseEvent) => {
    if (!dialogRef.current) return;
    const rect = dialogRef.current.getBoundingClientRect();
    const isInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (!isInDialog) {
      dialogRef.current?.close();
    }
  };

  useEffect(() => {
    if (!dialogRef.current) return;
    dialogRef.current.addEventListener("click", handleOutsideClick);
    return () => {
      dialogRef.current?.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="m-auto p-5">
      <h2 className="text-cyan-700 font-bold text-3xl">{titulo}</h2>
      {children}
    </dialog>
  );
};

export default Modal;
