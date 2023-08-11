import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Logo from "../assets/icon/ak.png";
import {
  Activity,
  ChevronDown,
  Flash,
  Lock,
  Scale,
  Server,
  TagUser,
} from "./Icons";

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const menuItems = [
    {
      title: "Profile",
      url: "https://www.facebook.com/",
    },
    {
      title: "Dashboard",
      url: "https://www.google.com/",
    },
    {
      title: "Activity",
      url: "https://www.facebook.com/",
    },
    {
      title: "System",
      url: "https://www.facebook.com/",
    },
    {
      title: "Deployments",
      url: "https://www.facebook.com/",
    },
    {
      title: "My Settings",
      url: "https://www.facebook.com/",
    },
    {
      title: "Analytics",
      url: "https://www.facebook.com/",
    },
    {
      title: "Team Settings",
      url: "https://www.facebook.com/",
    },
    {
      title: "Help & Feedback",
      url: "https://www.facebook.com/",
    },
    {
      title: "Log Out",
      url: "https://www.facebook.com/",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          srOnlyText={icons.scale}
          className="sm:hidden fixed top-[-285px] left-0 z-50"
          onAnimationStart={true}
        />
      </NavbarContent>
      

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src={Logo} alt="" width="20" hight="20" />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image src={Logo} alt="" width="20" hight="20" />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      

      <NavbarMenu className="mt-[20px] backdrop-blur-[10px] bg-[#b8a0a05e] w-full flex items-center z-50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default SideMenu;
