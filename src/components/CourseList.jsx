// src/components/CourseList.jsx
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { MdDragIndicator } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

const initialItems = [
  {
    id: "1",
    thumbnail: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__',
    name: "Interview preparation with JavaScript 2.0",
    price: "Rs. 9000/-",
    type: "Course",
  },
  {
    id: "2",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/c3f9/20d2/821eddba9e8b631df344253a088351ab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqcFLHVvgidt1zfj7iygAqioT7-77njX9HWzfJU9DtBvvupjabE1hwaUGOD6kbhzeA0zKVrm4wstNY5BtCQXZKKRsnRysVIT0pFZjLVySSs6va1WFLFwbUJYJWUh9R-A~aZHHkF0EdcA6BgTs7IGIVLda0HWnSlB8K1X0Jdx3pWoWc-LmgBoKM5POQQT6ezb4flHzZlmrkx7N2U~cwXgku-3uAecz4g6v2nF9WJBaGVOG7-rfMvIxPqkpSHOYHXL3lLBYNK4xX2PrF3gTTkmutrtwuK3va05zP28IDer1oINdgZ12mDWk5MXtUwYKRkhyIzj5xzKgzHebucWmGwD8Q__",
    name: "Aptitude - Averages, Mixtures & Allegation",
    price: "Free",
    type: "Mock Test",
  },
  {
    id: "3",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/afef/8de5/c31187fb55d09369df8e4601eeec5fd2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XDbkDiV0eSOus6-edXr4oEjulWtSE4amgsn1X5G6r7XtXkxtXCJRcX3cLvRUj3kwYGpdH9M1gWlfueMCzVO6AcahucFVhQUWpxIWtrxAMV~QodvtygjrxUjvEh4Me~WXXnzaFn7wLb-7kWI~6WnbqRqnQzNuA1cH7L6UbKchveEphcUNp7YLuvssyfftoNQOlIBwjLkHrRHJ1D-Y9GmUj9kx5lF7xTzPGW7oHUiujHtxNc6SKQUN-ZJaEi86M~sTylYuy-DJfrHgEpcjYQgPYO4b23S4I9iPOLiCvcDt6C55XDVoJbPv24KaFwMWr5Y8XA6CzOg6VtDF1LUG-fxxow__",
    name: "Aptitude - Simple & Compound Interest",
    price: "Free",
    type: "Mock Test",
  },
  {
    id: "4",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/f133/cc0d/84f36f0a21c66518d4eac3eeb44f2f8e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGpbfvpY0JE709msje3x2KurfYNeJCHxS5rJZFhZ8lG63iXABbpiop4wBg-NGjTpPNLLQiWjZXykD1Hom2jU3NBq4oC30ElOm11no4VLhWfuEjZmrwxChIK8Sd1Mxsg0bvWN~8E5psytaZrmv~pjful4jfb9W8L9fdY-BzhO9djoz1X2tY-o3lb~bMWhcDa-1fs1wRtPrgJM80tEw1dbBZRwPa5xPxEJO3L42nQCyGaFJTDC9CqVVTA6M2wRXMJnTWSUljUJsSQZkYJslBrMQOjgAfxmv~gLpgMnui3rRNNdHBcR-l9zAqQgVz2g4IwJ1DjqqfiE9-1UVfscCpsxBw__",
    name: "Aptitude - Partnership",
    price: "Free",
    type: "Mock Test",
  },
  {
    id: "5",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/28ea/b2ec/2d421358776ee87940ffce6b249a9b58?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DiMvhQakfDaMgJ3AqJaUHtT~JQ0jGRb63rt6TYv0ibdsYLWMOjFzx-~ofCYawgFnhqpLMamRnaxnhGr9AA84AboKmp1OTQQ2aAEdsUP88Lw3RLx-bSuEBLCl7jslPyG1gFUSDc0j3dng6zv86xk9H1LMDzwPqSJz9NbCF4~q9mmBAAtslRczUAnR85N3XH9Yh8qKC2YmqVQKyIz1GWup7VAsWJSdjxJKbZn~hspK2Po8u8Lpo8lc48DacOvyT8CMGxhI1TA~vtm8YET5-lKNMRDsdSAvfbW6LSMqFSSCeqOBEUenXmSYwxKrZou-gSdAzeP28vPTv5KFMizz92J3KQ__",
    name: "Aptitude - Time & Work",
    price: "Free",
    type: "Mock Test",
  },
];

const SortableItem = ({
  id,
  thumbnail,
  name,
  price,
  type,
  index,
  moveItem,
  deleteItem,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between p-2 mb-2  rounded shadow-lg min-w-52 "
    >
      <div className="flex items-center flex-auto">
        <span className="mr-4 cursor-grab">
          <MdDragIndicator size={25} color="gray" />
        </span>
        <div className="flex items-center">
          {console.log(thumbnail)}
          <img
            src={thumbnail}
            alt={name}
            className="w-32 h-20 rounded-md mr-4"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{name}</span>
        </div>
      </div>
      <span className="flex">
        <p className="text-sm mr-10">{price}</p>
        <p className="text-sm border px-2 rounded bg-green-200 mr-10">{type}</p>
      </span>
      <div className="relative inline-block text-left">
        <Menu>
          <MenuButton className="inline-flex justify-center w-full rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 z-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>{" "}
          </MenuButton>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="origin-top-right absolute left-50 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => moveItem(index, -1)}
                      disabled={index === 0}
                      className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <FaArrowUp color="#000" /> &nbsp; Move To Top
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => moveItem(index, 1)}
                      disabled={index === initialItems.length - 1}
                      className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <FaArrowDown color="#000" /> &nbsp; Move To Bottom
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => deleteItem(index)}
                      className={`${active ? "bg-gray-100 text-red-500" : "text-red-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <RiDeleteBinLine />
                      Delete
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </li>
  );
};

const CourseList = () => {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const moveItem = (index, direction) => {
    setItems((items) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(index, 1);
      newItems.splice(index + direction, 0, movedItem);
      return newItems;
    });
  };

  const deleteItem = (index) => {
    setItems((items) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  return (
    <div className="min-h-screen bg-green-100 p-6">
      <h1 className="text-5xl font-bold text-green-800 mb-6 text-center">
        Chai aur Code
      </h1>
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden pr-32 py-6">
        <h1 className="text-2xl font-bold p-4">Manage Bundle</h1>
        <p className="px-4 pb-4 text-gray-600">
          Change orders of the products based on priority
        </p>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <ul className="p-4">
              {items.map((item, index) => (
                <SortableItem
                  key={item.id}
                  id={item.id}
                  thumbnail={item.thumbnail}
                  name={item.name}
                  price={item.price}
                  type={item.type}
                  index={index}
                  moveItem={moveItem}
                  deleteItem={deleteItem}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default CourseList;
