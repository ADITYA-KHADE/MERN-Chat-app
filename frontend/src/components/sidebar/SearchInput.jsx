import React from 'react'
import { FaSearch } from "react-icons/fa";
import useGetConversations from "../../Hooks/useGetConversations"
import useConversation from "../../zustand/useConversation"
import { toast } from "react-hot-toast";


const SearchInput = () => {
  const [search, setSearch] = React.useState("");
  const { conversations, loading } = useGetConversations();
  const { setSelectedConversation } = useConversation();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search)return;

    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
  }
  return (
    <div>
        <form className="flex items-center gap-2" onSubmit={handleSubmit} >
        <input type="text" placeholder="Search Here" className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />   
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch />
        </button>
        </form>
    </div>
  )
}

export default SearchInput
