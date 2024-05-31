import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./store/reducer/todo";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const isError = useSelector((state) => state.todo.isError);
  const getTodoHandler = () => {
    dispatch(getTodos());
  };
  return (
    <section className='w-full h-screen'>
      <h1 className='text-xl font-bold text-blue-700 text-center'>
        Async , Await in Redux
      </h1>
      <button
        onClick={getTodoHandler}
        className='px-2 py-0.5 block m-auto my-2 text-white bg-indigo-600 rounded-md shadow-lg'>
        Get Todos
      </button>
      <table className='w-3/4 bg-gray-100 m-auto'>
        <thead className='bg-indigo-600'>
          <tr>
            <th className='p-2 text-white'>ID</th>
            <th className='p-2 text-white'>User ID</th>
            <th className='p-2 text-white'>Title</th>
            <th className='p-2 text-white'>Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {isError && (
            <tr>
              <td>Something went wrong!</td>
            </tr>
          )}
          {!isError && !isLoading && todos.length < 1 && (
            <tr>
              <td>
                Click <span className='font-bold'>Get Todos</span> button to get
                your todos
              </td>
            </tr>
          )}
          {!isError &&
            !isLoading &&
            todos.map((todo) => {
              return (
                <tr key={todo.id} className='[&:nth-child(even)]:bg-indigo-200'>
                  <td className='p-2'>{todo.id}</td>
                  <td className='p-2'>{todo.userId}</td>
                  <td className='p-2'>{todo.title}</td>
                  <td className='p-2'>
                    {todo.completed ? (
                      <p className='px-1 py-0.5 bg-emerald-600 text-center text-white rounded-md shadow-md text-sm'>
                        Completed
                      </p>
                    ) : (
                      <p className='px-1 py-0.5 bg-rose-600 text-center text-white rounded-md shadow-md text-sm'>
                        Not Completed
                      </p>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
}

export default App;
