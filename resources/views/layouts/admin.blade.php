<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Административная панель</title>
    <!-- Подключение Bootstrap CSS -->
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <!-- Навигационная панель -->
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="{{ route('admin.index') }}">
                                Dashboard <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <!-- Добавьте дополнительные ссылки на панель навигации -->
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Orders
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Products
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- Основное содержимое -->
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                @yield('content')
            </main>
        </div>
    </div>

    <!-- Опционально: Подключение JavaScript и Bootstrap JS -->
    <script src="{{ asset('js/bootstrap.bundle.min.js') }}"></script>
</body>
</html>
