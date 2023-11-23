import AuthForm from "./auth-form";

export default function Home() {
  return (
    <main className="p-6 flex flex-col items-center justify-center bg-background w-full h-screen">
      <div className="w-full">
        <p className="">Welcome to Job Compass</p>
        <p>lets get started by signing you in</p>
      </div>
      <div className="w-full">
        <AuthForm />
      </div>
    </main>
  );
}
