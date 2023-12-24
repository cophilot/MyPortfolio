import { Routes } from '@angular/router';
import { DesktopAppComponent } from './desktop-app/desktop-app.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';

export const routes: Routes = [
	{
		path: 'desktop',
		component: DesktopAppComponent,
	},
	{
		path: 'desktop/force',
		component: DesktopAppComponent,
	},
	{
		path: 'mobile',
		component: MobileAppComponent,
	},
	{
		path: 'mobile/force',
		component: MobileAppComponent,
	},
	{
		path: '',
		component: DesktopAppComponent,
	},
];
