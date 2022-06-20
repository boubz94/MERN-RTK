import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError } = useSelector((state) => state.goals);

  useEffect(() => {
    // if (isError) console.log(message);
    //Runs only on the first render
    if (!user) navigate("/login");

    dispatch(getGoals());
    dispatch(reset());

    return () => {
      // cancel the subscription
      dispatch(reset());
    };
  }, [user, navigate, dispatch, isError, isLoading]);

  if (isLoading) return <Spinner />;
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      {/* <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section> */}
    </>
  );
}

export default Dashboard;
