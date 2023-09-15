"use client";
import useModalTab from "@/app/hooks/useModalTab";
export default function ModalTextInput({
  labelText,
  name,
  typeText,
  placeholerText,
  userInfo,
  handleInputChange,
  labelTextExtra,
  icon,
}) {
  const { activeTab, setHandleModalActiveTab } = useModalTab();
  return (
    <div className="my-4">
      <label className={`text-base font-fig font-normal mb-2`}>
        {labelText}
        <span className="text-[#999CA0]">{labelTextExtra}</span>
      </label>
      <br />
      <div className="flex items-center justify-between mt-2 px-3 py-3 rounded-lg border-2 border-[#F2F2F2] focus:outline-none">
      <input
        name={name}
        type={typeText}
        value={userInfo}
        onChange={handleInputChange}
        className=" focus:outline-none px-1 placeholder:text-base placeholder:font-normal placeholder:font-fig placeholder:text-[#999CA0]"
        placeholder={placeholerText}
  
      />
      <div className="cursor-pointer">
      {icon }
      </div>
    </div>
      
    </div>
  );
}