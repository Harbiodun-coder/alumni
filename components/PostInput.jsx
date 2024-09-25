const PostInput = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 mt-5">
        <div className="flex items-center">
          <img src="/13.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
          <input 
            type="text" 
            placeholder="Share your thoughts..." 
            className="ml-4 flex-1 bg-gray-100 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
          />
        </div>
        <div className="flex mt-2 space-x-4">
          <button className="flex items-center text-gray-500 hover:text-blue-600">
            <i className="fas fa-photo-video mr-2"></i>Photo
          </button>
          <button className="flex items-center text-gray-500 hover:text-blue-600">
            <i className="fas fa-video mr-2"></i>Video
          </button>
          <button className="flex items-center text-gray-500 hover:text-blue-600">
            <i className="fas fa-calendar-alt mr-2"></i>Event
          </button>
        </div>
      </div>
    );
  };
  
  export default PostInput;
  