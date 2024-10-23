
export const Popup = ({ checkboxes, onCheckboxChange, closePopup }) => {
    return (
        <div className="popup">
          <h2>Selecciona opciones</h2>
          <label>
            <input
              type="checkbox"
              name="option1"
              checked={checkboxes.option1}
              onChange={onCheckboxChange}
            />
            Opción 1
          </label>
          <label>
            <input
              type="checkbox"
              name="option2"
              checked={checkboxes.option2}
              onChange={onCheckboxChange}
            />
            Opción 2
          </label>
          <label>
            <input
              type="checkbox"
              name="option3"
              checked={checkboxes.option3}
              onChange={onCheckboxChange}
            />
            Opción 3
          </label>
          <button onClick={closePopup}>Cerrar Popup</button>
        </div>
      );
}

  