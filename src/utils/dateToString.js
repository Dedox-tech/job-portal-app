export default function dateToString(customDate) {
    const newDate = Date.parse(customDate);
    const NativeDate = new Date(newDate);
    return `${NativeDate.getDay()}/${
        NativeDate.getMonth() + 1
    }/${NativeDate.getFullYear()}`;
}
