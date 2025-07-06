import AuthGuard from "../components/AuthGuard";

export default function Scheme() {
  return (
    <AuthGuard>
      <h1>Scheme Page</h1>
    </AuthGuard>
  );
}
