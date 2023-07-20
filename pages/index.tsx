import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const CLERK_PUBLISHABLE_KEY =
"pk_test_c3dlZXBpbmctY291Z2FyLTE5LmNsZXJrLmFjY291bnRzLmRldiQ";
function MyApp() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} >
      <SignedIn>
        <div>
          {/* <div style={{marginLeft:"98%", marginTop:"1%",}}> */}
          <UserButton afterSignOutUrl="/"/>
        </div>
      </SignedIn>
      <SignedOut>
        <div>
          <SignUpButton />
          <SignInButton />
        </div>
      </SignedOut>
    </ClerkProvider>
  );
}

export default MyApp;