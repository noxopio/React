import { useState } from "react";
import { Popup } from "./Popup";

export const AppComponet = () => {
  // Estado para manejar los checkboxes
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  // Función para actualizar el estado de los checkboxes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  // Estado para manejar la visibilidad del popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsPopupOpen(true)}>Abrir Popup</button>

      {isPopupOpen && (
        <Popup
          checkboxes={checkboxes}
          onCheckboxChange={handleCheckboxChange}
          closePopup={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
}
