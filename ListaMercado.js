//let itemList = []

let itemList = localStorage.getItem("item")
if (itemList) {
    itemList = itemList.split(",")
} else {
    itemList = []
}


function addItem() {
    let itemValue = document.getElementById("item").value
    if (itemValue.length > 0) {

        itemList.push(itemValue)

        localStorage.setItem("items", itemList)

        let html = ""

        for (let i = 0; i < itemList.length; i++) {
            html += `<div class="row">  <div class="col"> ${itemList[i]} <button class="btn btn-danger btn-sm" onclick="DeleteItem(${i})"> X </button> </div> </div>`
        }
        document.getElementById("showItemList").innerHTML = html

        document.getElementById("item").value = "";

    } else {
        alert("Debes llenar el campo")
    }
}


function getItemsfromlocalStorage() {
    itemList = localStorage.getItem("items")

    if (itemList) {
        itemList = itemList.split(",")
    } else {
        itemList = []
    }

    let html = ""
    for (let i = 0; i < itemList.length; i++) {
        html += `<div class="row">  <div class="col"> ${itemList[i]} <button class="btn btn-danger btn-sm" onclick="DeleteItem(${i})"> X </button>    </div> </div>`
    }
    document.getElementById("showItemList").innerHTML = html
}
getItemsfromlocalStorage()

function DeleteItem(item) {
    itemList.splice(item, 1);
    localStorage.setItem("items", itemList)
    let html = ""
    for (let i = 0; i < itemList.length; i++) {
        html += `<div class="row">  <div class="col"> ${itemList[i]} <button class="btn btn-danger btn-sm" onclick="DeleteItem(${i})"> X </button>    </div> </div>`
    }
    document.getElementById("showItemList").innerHTML = html

}