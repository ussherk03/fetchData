let log = console.log;




async function getJSON(ID) {

    let output = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        
    let data = await output.json();

    log(data[ID]);

    let stringed = data[ID];

    let stringObj = stringed;
     

    /** EDIT page */
    let userID, id, title, yesCheck, noCheck, completed;
    userID = document.querySelector('#userID');
    id = document.querySelector('#id');
    title = document.querySelector('#title');
    yesCheck = document.querySelector('#yes');
    noCheck = document.querySelector('#no');

    let storeData = () => {
        userID.value = stringObj.userId;
        id.value = stringObj.id;
        title.value = stringObj.title;

        if (stringObj.completed === true) {
            yesCheck.checked = 'true';
            completed = 'true';

        } else {
            noCheck.checked = 'true';
            completed = 'false';
        }

        return {
            userID: userID.value,
            id: id.value,
            title: title.value,
            completed: completed,
        }

    }



    log(storeData());


    /** CONFIRM PAGE */
    let cID, cNum, cTitle, cCompleted;
    cID = document.querySelector('#c-ID');
    cNum = document.querySelector('#c-num');
    cTitle = document.querySelector('#c-title');

    cYes = document.querySelector('#c-yes');
    cNo = document.querySelector('#c-no');


    document.querySelector('.preview-bttn').addEventListener('click', () => {
        cID.textContent = userID.value;
        cNum.textContent = id.value;
        cTitle.textContent = title.value;

        cYes.checked = yesCheck.checked;
        cNo.checked = noCheck.checked;

    })


}


function storeID () {
    let ID = Number(document.querySelector('.select').value);

    getJSON(ID);
}




