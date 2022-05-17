<?php
    include("./page_parts/session_verif.php")
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Page d'accueil</title>
    <link rel="stylesheet" href="./CSS/Style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<!-- tout les balises div et aside sont utile pour le css -->
<div class="home-container">
    <aside class="home-aside"></aside>
    <main class="home-main">
        <?php
            include("./page_parts/header_container.php");
            include("./page_parts/boutons_container.php");
        ?>
        <div class="texte">
            <h1>
                BIENVENUE SUR LE SITE DU FESTIV'UT
            </h1>
            <p>
                <b> Mais Jamy, c’est quoi le Festiv’UT?</b> </br>
                
                Le Festiv’UT c’est un festival de musique organisé par les étudiants de l’UTBM dans le but de faire la fête en extérieur et mettre sur le devant de la scène les étudiants musiciens ! <br> <br>
                
                <b>La date?</b><br>
                Le 12 mai 2022 à Belfort (le lieu sera communiqué plus tard, on vous garde la surprise !). <br> <br>
                
                Alors si tu as envie de faire profiter aux autres de tes talents musicaux, viens flex sur scène car on est à la recherche d’artistes de <b>QUALITÉ</b>. <br>
                
                Par contre, si tu n’es pas forcément talentueux avec la musique mais que tu as quand même envie de donner un coup de main, tu es le bienvenu! <br>
                
                Les clubs aussi sont les bienvenus et si vous voulez promouvoir vos activités au Festiv’UT n’hésitez pas à nous contacter. <br>
                
                Pour toutes questions et demandes, contactez-nous sur Instagram ! <br>
                
                A très vite pour de la joie et de la musique ! <br> <br>
                
                <b> L’équipe Festiv’UT 2022 </b>
            </p>
        </div>
        <?php
        include("./page_parts/footer.php");
        ?>
        </main>
    <aside class="home-aside"></aside>
</div>
</body>
</html>