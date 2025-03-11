const modalDiv = document.querySelector(".modal")
const modalBtn = document.querySelector(".modal-close-btn")
const modalForm = document.querySelector("#modal-form");
const modalText = document.querySelector("#modal-text")
const modalInner = document.querySelector("#modal-inner")
const declineBtn = document.querySelector("#decline-btn");
const modalChoiceBtns = document.querySelector(".modal-choice-btns")

//modal-div
setTimeout(()=>{
    modalDiv.style.display = 'inline';
},1500)

//modal-button
modalBtn.addEventListener("click",()=>{
    modalDiv.style.display = 'none';
})

//modal-form
modalForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(modalForm)
    const fullName = formData.get("fullname")

    modalText.innerHTML=`<div class="modal-inner-loading">
            <img src="loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>`;
    setTimeout(()=>{
        document.querySelector("#uploadText").textContent=`
        Making the sale....`
        neatMessage();
    },1500)
    function neatMessage(){
        setTimeout(()=>{
            modalInner.innerHTML=`
            <h2>Thanks <span class="modal-display-name">${fullName.toUpperCase()}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="pirate-laughing.gif">
            </div>`
            modalBtn.disabled = false;
        },1500)
    }
})

//decline-button
declineBtn.addEventListener('mouseover',()=>{
    modalChoiceBtns.classList.toggle('reverse');
})

