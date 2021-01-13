<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <preloader ref="preloader"></preloader>
        @guest
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow navbar-expand-lg">
            <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">{{ config('app.name', 'Laravel') }}</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
                data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainMenu">
                <ul class="navbar-nav ml-auto pl-2">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">{{ __('menu.login') }}</a>
                    </li>
                    @if (Route::has('register'))
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('register') }}">{{ __('menu.register') }}</a>
                    </li>
                    @endif
                </ul>
            </div>
        </nav>
        @else
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow navbar-expand-lg">
            <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">{{ config('app.name', 'Laravel') }}</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
                data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="dropdown ml-auto">
                <a class="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    {{ Auth::user()->name }}
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="/admin">{{ __('menu.admin_panel') }}</a>
                    <a class="dropdown-item" href="{{ route('logout') }}"
                        onclick="event.preventDefault(); document.getElementById('logout-form').submit();">{{ __('menu.exit') }}</a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </div>
            </div>
        </nav>
        @endguest
        @yield('content')
    </div>
</body>

</html>