// import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer"

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;

