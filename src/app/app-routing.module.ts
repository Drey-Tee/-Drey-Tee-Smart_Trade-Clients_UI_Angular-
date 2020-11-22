import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReportComponent } from './components/report/report.component';
import { TradeHistoryComponent } from './components/trade-history/trade-history.component';
import { TradesComponent } from './components/trades/trades.component';

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
// import { PortfolioComponent } from './portfolio/portfolio.component';

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "portfolio", component: PortfolioComponent },
      { path: "report", component: ReportComponent },
      { path: "trade-history", component: TradeHistoryComponent },
      { path: "trades", component: TradesComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  // { path: "", component: IndexComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "**", redirectTo: "admin/dashboard", pathMatch: "full" },
  { path: "", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
