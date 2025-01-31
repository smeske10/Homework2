function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sam Meske, MS, MBA</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="./assets/reset.css" />
        <link rel="stylesheet" href="./assets/style.css" />
    </head>

    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top m-2">
        <a class="navbar-brand" href="index.html">
            <h1> SamMeske.com</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About Me</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        My Work
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item p-2" href="#blockchain">Blockchain</a>
                        <a class="dropdown-item p-2" href="#entrepreneurship">Entrepreneurship</a>
                        <a class="dropdown-item p-2" href="#healthcare">Healthcare</a>
                        <a class="dropdown-item p-2" href="#research">Research</a>
                        <a class="dropdown-item p-2" href="#cv">My CV</a>
                    </div>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>

    <body>
        <div class="container-fluid">
            <div class="container col-10 px-4 py-5">
                <div class="row g-lg-5 my-1 bg-light" style="width: 100%">
                    <div class="text-center">
                        <img src="${data.banner}" alt="Smart Contracts" style="width: 60%;">
                    </div>
                    <section class="lh-base mx-3">
                        <h1 class="h1 text-center" style="font-weight: bold;">${data.title}</h1><br>
                        <p>${data.overview}</p>
                        <h2 class="h2" style="font-weight: bold;"><br> ${data.section1title}</h2>
                        <p>${data.section1body}</p>
                        <h2 class="h2" style="font-weight: bold;"><br> How does this impact the legacy system?</h2>
                        <h2 class="h2" style="font-weight: bold;"><br> ${data.section2title}</h2>
                        <p>${data.section2body}</p>
                        <h2 class="h2" style="font-weight: bold;"><br> How does this impact the legacy system?</h2>
                        <h2 class="h2" style="font-weight: bold;"><br> ${data.section3title}</h2>
                        <p>${data.section3body}</p>
                        <h2 class="h2" style="font-weight: bold;"><br> How does this impact the legacy system?</h2>
                    </section>
                </div>
            </div>

        </div>
    </body>
    <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item mx-3">
                <a href="./index.html" style="color: black;">Home</a>
            </li>
            <li class="nav-item mx-3">
                <a href="./index.html" style="color: black;">About Me</a>
            </li>
            <li class="nav-item mx-3">
                <a href="./index.html" style="color: black;">Software Development</a>
            </li>
            <li class="nav-item mx-3">
                <a href="./index.html" style="color: black;">Blockchain</a>
            </li>
            <li class="nav-item mx-3">
                <a href="./index.html" style="color: black;">Healthcare</a>
            </li>
            <li class="nav-item mx-3">
                <a href="./index.html" style="color: black;">My CV</a>
            </li>
        </ul>
        <div class="text-center">
            <img style="width: 3%;" href="https://www.linkedin.com/in/sam-meske-ms-mba-735068139/"
                src="./assets/socialmedia/linkedin.jpg" alt="instagram">
            <a href="https://www.linkedin.com/in/sam-meske-ms-mba-735068139/"></a>

            <img style="width: 3%;" href="https://www.linkedin.com/in/sam-meske-ms-mba-735068139/"
                src="./assets/socialmedia/github.jpg" alt="instagram">
            <a href="https://github.com/smeske10"></a>

            <img style="width: 3%;" href="https://www.linkedin.com/in/sam-meske-ms-mba-735068139/"
                src="./assets/socialmedia/twitter.jpg" alt="instagram">
            <a href="instagram.com/sammeske"></a>

            <img style="width: 3%;" href="https://www.linkedin.com/in/sam-meske-ms-mba-735068139/"
                src="./assets/socialmedia/instagram.jpg" alt="instagram">
            <a href="instagram.com/sammeske"></a>

        </div><br><br>
        <p class="text-center text-muted">© 2022, Sam Meske</p>
    </footer>
    <script src="./js/bootstrap.js"></script>
    <script src="./js/generateHTML.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>

    </html>`;
}

module.exports = generateHTML;