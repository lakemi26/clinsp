"use client";

import React, { useRef, useState } from "react";
import Modal, { ModalHandle } from "./modal";
import Image from "next/image";
import { registerPet } from "@/actions/adocaoActions";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="py-1 px-2 bg-cyan-600 rounded-sm text-white font-semibold w-[10vw] m-auto disabled:opacity-60"
      type="submit"
      disabled={pending}
    >
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
}

const Adicionarpet = () => {
  const addModalRef = useRef<ModalHandle>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <button
        className="py-1 px-2 bg-cyan-600 rounded-sm text-white font-semibold"
        onClick={() => addModalRef.current?.open()}
      >
        Adicionar Pet
      </button>

      <Modal ref={addModalRef} titulo="Adicionar Pet">
        <div className="w-[75vw] md:w-[50vw]">
          <form
            // sem method / sem encType quando usar Server Action
            action={async (fd) => {
              try {
                await registerPet(fd);
                addModalRef.current?.close?.();
                setPreview(null);
              } catch {
                alert("Não foi possível cadastrar. Tente novamente.");
              }
            }}
            className="flex flex-col gap-3 mt-5"
          >
            <label htmlFor="imagem" className="text-cyan-700">
              Imagem:
            </label>

            {preview && (
              <div className="flex justify-center mt-2">
                <Image
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-md border-2 border-cyan-700"
                  width={300}
                  height={300}
                />
              </div>
            )}

            <input
              type="file"
              id="imagem"
              name="imagem"
              accept="image/*"
              onChange={handleImagemChange}
              className="border-2 border-cyan-700 rounded-sm"
              required
            />

            <label htmlFor="nome" className="text-cyan-700">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="border-2 border-cyan-700 rounded-sm"
              required
            />

            <label htmlFor="descricao" className="text-cyan-700">
              Descrição:
            </label>
            <textarea
              id="descricao"
              name="descricao"
              className="border-2 border-cyan-700 rounded-sm resize-none"
              required
            />

            <SubmitButton />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Adicionarpet;
