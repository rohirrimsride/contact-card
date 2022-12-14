import "./form.js";
import "./submit.js";

import "../css/index.css";
import { Tooltip, Toast, Popover } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import Covid from '../images/covid.png';

window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
    document.getElementById('covidThumbnail').src = Covid;
});

import { openDB, deleteDB, wrap, unwrap } from 'idb';

async function doDatabaseStuff() {
    const db = await openDB();
}
