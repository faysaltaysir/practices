console.log(input.value);
        let list = document.createElement("li");
        let del = document.createElement("button");
        del.innerText = "Delete";
        del.classList.add("delete");
        list.innerText = input.value;
        ul.appendChild(list);
        list.append(del);