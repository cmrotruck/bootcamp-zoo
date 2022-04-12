import React from "react";
import Conversation from "../components/Conversation/Conversation";
import Cheetah from "../images/animals/cheetah.JPG";


const Donate = () => {
    return (
        <main>
            <Conversation
                breed="Cheetah"
                donations="$406,846"
                description="Population status is valnerable. Cheetahs are the most endangered cat in Africa, only an estimated 7,000-10,000 remain. Molecular genetic studies on free-ranging and captive cheetahs have shown that the species lacks genetic variation, probably due to past inbreeding. The consequences of such genetic uniformity have led to reproductive abnormalities, high infant mortality, and greater susceptibility to disease, causing the species to be less adaptable and more vulnerable to ecological and environmental changes."
                image={Cheetah}
                username="animallover"
                createdAt="4/4/22"
                commentBody="This is a test comment."
                postBody= "Cheetahs are so amazing!"
            />
        </main>
    );
};

export default Donate;