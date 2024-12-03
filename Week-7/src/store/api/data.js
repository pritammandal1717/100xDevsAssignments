import { atom } from "recoil";

export const nameAtom = atom({
    key: 'nameAtom',
    default: ''
});

export const gitUserAtom = atom({
    key: 'gitUserAtom',
    default: {},
})


