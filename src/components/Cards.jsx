export function Cards({ task, color }) {
  return (
    <div className={`rounded-2xl p-4 min-h-[120px] flex flex-col justify-between ${color}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-base font-bold text-white leading-tight">{task.title}</h3>
        <button className="text-white text-xl">...</button>
      </div>
      <div className="flex-col">
        <h3 className="text-md font-bold text-white mt-3 mb-2">Created At:
          <span className="font-light text-white ml-1">{task.createdAt}</span>
        </h3>
        <h3 className="text-md font-bold text-white mt-3 mb-3">Status:
          <span className="font-light text-white ml-1">{task.status}</span>
        </h3>
        <p className="text-md font-medium text-white leading-tight mb-4">{task.description}</p>
      </div>
    </div>
  );
}