import { SignInForm } from "@/app/auth/signin/signin-form";

type SignInPageProps = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const params = await searchParams;
  const callbackUrl = params.callbackUrl || "/";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0F1A] px-4 text-white">
      <SignInForm callbackUrl={callbackUrl} />
    </main>
  );
}
