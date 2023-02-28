import i18n from "i18next";
import { CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionTypes } from "./languageActions";

export interface LanguageState {
    language: "en" | "zh",
    languageList: {
        name: string, code: string
    }[]
}

const defauleState: LanguageState = {
    language: "zh",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "English", code: "en" }
    ]
}

// 根据输入的state状态，用action来处理产生新状态
// 如果没有传入state参数，就使用defaultState
export default (state = defauleState, action: LanguageActionTypes) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            i18n.changeLanguage(action.payload)
            return { ...state, language: action.payload };
        default:
            return state
    }
} 