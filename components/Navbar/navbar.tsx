"use client"

import React from 'react';
import { Inter } from 'next/font/google'
import styles from './navbar.module.css'

export default function Navbar() {

    const [menu_toggle_state, set_menu_toggle_state] = React.useState(true);
    function click_menu_toggle() {
        set_menu_toggle_state(!menu_toggle_state);
    }
    const navbar_className = styles.navbar + " " + (menu_toggle_state ? "" : styles.show_navbar);
    const menu_toggle_className = styles.menu_toggle + " " + (menu_toggle_state ? "" : styles.menu_toggle_active);


    return (
        <>
            {/* <div className=" h-24 flex items-center justify-between p-5 bg-gradient-to-b from-rose-700"> */}
            <div className='fixed w-full bg-gradient-to-b from-zinc-400'>
                <div className="h-24 flex items-center justify-between p-5">
                    <div className="text-2xl" >STORY</div>
                    <nav className={navbar_className}>
                        <ul className={styles.nav_items}>
                            <li className={styles.nav_item}><a href="#" className={styles.nav_link}>HOME</a></li>
                            <li className={styles.nav_item}><a href="#" className={styles.nav_link}>ABOUT</a></li>
                            <li className={styles.nav_item}><a href="#" className={styles.nav_link}>STORY LIST</a></li>
                        </ul>
                    </nav>

                    <div className={menu_toggle_className} onClick={click_menu_toggle}>
                        <span className={styles.menu_toggle_center}></span>
                    </div>
                </div>
            </div>
        </>
    )
}
