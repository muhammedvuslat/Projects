"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  FilmIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/AuthContext";
import { logOut } from "../auth/firebase";

const navigation = [{ name: "Home", href: "/" }];

const Navbar = () => {
  const { currentUser } = useLoginContext();
  const navigate = useNavigate();
  const [loginControl, setLoginControl] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLoginControl = async (e) => {
    e.preventDefault();
    if (currentUser) {
      await logOut();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="inset-x-0 top-0 z-50 border  sticky nav ">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <FilmIcon className="h-8 w-8 text-white" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="mr-20 flex flex-row gap-2 ">
            {currentUser ? <UserIcon className="h-6 w-6 text-white" /> : ""}

            <p className="text-sm/6 font-semibold text-white">
              {currentUser?.displayName}
            </p>
          </div>
          <a
            href="#"
            className="text-sm/6 font-semibold text-white"
            onClick={handleLoginControl}
          >
            {currentUser ? "Logout " : "Login"}{" "}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <FilmIcon className="h-8 w-8 text-pink-500" />{" "}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-50"
                  onClick={handleLoginControl}
                >
                  {currentUser ? "Logout " : "Login"}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
