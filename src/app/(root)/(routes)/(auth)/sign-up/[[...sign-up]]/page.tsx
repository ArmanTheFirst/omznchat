import Footer from "@/components/footer";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {

  return (
    <>
      <div className="flex min-h-dvh items-center justify-center py-10">
        <SignUp
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
