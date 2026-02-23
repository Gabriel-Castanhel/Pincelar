"use client";
import React, { useState } from "react";
import { FaCloudUploadAlt, FaMagic } from "react-icons/fa";

export default function CriarArte() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // Gerar o preview assim que o arquivo é selecionado
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) return alert("Preencha tudo!");

    setLoading(true);
    try {
      // 1. Upload para Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "pincelar_preset");

      const res = await fetch(`https://api.cloudinary.com/v1_1/SEU_CLOUD_NAME/image/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      // 2. Salvar no Prisma
      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          image: data.secure_url,
          authorId: "SEU_ID_USUARIO" // Substituiremos pela sessão depois
        }),
      });

      alert("Pincelada enviada com sucesso!");
      setPreview(null);
      setTitle("");
    } catch (err) {
      alert("Erro ao publicar arte");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-3xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <FaMagic className="text-purple-600" /> Nova Pincelada
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Área de Preview/Dropzone */}
        <label className="relative group cursor-pointer block w-full h-64 border-2 border-dashed border-gray-300 rounded-2xl overflow-hidden hover:border-purple-400 transition-all">
          {preview ? (
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <FaCloudUploadAlt size={48} />
              <span>Escolha sua arte</span>
            </div>
          )}
          <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
        </label>

        <input
          type="text"
          placeholder="Título da obra"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
        >
          {loading ? "Publicando..." : "Postar Arte"}
        </button>
      </form>
    </div>
  );
}