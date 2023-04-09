import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ title, name, isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      title={title}
      name={name}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          ref={avatarRef}
          // onChange={avatarRef}
          name="link"
          type="url"
          id="url-input-avatar"
          className="popup__input popup__link-input-avatar"
          placeholder="Ссылка на новую аватарку"
          required
        />
        <span className="popup__error url-input-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
};
export default EditAvatarPopup;

// import { useState, useEffect } from "react";
// import PopupWithForm from "./PopupWithForm";

// const EditAvatarPopup = ({ title, name, isOpen, onClose, onUpdateAvatar }) => {
//   const [avatar, setAvatar] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("avatar>>>>", avatar);
//     onUpdateAvatar({ avatar });
//   }

//   useEffect(() => {
//     setAvatar("");
//   }, [isOpen]);

//   return (
//     <PopupWithForm
//       title={title}
//       name={name}
//       isOpen={isOpen}
//       onClose={onClose}
//       onSubmit={handleSubmit}
//     >
//       <label className="popup__form-field">
//         <input
//           value={avatar}
//           onChange={(e) => setAvatar(e.target.value)}
//           // onChange={handleAvatarChange}
//           name="link"
//           type="url"
//           id="url-input-avatar"
//           className="popup__input popup__link-input-avatar"
//           placeholder="Ссылка на новую аватарку"
//           required
//         />
//         <span className="popup__error url-input-avatar-error"></span>
//       </label>
//     </PopupWithForm>
//   );
// };

// export default EditAvatarPopup;
