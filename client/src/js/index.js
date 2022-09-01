import "./form.js";
import "./submit.js";
import { getDb, initdb, postDb } from './database';

import "../css/index.css";
import { Tooltip, Toast, Popover } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import Covid from '../images/covid.png';

window.addEventListener('load', function () {
    initdb();
    getDb();
    postDb('rohirrimsride', 'rohirrimsride@mail.com', 1234567890, 'Covid');
    getDb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
    document.getElementById('covidThumbnail').src = Covid;
});

