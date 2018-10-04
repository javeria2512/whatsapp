
let buddyList = [  
    {
        name: "Tayyab Ali",
        imageURL: "img.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0346-3785342",
        message: "<span>bla bla bla bla bla bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>tayyabali@gmail.com",
        status: "Available",
        time: "today",
        check: "sent"
        

    },
    {
        name: "Amna",
        imageURL: "img.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0302-4559341",
        message: "<span>bla bla bla bla bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>amna124@gmail.com",
        status: "busy",
        time: "yesterday",
        check: ""
    },
    {
        name: "Arsal",
        imageURL: "boy5.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0344-6002300",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>arsal.ali@gmail.com",
        status: "no calls whatsapp only",
        time: "yesterday",
        check: "received"
    },
    {
        name: "sehrish",
        imageURL: "img.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0333-2765035",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>sehrishmnsoori@gmail.com",
        status: "at school",
        time: "yesterday",
        check: ""
    },
    {
        name: "faiz khan",
        imageURL: "boy4.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0311-6800321",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>faizakhan@gmail.com",
        status: "busy",
        time: "yesterday",
        check: "sent"
    },
    {
        name: "Hira",
        imageURL: "img.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0322-5982044",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>hira@gmail.com",
        status: "no calls whatsapp only",
        time: " 1min ago",
        check: "received"
    },
    {
        name: "Meower",
        imageURL: "img.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0349-4941390",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>meow@gmail.com",
        status: "no calls whatsapp only",
        time: "yesterday",
        check: "sent"
    },
    {
        name: "jenny",
        imageURL: "img.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0340-256332",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>jeennyy@gmail.com",
        status: "no calls whatsapp only",
        time: "1 week ago",
        check: "sent"
    },
    {
        name: "Shahid Kapoor",
        imageURL: "boy3.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0322-4962332",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>shahid@gmail.com",
        status: "no calls whatsapp only",
        time: "yesterday",
        check: "sent"
    },
    {
        name: "Amir Khan",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0346-3785342",
        imageURL: "boy2.jpg",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>amir91@gmail.com",
        status: "Available",
        time: "today",
        check: "received"
    },
    {
        name: "Aamir",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0314-6888842",
        imageURL: "boy.jpg",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>amir91@gmail.com",
        status: "Available",
        time: "today",
        check: "received"
    },
    {
        name: "Sajal",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0345-9456742",
        imageURL: "img.jpg",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>sajalumar91@gmail.com",
        status: "at shoot",
        time: "today",
        check: "received"
    }
]
    
 function initializer(){
     let check='';

    for (let i = 0; i < buddyList.length; i++){
        if (buddyList[i].check==="received"){
            check="<i class='fas fa-check-double'></i>";
                
        } else if (buddyList[i].check==="sent") {
            check="<i class='fas fa-check'></i>";

        } else  {
            check="<i class='fas fa-clock'></i>";
        }     
        let contactListEl = document.querySelector("#list-msg");

             contactListEl.innerHTML += ` <div id="main-container">
                                <div id="container" onclick="changeContent(${i})"> 
                                 <div class="person-image" 

                                    style="background-image:url('images/${buddyList[i].imageURL}')">
                                </div>
                                <div class="image-card>
                                    <div id="person-detail">   
                                        <h6 class="name">${buddyList[i].name}</h6>
                                    
                                    <div class="message-info">
                                   
                                        <p class="message">${check}${buddyList[i].message}</p>
                                    </div>
                                    </div>
                               
                                    <p class="last-seen">
                                        ${buddyList[i].time}
                                    </p>
                                </div>
                                </div> 
                                </div>`
    }
  
} 
function changeContent(friendIndex){
        document.querySelector("#details").style["display"] = "flex";
        document.querySelector(".direction").style["display"] = "none";
        document.querySelector("#images").style["background-image"] = `url(images/${buddyList[friendIndex].imageURL})`;
        document.querySelector(".card-title").innerHTML = buddyList[friendIndex].name;
        document.querySelector("#phone").innerHTML = buddyList[friendIndex].phoneNum;
        
        document.querySelector("#email").innerHTML = buddyList[friendIndex].emailAddress;
        document.querySelector(".card-status").innerHTML = buddyList[friendIndex].status;      
}