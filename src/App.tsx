import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <h1 className="text-5xl font-bold underline">
      Gym app
      <FontAwesomeIcon icon={faCoffee} border size="xs" />
    </h1>
  );
};

export default App;
