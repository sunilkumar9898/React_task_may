import React, { useState } from 'react'
import { Button, Drawer } from "antd";

const Navbar = () => {
    const [open, setOpen] = useState(false);

        const userlogo = {
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-education-and-school-logo-design-template-vector-png-image_6644811.png",
    };

  const showDrawer = () => {
      setOpen(true);
  };

  const onClose = () => {
      setOpen(false);
    };

    const handleclick = () => {
        onClose();
    }
  return (
      <div>
          <div className="navbar" id="navbar">
              <div className="logo">
                  <img src={userlogo.image} alt="" />
              </div>
              <div className="nav_link">
                  <a className="cool-link"  href="#">Home</a>
                  <a className="cool-link" href="#">About</a>
                  <a className="cool-link" href="#">Contact</a>
                  <a className="cool-link" href="#">Service</a>
              </div>

              <div className="hemburger" type="primary" onClick={showDrawer}>
                  <span>&#9776;</span>
              </div>
              <Drawer onClose={onClose} open={open} >
                  <div className="nav_link_drawer">
                      <a href="#" onClick={handleclick}>Home</a>

                      <a href="#" onClick={handleclick}>
                          About
                      </a>
                      <a href="#" onClick={handleclick}>
                          Contact
                      </a>
                      <a href="#" onClick={handleclick}>
                          Service
                      </a>
                  </div>
              </Drawer>
          </div>
      </div>
  );
}

export default Navbar
