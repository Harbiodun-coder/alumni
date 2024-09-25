import React from "react";
import { GoPlusCircle } from "react-icons/go";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { LiaBookmarkSolid } from "react-icons/lia";
import { RiUserUnfollowLine } from "react-icons/ri";
import { MdHideSource } from "react-icons/md";
import { TbLockOff } from "react-icons/tb";
import { CiFlag1 } from "react-icons/ci";

export default function StoryFeed() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [shareDropdownOpen, setShareDropdownOpen] = useState(false);
  const [shareDropdownOpen2, setShareDropdownOpen2] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  const toggleShareDropdown = () => {
    setShareDropdownOpen(!shareDropdownOpen);
  };
  const toggleShareDropdown2 = () => {
    setShareDropdownOpen2(!shareDropdownOpen2);
  };
  return (
    <div>
      {/* story field */}
      <div className="flex ">
        <div className="border-2 p-10 border-dotted text-center items-center flex flex-col justify-center bg-white">
          <GoPlusCircle className="w-10 h-10 font-bold text-sm" />
          <span className="text-gray-500 text-sm mt-2">Post a story</span>
        </div>
        <div className="ml-4">StoryFeed</div>
      </div>

      {/* share your thought */}
      <div className="pt-4">
        <div class="card card-body p-4 shadow-md rounded-lg bg-white h-[200px]">
          <div class="flex items-start mb-3">
            <div class="mr-2">
              <Image
                src="/05.jpg"
                alt="User Avatar"
                width={50}
                height={100}
                className="rounded-full"
              />
            </div>

            <form class="w-full">
              <textarea
                class="w-full p-3  rounded-md border-none resize-none focus:outline-none focus:ring-0"
                rows="2"
                placeholder="Share your thoughts..."
              ></textarea>
            </form>
          </div>

          <ul class="flex space-x-2 text-sm font-normal pt-10">
            <li>
              <a
                href="#!"
                class="flex items-center bg-gray-100 gap-2 py-1 px-3 rounded-md"
                data-bs-toggle="modal"
                data-bs-target="#feedActionPhoto"
              >
                <Image
                  src="/pic.jpg"
                  alt="User Avatar"
                  width={20}
                  height={10}
                  className="rounded-full"
                />
                Photo
              </a>
            </li>
            <li>
              <a
                href="#!"
                class="flex items-center bg-gray-100 py-1 px-3 rounded-md"
                data-bs-toggle="modal"
                data-bs-target="#feedActionVideo"
              >
                <Image
                  src="/video.jpg"
                  alt="User Avatar"
                  width={20}
                  height={10}
                  className="rounded-full"
                />
                Video
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center bg-gray-100 py-1 px-3 rounded-md"
                data-bs-toggle="modal"
                data-bs-target="#modalCreateEvents"
              >
                <Image
                  src="/calender.jpg"
                  alt="User Avatar"
                  width={20}
                  height={10}
                  className="rounded-full"
                />
                Event
              </a>
            </li>
            <li>
              <a
                href="#!"
                class="flex items-center bg-gray-100 py-1 px-3 rounded-md"
                data-bs-toggle="modal"
                data-bs-target="#modalCreateFeed"
              >
                <Image
                  src="/smiley.png"
                  alt="User Avatar"
                  width={20}
                  height={10}
                  className="rounded-full"
                />
                Feeling / Activity
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* story part */}

      <div class="card bg-white shadow rounded-lg mt-5 p-2">
        <div class="card-header  pb-0">
          <div class="flex items-center justify-between">
            <div class="flex items-center p-4">
              <div class="avatar avatar-story mr-2">
                <Image
                  src="/05.jpg"
                  alt="User Avatar"
                  width={50}
                  height={50}
                  className="rounded-full border-3 border-blue-500"
                />
              </div>

              <div>
                <div class="flex space-x-2">
                  <h6 class="text-base font-semibold">
                    <span>Bonu Samuel</span>
                  </h6>
                  <span class="text-xs text-gray-500">2hr</span>
                </div>
                <p class="text-sm text-gray-500 font-semibold">
                  Systems Engineer at LASU
                </p>
              </div>
            </div>

            <div className="relative">
              <button
                className="text-gray-500 hover:bg-gray-200 font-bold rounded-full p-4 text-md"
                onClick={toggleDropdown}
              >
                <BsThreeDots className="text-md font-bold" />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <ul className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <li>
                    <a
                      className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                      href="#"
                    >
                      <LiaBookmarkSolid className="h-5 w-5" /> Save post
                    </a>
                  </li>
                  <li>
                    <a
                      className=" px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                      href="#"
                    >
                      <RiUserUnfollowLine className="w-5 h-5" /> Unfollow
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex px-4 py-2 hover:bg-gray-100  items-center gap-2"
                      href="#"
                    >
                      <MdHideSource className="w-5 h-5" /> Hide post
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex px-4 py-2 hover:bg-gray-100  items-center gap-2"
                      href="#"
                    >
                      <TbLockOff className="w-5 h-5" /> Block
                    </a>
                  </li>
                  <li>
                    <hr className="border-t" />
                  </li>
                  <li>
                    <a
                      className="flex px-4 py-2 hover:bg-gray-100  items-center gap-2"
                      href="#"
                    >
                      <CiFlag1 className="w-5 h-5" /> Report post
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div class="card-body">
          <p class="text-lg  text-gray-700 p-4">
            I'm thrilled to share that I've completed a graduate certificate
            course in project management with the president's honor roll.
          </p>

          <img
            class="w-full h-auto mt-3 rounded-lg"
            src="01.jpg"
            alt="Post"
          ></img>

          <ul class="flex items-center justify-between  py-3 text-xs">
            <div className="flex gap-2 ml-2">
              <li class="flex items-center">
                <a
                  class="text-blue-500 hover:underline flex"
                  href="#!"
                  data-bs-toggle="tooltip"
                  title="Frances Guerrero<br>Lori Stevens"
                >
                  <AiFillLike />
                  Liked (56)
                </a>
              </li>
              <li class="flex items-center">
                <a class="text-gray-500 hover:text-blue-500 flex" href="#!">
                  <IoChatbubbleSharp className="text-blue-500" />
                  Comments (12)
                </a>
              </li>
            </div>

            <li className="relative">
              <div
                className="text-gray-500 hover:text-blue-500 flex gap-1 cursor-pointer"
                href=""
                id="cardShareAction"
                onClick={toggleShareDropdown}
              >
                <FaShare className="text-blue-500" />
                Share (3)
              </div>

              {shareDropdownOpen && (
                <ul className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <li>
                    <div className="block px-4 py-2 hover:bg-gray-100">
                      <i className="bi bi-envelope fa-fw pr-2"></i>Send via
                      Direct Message
                    </div>
                  </li>
                  <li>
                    <div className="block px-4 py-2 hover:bg-gray-100">
                      <i className="bi bi-bookmark-check fa-fw pr-2"></i>
                      Bookmark
                    </div>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      <i className="bi bi-link fa-fw pr-2"></i>Copy link to post
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      <i className="bi bi-share fa-fw pr-2"></i>Share post via …
                    </a>
                  </li>
                  <li>
                    <hr className="border-t" />
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      <i className="bi bi-pencil-square fa-fw pr-2"></i>Share to
                      News Feed
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <div class="flex mb-3">
            <div class="mr-2">
              <a href="#!">
                <img class="w-8 h-8 rounded-full" src="/10.jpg" alt=""></img>
              </a>
            </div>

            <form class="relative flex-grow">
              <textarea
                class="form-control bg-gray-100 p-2 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="1"
                placeholder="Add a comment..."
              ></textarea>
              <button
                class="absolute top-1/2 right-3 transform -translate-y-1/2 bg-transparent text-blue-500"
                type="submit"
              >
                <i class="bi bi-send-fill"></i>
              </button>
            </form>
          </div>

          <ul class="space-y-4">
            <li class="flex">
              <div class="w-8 h-8">
                <a href="#!">
                  <img
                    class="w-full h-full rounded-full"
                    src="/07.jpg"
                    alt=""
                  ></img>
                </a>
              </div>

              <div class="ml-3 bg-gray-100 p-3 rounded-lg flex-grow">
                <div class="flex justify-between">
                  <h6 class="font-semibold">
                    <a href="">Sanni Motunrayo</a>
                  </h6>
                  <small class="text-xs text-gray-500">5hr</small>
                </div>
                <p class="text-sm text-gray-700">
                  Congratulations bro keep soaring higher.
                </p>
              </div>
            </li>

            <ul class="pl-10 space-y-3">
              <li class="flex">
                <div class="w-8 h-8">
                  <a href="#!">
                    <img
                      class="w-full h-full rounded-full"
                      src="/02.jpg"
                      alt=""
                    ></img>
                  </a>
                </div>

                <div class="ml-3 bg-gray-100 p-3 rounded-lg flex-grow">
                  <div class="flex justify-between">
                    <h6 class="font-semibold">
                      <a href="">Akinwande Aaron</a>
                    </h6>
                    <small class="text-xs text-gray-500">2hr</small>
                  </div>
                  <p class="text-sm text-gray-700">
                    Congratulations more grace to your elbow.
                  </p>
                </div>
              </li>
            </ul>
          </ul>
        </div>
      </div>

      {/* post story 2 */}
      <div class="card bg-white shadow rounded-lg mt-5 p-2">
        <div class="card-header  pb-0">
          <div class="flex items-center justify-between">
            <div class="flex items-center p-4">
              <div class="avatar avatar-story mr-2">
                <Image
                  src="/13.jpg"
                  alt="User Avatar"
                  width={50}
                  height={50}
                  className="rounded-full border-3 border-blue-500"
                />
              </div>

              <div>
                <div class="flex space-x-2">
                  <h6 class="text-base font-semibold">
                    <span>Francis Matthew</span>
                  </h6>
                  <span class="text-xs text-gray-500">2hr</span>
                </div>
                <p class="text-sm text-gray-500 font-semibold">
                  Web Developer at LASU
                </p>
              </div>
            </div>

            <div className="relative">
              <button
                className="text-gray-500 hover:bg-gray-200 font-bold rounded-full p-4 text-md"
                onClick={toggleDropdown2}
              >
                <BsThreeDots className="text-md font-bold" />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen2 && (
                <ul className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <li>
                    <a
                      className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                      href="#"
                    >
                      <LiaBookmarkSolid className="h-5 w-5" /> Save post
                    </a>
                  </li>
                  <li>
                    <a
                      className=" px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                      href="#"
                    >
                      <RiUserUnfollowLine className="w-5 h-5" /> Unfollow
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex px-4 py-2 hover:bg-gray-100  items-center gap-2"
                      href="#"
                    >
                      <MdHideSource className="w-5 h-5" /> Hide post
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex px-4 py-2 hover:bg-gray-100  items-center gap-2"
                      href="#"
                    >
                      <TbLockOff className="w-5 h-5" /> Block
                    </a>
                  </li>
                  <li>
                    <hr className="border-t" />
                  </li>
                  <li>
                    <a
                      className="flex px-4 py-2 hover:bg-gray-100  items-center gap-2"
                      href="#"
                    >
                      <CiFlag1 className="w-5 h-5" /> Report post
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div class="card-body">
          <p class="text-lg  text-gray-700 p-4">
          I'm so privileged to be involved in the <a href="#!">@purejim </a>internship program! Interviewing with their team was fun and I hope this can be a valuable resource for folks! <a href="#!"> #frontendintern</a> <a href="#!"> #internship</a>  <a href="#"> #apply </a>
          </p>

          <img
            class="w-full h-auto mt-3 rounded-lg"
            src="post2.jpg"
            alt="Post"
          ></img>

          <ul class="flex items-center justify-between  py-3 text-xs">
            <div className="flex gap-2 ml-2">
              <li class="flex items-center">
                <a
                  class="text-blue-500 hover:underline flex"
                  href="#!"
                  data-bs-toggle="tooltip"
                  title="Frances Guerrero<br>Lori Stevens"
                >
                  <AiFillLike />
                  Liked (56)
                </a>
              </li>
              <li class="flex items-center">
                <a class="text-gray-500 hover:text-blue-500 flex" href="#!">
                  <IoChatbubbleSharp className="text-blue-500" />
                  Comments (12)
                </a>
              </li>
            </div>

            <li className="relative">
              <div
                className="text-gray-500 hover:text-blue-500 flex gap-1 cursor-pointer"
                href=""
                id="cardShareAction"
                onClick={toggleShareDropdown2}
              >
                <FaShare className="text-blue-500" />
                Share (3)
              </div>

              {shareDropdownOpen2 && (
                <ul className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      <i className="bi bi-envelope fa-fw pr-2"></i>Send via
                      Direct Message
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      <i className="bi bi-bookmark-check fa-fw pr-2"></i>
                      Bookmark
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      <i className="bi bi-link fa-fw pr-2"></i>Copy link to post
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      <i className="bi bi-share fa-fw pr-2"></i>Share post via …
                    </a>
                  </li>
                  <li>
                    <hr className="border-t" />
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      <i className="bi bi-pencil-square fa-fw pr-2"></i>Share to
                      News Feed
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <div class="flex mb-3">
            <div class="mr-2">
              <a href="#!">
                <img class="w-8 h-8 rounded-full" src="/10.jpg" alt=""></img>
              </a>
            </div>

            <form class="relative flex-grow">
              <textarea
                class="form-control bg-gray-100 p-2 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="1"
                placeholder="Add a comment..."
              ></textarea>
              <button
                class="absolute top-1/2 right-3 transform -translate-y-1/2 bg-transparent text-blue-500"
                type="submit"
              >
                <i class="bi bi-send-fill"></i>
              </button>
            </form>
          </div>

          <ul class="space-y-4">
            <li class="flex">
              <div class="w-8 h-8">
                <a href="#!">
                  <img
                    class="w-full h-full rounded-full"
                    src="/07.jpg"
                    alt=""
                  ></img>
                </a>
              </div>

              <div class="ml-3 bg-gray-100 p-3 rounded-lg flex-grow">
                <div class="flex justify-between">
                  <h6 class="font-semibold">
                    <a href="">Sanni Motunrayo</a>
                  </h6>
                  <small class="text-xs text-gray-500">5hr</small>
                </div>
                <p class="text-sm text-gray-700">
                  Congratulations bro keep soaring higher.
                </p>
              </div>
            </li>

            <ul class="pl-10 space-y-3">
              <li class="flex">
                <div class="w-8 h-8">
                  <a href="#!">
                    <img
                      class="w-full h-full rounded-full"
                      src="/02.jpg"
                      alt=""
                    ></img>
                  </a>
                </div>

                <div class="ml-3 bg-gray-100 p-3 rounded-lg flex-grow">
                  <div class="flex justify-between">
                    <h6 class="font-semibold">
                      <a href="">Akinwande Aaron</a>
                    </h6>
                    <small class="text-xs text-gray-500">2hr</small>
                  </div>
                  <p class="text-sm text-gray-700">
                    Congratulations more grace to your elbow.
                  </p>
                </div>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
