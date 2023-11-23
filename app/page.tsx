import AuthForm from "./auth-form";

export default function Home() {
  return (
    <main className="p-6 flex flex-col items-center justify-center">
      <div className="w-full">
        <p className="">Welcome to Job Compass</p>
        <p>lets get started by signing you in</p>
      </div>
      <div className="max-w-80 w-full">
        <AuthForm />
      </div>
    </main>
  );
}
