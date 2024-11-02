import React, { useState, useEffect } from 'react';
// source utiliser et améliorer pour convenir: stack overflow : https://stackoverflow.com/questions/50568107/how-to-display-date-in-react-js-using-state
function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 60000); // chaque minutes on réaffiche

    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

return (
    <div style={{ display: 'inline' }}>
      {/* Ce qui s'affiche dans PageOne bon format ect...*/}
      <span>{formattedDate} - {formattedTime}</span>
    </div>
  );
}

export default DateTimeDisplay;