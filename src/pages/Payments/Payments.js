import TaskForm from "../../components/forms/TaskForm";

function Payments({ title }) {
  return (
    <>
      <div className="w-full px-8 pt-10">
        <h1 className="text-2xl font-medium">{title}</h1>
        <TaskForm />
      </div>
    </>
  );
}

export default Payments;
