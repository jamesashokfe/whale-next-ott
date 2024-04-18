import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col grow container justify-center items-center">
      <h2 className="text-2xl">Page Not Found</h2>
      <p className="mt-2">The requested page was not found.</p>
      <Link href="/" className="mt-4 text-blue-600 hover:opacity-80">
        Goto Home
      </Link>
    </div>
  );
}
