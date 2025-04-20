import { useState , useEffect } from "react";
import "./Scroll.css";

function Scroll () {
    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setVisible(true);
         } else {

            }
    }
}