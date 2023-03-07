// File to save one response for the API so I can use it to hardcode if I need it
// and don't saturate the API call 

const fakedata = {
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "By what nickname is Jack Dawkins known in the Charles Dickens novel, &#039;Oliver Twist&#039;?",
            "correct_answer": "The Artful Dodger",
            "incorrect_answers": [
                "Fagin",
                "Bull&rsquo;s-eye",
                "Mr. Fang"
            ]
        },
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "J.K. Rowling completed &quot;Harry Potter and the Deathly Hallows&quot; in which hotel in Edinburgh, Scotland?",
            "correct_answer": "The Balmoral",
            "incorrect_answers": [
                "The Dunstane Hotel",
                "Hotel Novotel",
                "Sheraton Grand Hotel &amp; Spa"
            ]
        },
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The title of Adolf Hitler&#039;s autobiography &quot;Mein Kampf&quot; is what when translated to English?",
            "correct_answer": "My Struggle",
            "incorrect_answers": [
                "My Hatred",
                "My Sadness",
                "My Desire"
            ]
        },
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The book &quot;The Little Prince&quot; was written by...",
            "correct_answer": "Antoine de Saint-Exup&eacute;ry",
            "incorrect_answers": [
                "Miguel de Cervantes Saavedra",
                "Jane Austen",
                "F. Scott Fitzgerald"
            ]
        },
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In Michael Crichton&#039;s novel &quot;Jurassic Park&quot;, John Hammond meets his demise at the claws of which dinosaur?",
            "correct_answer": "Procompsognathus",
            "incorrect_answers": [
                "Dilophosaurus",
                "Tyrannosaurus Rex",
                "Velociraptor"
            ]
        },
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What book series published by Jim Butcher follows a wizard in modern day Chicago?",
            "correct_answer": "The Dresden Files",
            "incorrect_answers": [
                "A Hat in Time",
                "The Cinder Spires",
                "My Life as a Teenage Wizard"
            ]
        },
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What was the last message of the Dolphins in &quot;The Hitchhiker&#039;s Guide to the Galaxy&quot;?",
            "correct_answer": "&quot;So long, and thanks for all the fish.&quot;",
            "incorrect_answers": [
                "&quot;The answer is 42.&quot;",
                "&quot;Land of the brave.&quot;",
                "&quot;Goodbye cruel world!&quot;"
            ]
        },
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In Alice in Wonderland, what is the name of Alice&#039;s kitten?",
            "correct_answer": "Dinah",
            "incorrect_answers": [
                "Oscar",
                "Heath",
                "Smokey"
            ]
        },
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which novel by John Grisham was conceived on a road trip to Florida while thinking about stolen books with his wife?",
            "correct_answer": "Camino Island",
            "incorrect_answers": [
                "Rogue Lawyer",
                "Gray Mountain",
                "The Litigators"
            ]
        },
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who is the author of the series &quot;Malazan Book of the Fallen&quot;?",
            "correct_answer": "Steven Erikson",
            "incorrect_answers": [
                "Ian Cameron Esslemont",
                "George R. R. Martin",
                "J. R. R. Tolkien"
            ]
        }
    ]
}

export default fakedata;