<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Incluir el enrutador y los controladores
require_once __DIR__ . '/../app/core/Router.php';
require_once __DIR__ . '/../app/controllers/LibroController.php';
require_once __DIR__ . '/../app/controllers/AutorController.php';

$router = new Router();
$libroController = new LibroController();
$autorController = new AutorController();

// Definir las rutas de la API
$router->add('GET', '/api/libros', fn() => $libroController->index());
$router->add('GET', '/api/libros/:id', fn($id) => $libroController->show($id));
$router->add('POST', '/api/libros', fn() => $libroController->store());
$router->add('PUT', '/api/libros', fn() => $libroController->update());
$router->add('DELETE', '/api/libros', fn() => $libroController->destroy());

$router->add('GET', '/api/autores', fn() => $autorController->index());
$router->add('GET', '/api/autores/:id', fn($id) => $autorController->show($id));
$router->add('POST', '/api/autores', fn() => $autorController->store());
$router->add('PUT', '/api/autores', fn() => $autorController->update());
$router->add('DELETE', '/api/autores', fn() => $autorController->destroy());

// Obtener la URI solicitada
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$basePath = '/gestor_libros_autores_php/public';
if (strpos($uri, $basePath) === 0) {
    $uri = substr($uri, strlen($basePath));
}
if ($uri == '') {
    $uri = '/';
}

// Despachar la petición
$router->dispatch($_SERVER['REQUEST_METHOD'], $uri);
?>