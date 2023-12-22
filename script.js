const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts',
    'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to sort the bands while ignoring common words
function stripCommonWords(bandName) {
    const commonWords = ['The', 'A', 'An'];
    const words = bandName.split(' ');
    return words.filter(word => !commonWords.includes(word)).join(' ');
}

// Sort the bands
const sortedBands = bands.sort((a, b) => {
    const bandA = stripCommonWords(a);
    const bandB = stripCommonWords(b);
    if (bandA < bandB) return -1;
    if (bandA > bandB) return 1;
    return 0;
});

// Create a list of sorted articles
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const listItem = document.createElement('li');
    listItem.textContent = band;
    bandList.appendChild(listItem);
});
