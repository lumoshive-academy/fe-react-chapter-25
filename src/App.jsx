import React, { useState } from "react";

export default function FormComponent() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Menambahkan atau menghapus kelas 'dark' dari <body> saat mode diubah
    isDarkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  };

  return (
    <div className="container mx-auto mt-3">
      <button
        onClick={toggleDarkMode}
        className="bg-slate-400 py-2 px-4 border mb-3"
      >
        Theme {isDarkMode ? "Light" : "Dark"}
      </button>
      <div className="bg-white dark:bg-slate-800 rounded-lg p-2 border">
        <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 dark:text-slate-400">
          The Zero Gravity Pen can be used to write in any orientation.
        </p>
      </div>
    </div>
  );
}
