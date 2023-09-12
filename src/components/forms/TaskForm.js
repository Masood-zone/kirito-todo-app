function TaskForm({ onSubmit, value, status, onTextChange, placeholder }) {
  return (
    <>
      <form className="flex gap-2 my-2">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onTextChange(e);
          }}
          className="w-full bg-[#F3F3F3] py-2 px-2 rounded-lg text-sm outline-none"
          placeholder={placeholder}
        />
        <div className="bg-[#EA5959] text-white rounded-lg hover:cursor-pointer overflow-hidden text-center">
          <button
            disabled={status === "empty" || status === "submitting"}
            className="py-2 px-4 disabled:bg-gray-500"
            onClick={onSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default TaskForm;
