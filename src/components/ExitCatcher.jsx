import { useEffect } from "react";

export default function ExitCatcher({ onExit }) {
  useEffect(() => {
    if (!onExit) return;
    const on = () => onExit?.();
    window.addEventListener("click", on);
    window.addEventListener("keydown", on);
    return () => {
      window.removeEventListener("click", on);
      window.removeEventListener("keydown", on);
    };
  }, [onExit]);
  return null;
}