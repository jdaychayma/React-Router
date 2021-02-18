import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Add from './Add';
import FilterForm from "./FilterForm";

function NavBar({ handleAdd, handleFilter }) {
    return (
        <div className="mb-4 ">
            <Navbar expand="lg" fixed="top" className="container bg-dark" >
                <h1 >My Movie List App</h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-2">
                        <Add handleAdd={handleAdd} />
                    </Nav>
                    <FilterForm handleFilter={handleFilter} />
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}

export default NavBar
