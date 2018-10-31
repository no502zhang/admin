import { Routes } from '@angular/router';

export const moduleRoutes: Routes = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
    { path: 'users', loadChildren: './users/users.module#UsersModule' },
];