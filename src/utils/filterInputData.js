export default function filterInputData(input, category) {
    if (input === "" || input === "All") {
        return function setConditionToTrue() {
            return true;
        };
    }
    return function conditionToFilter(element) {
        return element[category] === input;
    };
}
