var allAFnsTestResult = [{"desc":"算法1：开奖号码加6，如大于33，则-33便是下一期的红球杀号","successRate":"27.98%","nearSuccess1":"70.11%","nearSuccess2":"94.68%","killRedNums":[1,2,9,18,19,28]},{"desc":"算法2：开奖号码-6，如<=0，则+33，然后再+3，便是下一期的红球杀号","successRate":"29.38%","nearSuccess1":"73.57%","nearSuccess2":"94.89%","killRedNums":[9,10,19,25,26,33]},{"desc":"算法4：开奖号码减去本期蓝球的绝对值作为下一期的开奖号码杀号","successRate":"27.77%","nearSuccess1":"71.61%","nearSuccess2":"94.32%","killRedNums":[9,10,19,25,26,33]},{"desc":"算法5：开奖号码减去当期尾数合值的拆分合值（如果差值相减为负数的话必须加上３３）作为下一期的开奖号码杀号","successRate":"25.66%","nearSuccess1":"69.49%","nearSuccess2":"93.29%","killRedNums":[3,4,13,19,20,27]},{"desc":"算法6：开奖号码减去本期和值的拆分合值（如果差值相减为负数的话必须加上３３）作为下一期的开奖号码杀号","successRate":"25.40%","nearSuccess1":"70.99%","nearSuccess2":"94.32%","killRedNums":[4,5,14,20,21,28]},{"desc":"算法7：开奖号码减去本期ＡＣ值的绝对值作为下一期的开奖号码杀号","successRate":"26.74%","nearSuccess1":"71.40%","nearSuccess2":"94.58%","killRedNums":[3,6,7,16,22,23]},{"desc":"算法8：当期开奖号码","successRate":"27.93%","nearSuccess1":"70.47%","nearSuccess2":"94.89%","killRedNums":[3,12,13,22,28,29]}]