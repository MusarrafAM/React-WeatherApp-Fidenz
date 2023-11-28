import colors  from "../constants/colours"; // Import from the constant file.

function getColorByIndex(index) {
    return colors[index % colors.length];
}

export default getColorByIndex;
