import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/.netlify/functions/getStaffs");
      const data = await response.json();
      setData(data);
    })();
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
