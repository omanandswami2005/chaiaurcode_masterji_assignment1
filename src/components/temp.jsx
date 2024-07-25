
import { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__",
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

const ItemType = "ITEM";

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
  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="flex justify-between items-center w-full border p-4 mb-2 rounded shadow"
    >
      <div className="flex items-center gap-4">
        <MdDragIndicator className="text-xl cursor-pointer" />
        <img src={thumbnail} alt={name} className="w-16 h-16 object-cover" />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p>{price}</p>
          <p>{type}</p>
        </div>
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span>Options</span>
        </MenuButton>
        <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
          <MenuItems className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="px-1 py-1">
              <MenuItem as="button" className="group flex items-center w-full px-2 py-2 text-sm" onClick={() => moveItem(index, index - 1)}>
                <FaArrowUp className="mr-3" /> Move Up
              </MenuItem>
              <MenuItem as="button" className="group flex items-center w-full px-2 py-2 text-sm" onClick={() => moveItem(index, index + 1)}>
                <FaArrowDown className="mr-3"  /> Move Down
              </MenuItem>
              <MenuItem
                as="button"
                className="group flex items-center w-full px-2 py-2 text-sm"
                onClick={() => deleteItem(id)}
              >
                <RiDeleteBinLine className="mr-3" /> Delete
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

const CourseList = () => {
  const [items, setItems] = useState(initialItems);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4">
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
      </div>
    </DndProvider>
  );
};

export default CourseList;
