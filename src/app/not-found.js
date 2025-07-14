import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Página no encontrada</h1>
      <p className="mb-4">Lo sentimos, la página que buscas no existe.</p>
      <p>Por favor, verifica la URL o vuelve a la página de inicio.</p>
      <Link className="text-blue-500 hover:underline" href="/">
        Volver a la página de inicio
      </Link>
    </div>
  );
}
