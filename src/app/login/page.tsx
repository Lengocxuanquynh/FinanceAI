import { LoginForm } from "@/app/login/login-form";

type LoginPageProps = {
  searchParams: Promise<{ next?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const nextPath = params.next || "/dashboard";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0F1A] px-4">
      <LoginForm nextPath={nextPath} />
    </main>
  );
}
