import { useEffect, useState } from "react";
import "./styles.css";
export default function Carousal() {
  const data1 = [
    { id: 1, text: "first" },
    { id: 2, text: "second" },
    { id: 3, text: "third" },
    { id: 4, text: "fourth" },
    { id: 5, text: "fifth" },
    { id: 6, text: "sixth" }
  ];
  const show = 2;

  const [data, setData] = useState(data1);

  const [current, setcurrent] = useState(0);
  const [data2, getdata2] = useState(data.slice(current, current + show));
  useEffect(() => {
    var newarr = data.slice(current, current + show);
    getdata2(newarr);
  }, [current]);

  const prevdata = () => {
    current === 0 ? setcurrent(data.length - 1) : setcurrent(current - 1);
  };
  const nextdata = () => {
    current === data.length - 1 ? setcurrent(0) : setcurrent(current + 1);
  };

  const datashow = data2.map((item) => <div className="box"> {item.text}</div>);

  return (
    <div>
      <div>
        <div className="flex">{datashow}</div>
      </div>
      <br />
      <div class="buttonflex">
        <button onClick={prevdata}>Left</button>
        <button onClick={nextdata}>Right</button>
      </div>
    </div>
  );
}
