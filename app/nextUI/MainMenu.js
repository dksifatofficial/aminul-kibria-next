'use client'
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ArrowDown } from "./icons/ArrowDown";

const MainMenu = () => {
  return (
    <div className="w-full mt-10 grid justify-center">
      <ButtonGroup
        className="w-full flex flex-wrap gap-x-4 gap-y-2"
        color="secondary"
      >
        <Dropdown>
          <DropdownTrigger className="flex">
            <Button
              className="text-white font-semibold bg-blue-600 rounded-[5px] py-1 px-4"
              variant="bordered"
            >
              Room Decor
              <ArrowDown />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            className=" bg-blue-200 rounded-[5px] py-2 px-2 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)]"
            aria-label="Static Actions"
          >
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="new"
            >
              Bedroom Decor
            </DropdownItem>
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="copy"
            >
              Kitchen Decor
            </DropdownItem>
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="edit"
            >
              Bathroom decor
            </DropdownItem>
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="delete"
            >
              LivingRoom Decor
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Button
          auto
          flat
          className="text-white font-semibold bg-blue-600 rounded-[5px] py-1 px-4"
        >
          Interior Design
        </Button>
        <Button
          auto
          flat
          className="text-white font-semibold bg-blue-600 rounded-[5px] py-1 px-4"
        >
          Wall Decor
        </Button>

        <Dropdown>
          <DropdownTrigger className="flex">
            <Button
              variant="bordered"
              className="text-white font-semibold bg-blue-600 rounded-[5px] py-1 px-4"
            >
              More Categories
              <ArrowDown />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            className=" bg-blue-200 rounded-[5px] py-2 px-2 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)]"
            aria-label="Static Actions"
          >
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="new"
            >
              Modern Home Decor
            </DropdownItem>
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="copy"
            >
              Rustic Home Decor
            </DropdownItem>
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="edit"
            >
              Scandinavian Decor
            </DropdownItem>
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="delete"
            >
              Bohemian Decor
            </DropdownItem>
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="copy"
            >
              Vintage Home Decor
            </DropdownItem>
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="edit"
            >
              Coastal Decor
            </DropdownItem>
            <DropdownItem
              className="text-black hover:text-white rounded-[5px] font-semibold py-1 px-4 hover:bg-blue-600"
              key="delete"
            >
              Electic Decor
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button
          auto
          flat
          className="text-white font-semibold bg-blue-600 rounded-[5px] py-1 px-4"
        >
          Farmhouse decor
        </Button>
        <Button
          auto
          flat
          className="text-white font-semibold bg-blue-600 rounded-[5px] py-1 px-4"
        >
          Minimalist decor
        </Button>
        <Button
          auto
          flat
          className="text-white font-semibold bg-blue-600 rounded-[5px] py-1 px-4"
        >
          DIY home decor
        </Button>
        <Button
          auto
          flat
          className="text-white font-semibold bg-blue-600 rounded-[5px] py-1 px-4"
        >
          Gadget
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default MainMenu;
