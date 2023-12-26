function calculerScore() {
    var score = 0;
    var resultatDiv = document.getElementById("resultat");
    var quizForm = document.getElementById("quizForm");

    var q1 = document.getElementById("q1").value.toLowerCase();
    if (q1 === "hypertext markup language") {
        score++;
    }

    var q2 = document.getElementById("q2").value;
    if (q2 === "php") {
        score++;
    }

    var q3 = document.getElementById("q3").value.toLowerCase();
    if (q3 === "cascading style sheets") {
        score++;
    }

    var q4 = document.getElementById("q4").value;
    if (q4 === "interactivite") {
        score++;
    }

    var q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === "sql") {
        score++;
    }
    resultatDiv.innerHTML = "<p> Votre score est : " + score + " / 5 </p>";
    resultatDiv.innerHTML += "<p> Réponses correctes :</p>";

    if (q1 === "hypertext markup language") {
        resultatDiv.innerHTML += "<p>1. Qu'est-ce que HTML signifie? - Correct</p>";
    } else {
        resultatDiv.innerHTML += "<p>1. Qu'est-ce que HTML signifie? - Incorrect</p>";
    }
    if (q2 === "php") {
        resultatDiv.innerHTML += "<p>2. Quel langage de programmation est souvent utilisé pour le développement web côté serveur? - Correct</p>";
    } else {
        resultatDiv.innerHTML += "<p>2. Quel langage de programmation est souvent utilisé pour le développement web côté serveur? - Incorrect</p>";
    }

    if (q3 === "cascading style sheets") {
        resultatDiv.innerHTML += "<p>3. Qu'est-ce que CSS signifie? - Correct</p>";
    } else {
        resultatDiv.innerHTML += "<p>3. Qu'est-ce que CSS signifie? - Incorrect</p>";
    }

    if (q4 === "interactivite") {
        resultatDiv.innerHTML += "<p>4. Quelle est la fonction principale de JavaScript? - Correct</p>";
    } else {
        resultatDiv.innerHTML += "<p>4. Quelle est la fonction principale de JavaScript? - Incorrect</p>";
    }

    if (q5 && q5.value === "sql") {
        resultatDiv.innerHTML += "<p>5. Quel langage est souvent utilisé pour la gestion de bases de données? - Correct</p>";
    } else {
        resultatDiv.innerHTML += "<p>5. Quel langage est souvent utilisé pour la gestion de bases de données? - Incorrect</p>";
    }
    quizForm.style.display = "none";
}
