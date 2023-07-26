// "use client";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const Toogle = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   const switchTheme = () => {
//     if (isChecked) {
//       document.documentElement.setAttribute("data-theme", "light");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.setAttribute("data-theme", "dark");
//       localStorage.setItem("theme", "dark");
//     }
//   };

//   useEffect(() => {
//     const toggleSwitch = document.querySelector(
//       '.theme-switch input[type="checkbox"]'
//     );
//     const currentTheme = localStorage.getItem("theme");

//     if (currentTheme) {
//       document.documentElement.setAttribute("data-theme", currentTheme);

//       if (currentTheme === "dark") {
//         toggleSwitch.checked = true;
//       }
//     }

//     toggleSwitch.addEventListener("change", switchTheme, false);
//   });

//   return (
//     <div className="theme-switch-wrapper">
//       <label className="theme-switch" htmlFor="checkbox">
//         <input
//           type="checkbox"
//           id="checkbox"
//           defaultChecked={isChecked}
//           onChange={() => setIsChecked((prev) => !prev)}
//         />
//         <div className="slider round"></div>
//       </label>
//     </div>
//   );
// };

// export default Toogle;
