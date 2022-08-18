import { Link } from "react-router-dom";

type Props = {};

const Routing: React.FC<Props> = () => {
  return (
    <>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
    </>
  );
};

export default Routing;
