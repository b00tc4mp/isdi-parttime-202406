import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ title, startDate = new Date() }) => {
  const [timeElapsed, setTimeElapsed] = useState(() => {
    const start = new Date(startDate);
    const now = new Date();
    return Math.floor((now - start) / 1000); // Calcular segundos desde la fecha de inicio
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1); // Aumentar 1 segundo
    }, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, []);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0'); // Asegurar que los valores sean de 2 dígitos
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="counter">
      <h2>{title}</h2>
      <p>{formatTime(timeElapsed)}</p>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

export default Counter;
