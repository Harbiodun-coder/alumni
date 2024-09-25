const ProfileSidebar = () => {
    return (
      <div className="w-1/3 ml-6">
        {/* Experience Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="font-semibold mb-4">Experience</h3>
          <ul>
            <li className="mb-4">
              <div className="flex items-center">
                <img src="/company-logo.png" alt="Company" className="w-10 h-10 rounded" />
                <div className="ml-4">
                  <h4 className="font-semibold">Apple Computer, Inc.</h4>
                  <p className="text-sm text-gray-500">Lead Developer</p>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
  
        {/* Photos Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="font-semibold mb-4">Photos</h3>
          <div className="grid grid-cols-3 gap-2">
            <img src="/photo1.jpg" alt="Photo 1" className="w-full rounded-lg" />
            <img src="/photo2.jpg" alt="Photo 2" className="w-full rounded-lg" />
            <img src="/photo3.jpg" alt="Photo 3" className="w-full rounded-lg" />
          </div>
        </div>
  
        {/* Friends Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="font-semibold mb-4">Friends</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <img src="/photo1.jpg" alt="Friend 1" className="w-16 h-16 rounded-full mx-auto mb-2" />
              <p className="text-sm font-medium">Amanda Reed</p>
            </div>
            <div className="text-center">
              <img src="/photo1.jpg" alt="Friend 1" className="w-16 h-16 rounded-full mx-auto mb-2" />
              <p className="text-sm font-medium">Jacob Isreal</p>
            </div>
            <div className="text-center">
              <img src="/photo1.jpg" alt="Friend 1" className="w-16 h-16 rounded-full mx-auto mb-2" />
              <p className="text-sm font-medium">Bonu Samuel</p>
            </div>
           
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileSidebar;
  