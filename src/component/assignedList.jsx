import { FaXmark } from "react-icons/fa6";

const AssignedList = ({assignedList, setAssignedList}) => {
    const handleRemove = (user) => {
        setAssignedList(prevList=>prevList.filter(prevUser=>prevUser.id !== user.id))
    }
  return (
    <div className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
      <h2 className="px-2 my-3 font-bold">Assigned list:</h2>
      <div className="flex flex-wrap gap-4">
        {assignedList?.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center gap-1 w-[47.5%] p-2 hover:bg-[#20212c] rounded transition-all duration-200">
            <span>{index + 1}.</span>
            <img
              className="w-6 h-6 "
              src={user.imgUrl}
              alt={`${user.name} image`}
            />

            <span>{user.name}</span>
            <span className="ml-auto cursor-pointer p-1 hover:bg-[#2b2c37] rounded-full" onClick={()=>handleRemove(user)}>
              <FaXmark />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedList;
