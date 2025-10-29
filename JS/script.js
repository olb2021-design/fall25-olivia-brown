const lessons = [
    { 
        name: "Lesson 1",
        description: "Lesson 1 Description",
        imagePath: "/assets/lesson1.png",
        link: "cards-lesson1.html" 
    },
    { 
        name: "Lesson 2",
        description: "Lesson 2 Description",
        imagePath: "/assets/lesson2.png",
        link: "cards-lesson2.html"
    },
    { 
        name: "Lesson 3",
        description: "Lesson 3 Description",
        imagePath: "/assets/lesson3.png",
        link: "cards-lesson3.html" 
    },
    { 
        name: "Lesson 4",
        description: "Lesson 4 Description",
        imagePath: "/assets/lesson4.png",
        link: "cards-lesson4.html" 
    }, 
    { 
        name: "Lesson 5",
        description: "Lesson 5 Description",
        imagePath: "/assets/lesson5.png",
        link: "cards-lesson5.html" 
    },
    { 
        name: "Lesson 6",
        description: "Lesson 6 Description",
        imagePath: "/assets/lesson6.png",
        link: "cards-lesson6.html" 
    }
];


const lessonsGallery = document.getElementById("Lessons-Cards");

lessons.forEach(function(lesson){

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class","card");

    const lessonTitle = document.createElement("h2");
    lessonTitle.textContent = lesson.name;
    cardDiv.appendChild(lessonTitle);

    const lessonImage = document.createElement("img");
    lessonImage.setAttribute("src", lesson.imagePath);
    cardDiv.appendChild(lessonImage);

    const lessonDescription = document.createElement("p");
    lessonDescription.textContent = lesson.description
    cardDiv.appendChild(lessonDescription);

    const lessonLink = document.createElement("a");
    lessonLink.setAttribute("href", lesson.link);
    lessonLink.textContent ="Click here for details";
    cardDiv.appendChild(lessonLink);

    lessonsGallery.appendChild(cardDiv);

});