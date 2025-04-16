"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-semibold text-[#a1633c] tracking-wide">
          MODEVA
        </div>

        <nav className="hidden md:flex space-x-6 text-sm text-gray-700 items-center">
          <div className="relative group">
            <button
              className="flex items-center gap-1"
              onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            >
              Catalog <ChevronDown size={16} />
            </button>
            {isCatalogOpen && (
              <div className="absolute top-8 left-0 bg-white border shadow-md w-40 z-10">
                <ul className="py-2 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Men
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Women
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Kids
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link href="#">Sale</Link>
          <Link href="#">New Arrival</Link>
          <Link href="#">About</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-4 py-1.5 border border-gray-300 rounded-full text-sm focus:outline-none"
            />
            <Search
              size={16}
              className="absolute left-2 top-2.5 text-gray-500"
            />
          </div>
          <User className="text-gray-700 cursor-pointer" />
          <ShoppingCart className="text-gray-700 cursor-pointer" />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <Search
            size={22}
            className="text-gray-700"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-4 py-2 w-full border border-gray-300 rounded-full text-sm focus:outline-none"
            />
            <Search size={16} className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-3">
          <div>
            <button
              className="flex items-center gap-1 text-sm text-gray-700 w-full"
              onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            >
              Catalog <ChevronDown size={16} />
            </button>
            {isCatalogOpen && (
              <ul className="pl-4 pt-2 space-y-1 text-sm text-gray-700">
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Men
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Women
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Kids
                </li>
              </ul>
            )}
          </div>
          <Link href="#" className="block text-sm text-gray-700">
            Sale
          </Link>
          <Link href="#" className="block text-sm text-gray-700">
            New Arrival
          </Link>
          <Link href="#" className="block text-sm text-gray-700">
            About
          </Link>
          <div className="flex items-center gap-3 pt-2 border-t">
            <User className="text-gray-700" />
            <ShoppingCart className="text-gray-700" />
          </div>
        </div>
      )}
    </header>
  );
}
