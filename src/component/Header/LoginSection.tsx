import { signIn } from "next-auth/react";
import SectionWrapper from "./SectionWrapper";

const LoginSection = () => {
  const clickToLogin = () => {
    signIn("google");
  };

  return (
    <SectionWrapper>
      <button id="login-btn" onClick={clickToLogin}>
        로그인
      </button>
    </SectionWrapper>
  );
};

export default LoginSection;
