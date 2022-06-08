import { useSelector } from "react-redux";

function About() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h2>Hello from about</h2>
      <h3>{count}</h3>
    </div>
  );
}

export default About;
