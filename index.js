console.log('Welcome to project 5');

const data = [
    {
        name: "Shankal Das",
        age: 18,
        city: "Rahim yar Khan",
        language: "python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/med/men/23.jpg"
    },
    {
        name: "Rohit Das",
        age: 16,
        city: "Islamabad",
        language: "Node",
        framework: "Node.JS",
        image: "https://randomuser.me/api/portraits/med/men/24.jpg"
    },
    {
        name: "Nikkhil",
        age: 14,
        city: "Karachi",
        language: "C++",
        framework: "VS code",
        image: "https://randomuser.me/api/portraits/med/men/25.jpg"
    },
    {
        name: "Yash Anand",
        age: 22,
        city: "Lahore",
        language: "Java Script",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/med/men/26.jpg"
    }
]



// CV iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                {
                    value: profiles[nextIndex++],
                    done: false
                }
                :
                {
                    done: true
                }
        }
    };
}

const candidates = cvIterator(data);
nextCV();
// button listener
const next= document.getElementById("next");
next.addEventListener("click",nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image= document.getElementById("image");
    let profile= document.getElementById("profile");
    if(currentCandidate!=undefined){

    
    image.innerHTML = `<img width="190" height="190px" src="${currentCandidate.image}">`;
     profile.innerHTML = `<ul class="list-group">
     <li class="list-group-item">Name : ${currentCandidate.name}</li>
     <li class="list-group-item">Age : ${currentCandidate.age}</li>
     <li class="list-group-item">Lives in : ${currentCandidate.city}</li>
     <li class="list-group-item">Language : ${currentCandidate.language}</li>
     <li class="list-group-item">Framework : ${currentCandidate.framework}</li>
    
   </ul>`
    }else{
        alert("End of Candidates Application");
        window.location.reload();
    }
}
