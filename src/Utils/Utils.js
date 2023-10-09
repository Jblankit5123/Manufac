import wineData from '../Json/WineData.json';

const Gamma = (data) => {
    const calCulateGamma = ((data["Ash"] * data["Hue"]) / data["Magnesium"]).toFixed(3)
    return calCulateGamma;
};

const Mean = (data) => {
    const mean = (data.reduce((acc, val) => acc + parseFloat(val), 0) / data.length).toFixed(3);
    return mean
}

const Median = (data) => {
    const sortedData = data.sort((a, b) => a - b);
    const centerPart = Math.floor((sortedData?.length) / 2);
    let median;
    if ((sortedData?.length) % 2 === 0) {
        median = (
            ((parseFloat(sortedData[centerPart - 1]) + parseFloat(sortedData[centerPart])) / 2).toFixed(3)
        );
    } else {
        median = (parseFloat(sortedData[centerPart]).toFixed(3));
    }
    return median;
}

const Mode = (data) => {
    const countMap = {};
    let mode = null;
    let maxCount = 0;
    data?.map(val => {
        countMap[val] = (countMap[val] || 0) + 1;
    });
    for (const val in countMap) {
        if (countMap[val] > maxCount) {
            mode = parseFloat(val).toFixed(3);
            maxCount = countMap[val];
        }
    }
    return mode;
}

const classData = (data = [], isGamma = false) => {
    const obj = {};
    if (data?.length) {
        data?.map(item => {
            const alcohol = item["Alcohol"];
            if (!obj[alcohol]) {
                obj[alcohol] = [];
            }
            obj[alcohol].push(isGamma ? (Gamma(item)) : item["Flavanoids"]);
        });
    }
    return obj;
}

const displayData = (isGamma = false) => {
    const data = classData(wineData, isGamma);
    let obj = {};
    for (const alcohol in data) {
        obj[alcohol] = {
            mean: Mean(data[alcohol]),
            median: Median(data[alcohol]),
            mode: Mode(data[alcohol]),
        };
    }
    return (obj);
};

export { displayData }