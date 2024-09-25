
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Header from '@/components/Header';

const BlogPage = () => {
  const blogs = [
    {
      image: '/blog1.jpg',
      category: 'Lifestyle',
      title: 'Social guides the way in 2022 app performance report',
      date: 'Jan 22, 2022',
      description: 'Speedily say has suitable disposal add boy. On forth doubt miles of child.',
    },
    {
      image: '/blog2.jpg',
      category: 'Sports',
      title: 'Upcoming live video feed may not work how you expect',
      date: 'Mar 07, 2022',
      description: 'Under folly balls, death own point now men. Match way these she avoids seeing death.',
    },
    {
      image: '/blog3.jpg',
      category: 'Business',
      title: 'Google shares top search trends of 2022',
      date: 'Jun 17, 2022',
      description: 'I think an style child of. Servants moreover in sensible it ye possible six say his.',
    },
    {
      image: '/blog4.jpg',
      category: 'Technology',
      title: 'Counts reels replies, delivering another way to tap into the video',
      date: 'Nov 11, 2022',
      description: 'Placing forming nay looking old married few has. Margaret disposed of add screenered rendered.',
    },
  ];

  return (
    <div>
      <Header />
    <div className="container mx-auto px-4 py-20 grid lg:grid-cols-3 gap-8 ">
      {/* Left Section: Latest Blogs */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex space-x-4">
              <Image src={blog.image} alt={blog.title} width={300} height={100} className="rounded-lg" />
              <div>
                <span className={`text-xs font-semibold inline-block px-2 py-1 rounded-full text-white ${
                  blog.category === 'Lifestyle'
                    ? 'bg-red-500'
                    : blog.category === 'Sports'
                    ? 'bg-blue-500'
                    : blog.category === 'Business'
                    ? 'bg-green-500'
                    : 'bg-yellow-500'
                }`}>
                  {blog.category}
                </span>
                <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
                <p className="text-sm text-gray-600">{blog.description}</p>
                <p className="text-sm text-gray-400 mt-1">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-6 flex justify-center items-center space-x-2">
          <button className="p-2 border rounded-full">
            <FaChevronLeft />
          </button>
          <button className="p-2 bg-blue-500 text-white rounded-full">1</button>
          <button className="p-2 border rounded-full">2</button>
          <button className="p-2 border rounded-full">15</button>
          <button className="p-2 border rounded-full">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Right Section: Sidebar */}
      <div>
        {/* Recent Posts */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
          <ul className="space-y-2">
            <li>Ten questions you should answer truthfully - 2hr</li>
            <li>Five unbelievable facts about money - 4hr</li>
            <li>Best Pinterest Boards for learning about business - 6hr</li>
            <li>Skills that you can learn from business - 8hr</li>
            <a href="#" className="text-blue-500 mt-4 block">View all latest news</a>
          </ul>
        </div>

        {/* Tags */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">blog</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">business</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">theme</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">social</span>
          </div>
        </div>

        {/* Who to Follow */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Who to follow</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <Image src="/13.jpg" alt="Billy" width={40} height={40} className="rounded-full" />
              <div>
                <p className="font-semibold">Billy Vasquez</p>
                <p className="text-sm text-gray-500">News Anchor</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <Image src="/10.jpg" alt="Lori" width={40} height={40} className="rounded-full" />
              <div>
                <p className="font-semibold">Lori Ferguson</p>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <Image src="/07.jpg" alt="Carolyn" width={40} height={40} className="rounded-full" />
              <div>
                <p className="font-semibold">Carolyn Ortiz</p>
                <p className="text-sm text-gray-500">News Anchor</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogPage;
