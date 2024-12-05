"use client";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/settingsSlice';
import { RootState } from '../../store/store';

const DarkModeToggle = () => {
  const isDark = useSelector((state: RootState) => state.settings.dark);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', savedMode);
    dispatch({ type: 'settings/toggleDarkMode', payload: savedMode });
  }, [dispatch]);

  const handleToggle = () => {
    const newMode = !isDark;
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
    dispatch(toggleDarkMode());
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 dark:text-light"
    >
      {isDark ? 'light?' : 'dark?'}
    </button>
  );
};

export default DarkModeToggle;