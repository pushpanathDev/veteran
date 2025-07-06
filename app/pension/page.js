import AuthGuard from "../components/AuthGuard";

export default function Pension() {
  return (
    <AuthGuard>
      <h1>PensionPage</h1>
    </AuthGuard>
  );
}
