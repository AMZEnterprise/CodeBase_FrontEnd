let Id = document.getElementById("Id"),
Firstname = document.getElementById("Firstname"),
Lastname = document.getElementById("Lastname"),
addBtn = document.getElementById("addBtn"),
deleteBtn = document.getElementById("deleteBtn"),
localStorageData = document.getElementById("localStorageData"),
itemsTable = document.getElementById("itemsTable");

let UsersArray = [];
let i;

window.addEventListener("load",function(){
    let isUsersArray = localStorage.getItem("UsersArr");
    if (isUsersArray){
        UsersArray =JSON.parse(isUsersArray);
        i =  UsersArray.length;
        for(let j = 0;j<UsersArray.length;j++){
            let tr = document.createElement("tr");
            let td1 = document.createElement("td"),
                td2=document.createElement("td");
            let str = UsersArray[j].split('-');
            td1.innerHTML = `${str[0]}`
            td2.innerHTML = `${str[1]} ${str[2]}`
            tr.append(td1);
            tr.append(td2);
            itemsTable.append(tr);
        }
    }else{
        i = 0;
    }
})

addBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(Id.value.toString().trim() == "" ||Firstname.value.toString().trim() == "" || Lastname.value.toString().trim() == ""){
        alert("Enter all fields data...");
    }
    else{
            UsersArray[i] = `${Id.value.toString().trim()}-${Firstname.value.toString().trim()}-${Lastname.value.toString().trim()}`
            localStorage.setItem("UsersArr",JSON.stringify(UsersArray));
            i++;
            let tr = document.createElement("tr");
            let td1 = document.createElement("td"),td2=document.createElement("td");
            td1.innerHTML = `${Id.value.toString().trim()}`
            td2.innerHTML = `${Firstname.value.toString().trim()} ${Lastname.value.toString().trim()}`
            tr.appendChild(td1);
            tr.appendChild(td2);
            itemsTable.appendChild(tr);
            
            Id.value = "";
            Firstname.value = "";
            Lastname.value = "";
    }

})


deleteBtn.addEventListener("click",function(e){
    e.preventDefault();

    let isUsersArray = localStorage.getItem("UsersArr");
    if (isUsersArray){
        UsersArray =JSON.parse(isUsersArray);
        if(UsersArray.length > 0){
            UsersArray.pop();
            localStorage.setItem("UsersArr",JSON.stringify(UsersArray));
            i--;
            itemsTable.innerHTML = "";
            for(let j = 0;j<UsersArray.length;j++){
                let tr = document.createElement("tr");
                let td1 = document.createElement("td"),
                    td2=document.createElement("td");
                let str = UsersArray[j].split('-');
                td1.innerHTML = `${str[0]}`
                td2.innerHTML = `${str[1]} ${str[2]}`
                tr.append(td1);
                tr.append(td2);
                itemsTable.append(tr);
            }
        }
        else{
            alert("All data were deleted...");
            i = 0;
        }

    }
})


