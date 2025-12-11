
document.addEventListener("DOMContentLoaded", function() {


    // -----------------------
    // EDUCATORS SECTION
    // -----------------------
    const educators = [
        { 
            name: "Mrs. Jordan — 5th Grade Teacher",
            description: "I used to feel overwhelmed by constant emotional outbursts in my classroom. After introducing a Calm-Down Corner with visual breathing prompts, I saw an immediate difference. Students started self-advocating for breaks instead of melting down. We've had fewer conflicts, smoother transitions, and a more supportive atmosphere overall.",
            imagePath: "../assets/MrsJordan.jpeg"
        },
        { 
            name: "Mr. Alvarez — Middle School ELA",
            description: "My students struggled with misunderstandings that quickly escalated into arguments. Using the perspective-taking scenarios from this site helped them slow down and actually consider how their words land. Now, I hear them saying things like 'Let me rephrase that,' or 'What did you mean by that?' The maturity is real.",
            imagePath: "../assets/MrAlvarez.jpeg"
        },
        { 
            name: "Ms. Chen — 3rd Grade Teacher",
            description: "I thought my class was doing fine, but check-ins revealed that several students were coming in anxious or overwhelmed and just didn't know how to say it. Naming emotions each morning has built trust and opened up conversations I never would have known we needed to have.",
            imagePath: "../assets/MsChen.jpeg"
        },
        { 
            name: "Mr. Thompson — HS History Teacher",
            description: "My sophomores often shut down when discussions got heated, especially during debates or group projects. Introducing the emotional regulation routines—like the two-minute breathing reset—helped them regroup without feeling embarrassed. I’ve noticed stronger participation, more thoughtful dialogue, and a real sense of ownership over how they show up in class.",
            imagePath: "../assets/MrThompson.jpeg"
        }
    ];

    const educatorsGallery = document.getElementById("Educator-Profile");

    if (educatorsGallery) {
        educators.forEach(function(educator){
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card", "educator-card");

            const educatorName = document.createElement("h2");
            educatorName.textContent = educator.name;
            cardDiv.appendChild(educatorName);

            const educatorImage = document.createElement("img");
            educatorImage.setAttribute("src", educator.imagePath);
            educatorImage.setAttribute("alt", educator.name);
            cardDiv.appendChild(educatorImage);

            const educatorDescription = document.createElement("p");
            educatorDescription.textContent = educator.description;
            cardDiv.appendChild(educatorDescription);

            educatorsGallery.appendChild(cardDiv);
        });
    }

});

