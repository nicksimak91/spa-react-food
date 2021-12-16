import {
  useParams,
  useNavigate,
  useLocation,
  useMatch,
} from "react-router-dom";

function Movie() {
  const { title } = useParams();
  const navigate = useNavigate();

  //   const value = useMatch("/movies/:title");
  const value = useMatch("/movies/:title");
  const value2 = useLocation();

  console.log(value);
  console.log(value2);

  return (
    <>
      <h1>Film: {title}</h1>
      <button onClick={() => navigate("/", { replace: true })} className="btn">
        Click
      </button>
    </>
  );
}

export { Movie };
