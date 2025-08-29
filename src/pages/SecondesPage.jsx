import React from "react";
import { Link } from "react-router-dom";

export default function SecondPage() {
  return (
    <div className="min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Deuxième page</h1>
      <p className="mb-6">Contenu de la nouvelle page — remplacez par votre texte.</p>
      <Link to="/" className="inline-block rounded-2xl border px-4 py-2">Retour</Link>
    </div>
  );
}