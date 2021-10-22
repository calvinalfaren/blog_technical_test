import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
        data: {
            breadcrumb: 'Dashboard',
            view: "admin"
        }
    },
    {
        path: 'user',
        loadChildren: 'app/pages/user/user.module#UserModule',
        data: {
            breadcrumb: 'User',
        }
    },
    {
        path: 'stripe',
        loadChildren: 'app/pages/stripe/stripe.module#StripeModule',
        data: {
            breadcrumb: 'Stripe',
        }
    },
    {
        path: 'gp',
        loadChildren: 'app/pages/gp/gp.module#GpModule',
        data: {
            breadcrumb: 'GP',
        }
    },
    {
        path: 'foodpanda',
        loadChildren: 'app/pages/foodpanda/foodpanda.module#FoodpandaModule',
        data: {
            breadcrumb: 'Foodpanda',
        }
    },
    {
      path: 'ubereats',
      loadChildren: 'app/pages/ubereats/ubereats.module#UbereatsModule',
      data: {
          breadcrumb: 'ubereats',
      }
    },
    {
        path: 'payment-option',
        loadChildren: 'app/pages/payment-option/payment-option.module#PaymentOptionModule',
        data: {
            breadcrumb: 'Payment Option',
        }
    },
    {
        path: 'order',
        loadChildren: 'app/pages/order/order.module#OrderModule',
        data: {
            breadcrumb: 'Order',
        }
    },
    {
        path: 'role',
        loadChildren: 'app/pages/role/role.module#RoleModule',
        data: {
            breadcrumb: 'Role',
        }
    },
    {
        path: 'merchant-organization',
        loadChildren: 'app/pages/merchant-organization/organization.module#OrganizationModule',
        data: {
            breadcrumb: 'Merchant Organization',
        }
    },
    {
        path: 'merchant-group',
        loadChildren: 'app/pages/merchant-group/group.module#GroupModule',
        data: {
            breadcrumb: 'Merchant Group',
        }
    },
    {
        path: 'merchant-restaurant',
        loadChildren: 'app/pages/merchant-restaurant/restaurant.module#RestaurantModule',
        data: {
            breadcrumb: 'Merchant Restaurant',
        }
    },
    {
        path: 'menu',
        loadChildren: 'app/pages/menu/menu.module#MenuModule',
        data: {
            breadcrumb: 'Menu'
        }
    },
    {
        path: 'menu-item',
        loadChildren: 'app/pages/menu-item/item.module#ItemModule',
        data: {
            breadcrumb: 'Item'
        }
    },
    {
        path: 'create-restaurant',
        loadChildren: 'app/pages/create-restaurant/create-restaurant.module#CreateRestaurantModule',
        data: {
            breadcrumb: 'restaurant'
        }
    },
    {
        path: 'edit-restaurant',
        loadChildren: 'app/pages/edit-restaurant/edit-restaurant.module#EditRestaurantModule',
        data: {
            breadcrumb: 'restaurant'
        }
    },
    {
        path: 'channel',
        loadChildren: 'app/pages/channel/channel.module#ChannelModule',
        data: {
            breadcrumb: 'channel'
        }
    },
    {
        path: 'country-list',
        loadChildren: 'app/pages/country-list/country-list.module#CountryListModule',
        data: {
            breadcrumb: 'Country List'
        }
    },
    {
        path: 'restaurant-settings',
        loadChildren: 'app/pages/restaurant-settings/restaurant-settings.module#RestaurantSettingsModule',
        data: {
            breadcrumb: 'Restaurant Settings'
        }
    },
    {
        path: 'foodpanda',
        loadChildren: 'app/pages/foodpanda/foodpanda.module#FoodpandaModule'
    },
    {
      path: 'ubereats',
      loadChildren: 'app/pages/ubereats/ubereats.module#UbereatsModule'
   },
    {
        path: 'qr-code',
        loadChildren: 'app/pages/qr-code/qr-code.module#QrCodeModule',
        data: {
            breadcrumb: 'QR Code'
        }
    },
    {
        path: 'online-platform',
        loadChildren: 'app/pages/online-platform/online-platform.module#OnlinePlatformModule',
        data: {
            breadcrumb: 'Online Platform'
        }
    },
    {
        path: 'level-menu',
        loadChildren: 'app/pages/level-menu/level-menu.module#LevelMenuModule',
        data: {
            breadcrumb: 'Level Menu'
        }
    },
    {
        path: 'platform-permission',
        loadChildren: 'app/pages/platform-permission/platform-permission.module#PlatformPermissionModule',
        data: {
            breadcrumb: 'Platform Permission'
        }
    },
    {
        path: 'search-restaurant',
        loadChildren: 'app/pages/merchant-restaurant/restaurant.module#RestaurantModule',
        data: {
            breadcrumb: 'Search Restaurant'
        }
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
