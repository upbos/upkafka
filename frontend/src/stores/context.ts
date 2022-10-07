import {createContext} from "react";
import IncludeDirStore from "@/stores/IncludeDir";


export const includeDirStore = new IncludeDirStore();


export const context = createContext({includeDirStore});