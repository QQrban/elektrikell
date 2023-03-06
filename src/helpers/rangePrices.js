import moment from "moment";

export const rangePricesGenerator = (data, hourRange = 1,) => {
    if (data.length) {
        const timeStampNow = moment().unix();
        const futureData = data.filter(e => e.timestamp > timeStampNow)

        const hourRangeLocal = hourRange + 1;

        const rangePricez = []
        futureData.forEach((v, i, arr) => {
            const range = arr.slice(i, i + hourRangeLocal);
            if (range.length === hourRangeLocal) {
                let sum = 0;
                range.forEach(v => sum += v.price);
                rangePricez.push({ sum, i, timestamp: v.timestamp })
            }
        });

        rangePricez.sort((a, b) => a.sum - b.sum);
        return rangePricez;
    }
}