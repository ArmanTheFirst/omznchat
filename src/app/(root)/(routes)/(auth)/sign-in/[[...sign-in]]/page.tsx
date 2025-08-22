import Footer from "@/components/footer";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  
  return (
    <>
      <div className="flex h-dvh items-center justify-center py-10">
        <SignIn
          appearance={{
            variables: {
              fontSize: "14px",
            },
          }}
        />
      </div>
    </>
  );
}
