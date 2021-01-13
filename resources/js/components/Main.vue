<template>
    <div class="container-fluid">
        <div class="row">
            <nav
                id="sidebarMenu"
                class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse pt-3"
            >
                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <router-link to="/admin/products" class="nav-link">
                                <span data-feather="shopping-cart"></span>
                                Товары
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-white">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
