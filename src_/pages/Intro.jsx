import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import OpeningAnimationTyping from "../components/OpeningAnimationTyping";

export default function Intro() {
  const navigate = useNavigate();
  const goMain = useCallback(() => navigate("/home"), [navigate]);

  return (
    <OpeningAnimationTyping
      typingText="Welcome to Sxxngii Portfolio"
      onDone={goMain}
      typingSpeed={90}
    />
  );
}
