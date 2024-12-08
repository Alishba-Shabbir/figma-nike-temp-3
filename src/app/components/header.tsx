import Image from "next/image";
import logo from "@/app/public/logo.png"

import Link from "next/link"
import React from "react";
import { FaSearch  } from "react-icons/fa";
import {FaCartShopping } from "react-icons/fa6";
import {FaRegHeart } from "react-icons/fa6";

export default function Header() {
    return(
       <div>


         <div className="top-header">
          
          <div >
            <Image className="first-logo"
            src={logo}
            alt="logo"
            height={17.97}
            width={19.2}/>
          </div>
          <div className="top-buttons">
            <ul>
            <li>
        <Link href="/store">Find a Store</Link>
      </li>
      <li>
        <Link href="/help">Help </Link>
      </li>
      <li>
        <Link href="/join">Join Us</Link>
      </li>
      <li>
        <Link href="/sign-up">Sign Up</Link>
      </li>
            </ul>

          </div>

        </div>






 <div className="header">
    <div className="search-container">
      <input type="text" placeholder="What are you looking for?" />
      <button className="search-icon">
        <FaSearch />
      </button>

</div>

<button className="wishlist-icon">
        <FaRegHeart/>
      </button>

      <button className="cart-icon">
        <FaCartShopping/>
      </button> 
  </div> 



  
  


      





  {/* </div> */}
{/* </div> */}












       </div>
    )
}