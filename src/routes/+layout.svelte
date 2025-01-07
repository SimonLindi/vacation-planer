<script>
    // Keine zusätzliche Logik erforderlich
</script>

<style>
    .navbar-custom {
        background-color: #00274d; /* Dunkelblau */
    }

    .navbar-custom a {
        color: white;
    }

    .navbar-custom a:hover {
        color: #87CEEB; /* Helles Blau */
    }

    .content-container {
        margin-top: 5rem;
    }
</style>

<nav class="navbar navbar-expand-lg navbar-custom fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Vacation Planner</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/trips">Trips</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/countries">Countries</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/destinations">Destinations</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="content-container">
    <slot />
</div>
