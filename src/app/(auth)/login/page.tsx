import { LoginForm } from "@/components/login-form";

export default async function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col place-content-center place-items-center">
      <div className="flex min-w-[350px] flex-col items-center rounded-md border p-5">
        INSQUBE
        <p className="py-1 text-2xl font-semibold">Welcome Back</p>
        <LoginForm />
      </div>
    </div>
  );
}
