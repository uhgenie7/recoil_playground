import { useRecoilState } from "recoil";
import { tempCelsius, tempFahrenheit } from "../states/temp";

function TempCelsius() {
  // 화씨: 기본값
  const [tempF, setTempF] = useRecoilState(tempFahrenheit);
  // 섭씨: 화씨를 토대로 한 selector
  const [tempC, setTempC] = useRecoilState(tempCelsius);

  const addTenFahrenheit = () => setTempF(tempF + 10);
  const addTenCelsius = () => setTempC(tempC + 10);

  const removeTenFahrenheit = () => setTempF(tempF - 10);
  const removeTenCelsius = () => setTempC(tempC - 10);

  return (
    <div>
      Temp (화씨), atom : {tempF}
      <br />
      Temp (섭씨), selector : {tempC}
      <br />
      <button onClick={addTenFahrenheit}>화씨 + 10 </button>
      <br />
      <button onClick={addTenCelsius}>도씨 + 10 </button>
      <br />
      <button onClick={removeTenFahrenheit}>화씨 - 10 </button>
      <br />
      <button onClick={removeTenCelsius}>도씨 - 10 </button>
    </div>
  );
}

export default TempCelsius;
