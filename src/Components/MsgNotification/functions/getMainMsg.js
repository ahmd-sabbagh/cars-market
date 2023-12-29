import axios from "axios";
import { basedDomin } from "../../../Api/basedDomin";

export function getMainMsg () {
    axios.get(`${basedDomin}/`)
}