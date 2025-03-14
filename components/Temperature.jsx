import { useState, useEffect } from "react";

export default function Temperature() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/temperature")
      .then((response) => response.json())
      .then((data) => setTemperature(data.temperature))
      .catch((error) => console.error("Ошибка загрузки температуры:", error));
  }, []);

  return (
    <p className="hidden md:flex text-[18px] font-[800] font-semibold mt-[8px] mb-[16px]">
      {temperature !== null
        ? `Current temperature is: ${temperature}°C`
        : "Loading temperature..."}
    </p>
  );
}
