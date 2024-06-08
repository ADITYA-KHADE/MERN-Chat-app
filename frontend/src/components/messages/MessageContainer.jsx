import React from 'react' 
import Header from "./Header"
import Messages from "./Messages"
import InputMessage from "./InputMessage"

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {/* <Header/> */}
      <div className="bg-slate-500 px-4 py-2 mb-2 flex">
        {/* <span className="label-text">TO: </span> */}
        <img src="https://randomuser.me/api/portraits/men/75.jpg" className="rounded-full w-10 mr-3"/>
        <span className="text-gray-900 font-bold mt-1">Jacki guruji</span>
      </div>
      <Messages/>
      <InputMessage/>
    </div>
  )
}

export default MessageContainer
