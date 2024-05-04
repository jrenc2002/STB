import {defineStore} from "pinia";

const state = () => {
    return {
        // 选择项-就是已经点击选择上的选项
        pageChance: 0,
        // 侧边展开
        isDrawerState: false,
        

        
        
    }
}

/**
 * 提供可视窗口的公共状态
 */
export const useAppGlobal = defineStore('AppGlobal', {
    state,
    actions: {
        
        updatePageChance(newpageChance: number) {
            this.pageChance = newpageChance;
        },
        updateDrawerState(newDrawerState: boolean) {
            this.isDrawerState = newDrawerState;
        }
        
    },
});
