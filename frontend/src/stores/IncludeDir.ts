import {makeAutoObservable} from "mobx";
import {OpenIncludeDir} from "@/wailsjs/go/main/Api";

export default class IncludeDirStore {
    constructor() {
        console.log('init paths store')
        makeAutoObservable(this)

    }

    includeDirDrawerVisible = false;
    includeDirs: string[] = [];

}