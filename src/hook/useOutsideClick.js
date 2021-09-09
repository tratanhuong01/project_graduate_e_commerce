import { useEffect } from "react";

export default function useOutsideClick(ref, id) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (document.getElementById(id)) {
          if (document.getElementById(id).querySelector(".popup__child"))
            if (
              !document
                .getElementById(id)
                .querySelector(".popup__child")
                .classList.contains("hidden")
            )
              document
                .getElementById(id)
                .querySelector(".popup__child")
                .classList.add("hidden");
        }
      }
    }
    if (document.getElementById(id))
      document.getElementById(id).addEventListener("click", () => {
        if (document.getElementById(id).querySelector(".popup__child"))
          if (
            document
              .getElementById(id)
              .querySelector(".popup__child")
              .classList.contains("hidden")
          )
            document
              .getElementById(id)
              .querySelector(".popup__child")
              .classList.remove("hidden");
          else
            document
              .getElementById(id)
              .querySelector(".popup__child")
              .classList.add("hidden");
      });
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", () => handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
