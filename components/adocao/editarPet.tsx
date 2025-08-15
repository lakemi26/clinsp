"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Modal, { ModalHandle } from "./modal";
import { updatePet, deletePet } from "@/actions/adocaoActions";
import { useFormStatus } from "react-dom";

function SubmitBtn({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="py-1 px-2 bg-cyan-600 rounded-sm text-white font-semibold w-[20vw] lg:w-[8vw] m-auto disabled:opacity-60"
      type="submit"
      disabled={pending}
    >
      {pending ? "Enviando..." : label}
    </button>
  );
}

interface EditarProps {
  id: string;
  imageUrl?: string;
  nome: string;
  descricao: string;
}

export default function Editar({ id, imageUrl, nome, descricao }: EditarProps) {
  const editModalRef = useRef<ModalHandle>(null);
  const deleteModalRef = useRef<ModalHandle>(null);
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2 border-2 border-dashed rounded-xl border-cyan-600 hover:border-solid justify-center items-center w-[300px] h-[420px] p-2">
      <div className="w-[280px] h-[180px] overflow-hidden rounded-2xl">
        <Image
          src={preview || imageUrl || "/logo_clinsp_img.png"}
          alt={nome}
          width={300}
          height={200}
        />
      </div>
      <h2 className="text-cyan-700 font-bold text-2xl">{nome}</h2>
      <p className="text-center text-cyan-900 h-[30%] line-clamp-3">
        {descricao}
      </p>

      <Modal ref={editModalRef} titulo="Editar pet">
        <div className="w-[75vw] md:w-[50vw] lg:w-[30vw]">
          <form
            action={async (fd) => {
              try {
                await updatePet(fd);
                editModalRef.current?.close?.();
                setPreview(null);
              } catch {
                alert("Não foi possível salvar.");
              }
            }}
            className="flex flex-col gap-3 mt-5"
          >
            {/* ID oculto */}
            <input type="hidden" name="petId" value={id} />

            <label className="text-cyan-700">Nova imagem (opcional):</label>

            {preview && (
              <div className="flex justify-center mt-2">
                <Image
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-md border-2 border-cyan-700"
                  width={300}
                  height={300}
                  unoptimized
                />
              </div>
            )}

            <input
              type="file"
              name="imagem"
              accept="image/*"
              className="border-2 border-cyan-700 rounded-sm"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) setPreview(URL.createObjectURL(f));
              }}
            />

            <label className="text-cyan-700">Nome</label>
            <input
              type="text"
              name="nome"
              defaultValue={nome}
              className="border-2 border-cyan-700 rounded-sm"
              required
            />

            <label className="text-cyan-700">Descrição</label>
            <textarea
              name="descricao"
              defaultValue={descricao}
              className="border-2 border-cyan-700 rounded-sm resize-none"
              required
            />

            <SubmitBtn label="Salvar" />
          </form>
        </div>
      </Modal>

      {/* EXCLUIR */}
      <Modal ref={deleteModalRef} titulo="Tem certeza?">
        <div className="w-[75vw] md:w-[50vw] lg:w-[20vw]">
          <form
            action={async (fd) => {
              try {
                await deletePet(fd);
                deleteModalRef.current?.close?.();
              } catch {
                alert("Não foi possível excluir.");
              }
            }}
            className="flex flex-col gap-5 mt-5"
          >
            <input type="hidden" name="petId" value={id} />

            <div className="flex">
              <SubmitBtn label="Sim, excluir" />
              <button
                type="button"
                onClick={() => deleteModalRef.current?.close()}
                className="bg-gray-200 text-gray-700 font-semibold py-1 px-4 rounded-sm hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <div className="flex gap-3">
        <button onClick={() => editModalRef.current?.open()}>Editar</button>
        <button onClick={() => deleteModalRef.current?.open()}>Excluir</button>
      </div>
    </div>
  );
}
