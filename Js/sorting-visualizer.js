let array = [];
let speed = 50;

function generateArray() {
    const size = document.getElementById("arraySize").value;
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
    displayArray();
}

function displayArray() {
    const arrayContainer = document.getElementById("arrayContainer");
    arrayContainer.innerHTML = ''; // Clear the container

    array.forEach(value => {
        const bar = document.createElement("div");
        bar.classList.add("array-bar");
        bar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(bar);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
    let bars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapBars(bars[j], bars[j + 1]);
            }

            await sleep(100 - speed);  // Control sorting speed

            bars[j].style.backgroundColor = "blue";
            bars[j + 1].style.backgroundColor = "blue";
        }
        bars[array.length - 1 - i].style.backgroundColor = "green";  // Mark sorted element
    }
    bars[0].style.backgroundColor = "green";  // Mark the first element sorted at the end
}

function swapBars(bar1, bar2) {
    let tempHeight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempHeight;
}

function startSorting() {
    const algorithm = document.getElementById("algorithmSelect").value;
    speed = document.getElementById("speedControl").value;

    switch (algorithm) {
        case "bubbleSort":
            bubbleSort();
            break;
        case "selectionSort":
            selectionSort();
            break;
        case "insertionSort":
            insertionSort();
            break;
        case "mergeSort":
            mergeSort();
            break;
        case "quickSort":
            quickSort();
            break;
        default:
            alert("Please select a valid sorting algorithm.");
    }
}

// Add other sorting algorithms similarly (selectionSort, insertionSort, mergeSort, quickSort)
