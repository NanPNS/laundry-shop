import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/MainPage.vue'; 
import HomePage from '@/components/HomePage.vue'; 
import LoginPage from '@/components/Login.vue';
import CreatePage from '@/components/Create.vue';
import CoinPayment from "@/components/CoinPayment.vue";
import WashingMachine from '@/components/WashingMachine.vue';
import DryMachine from '@/components/DryMachine.vue';
import PaymentA from "@/components/Payment.vue";
import TimerPage from "@/components/TimerPage.vue";
import UserPoints from '@/components/UserPoints.vue';
import NavBar from '@/components/NavBar.vue';
import PaymentB from '@/components/PaymentDry.vue';

const routes = [
  {
    path: '/', 
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/Login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/Create',
    name: 'CreatePage',
    component: CreatePage,
  },
  {
    path: '/Coin',
    name: 'CoinPayment',
    component: CoinPayment,
  },
  {
    path: '/Washing',
    name: 'WashingMachine',
    component: WashingMachine,
  },
  {
    path: '/Dryer',
    name: 'DryMachine',
    component: DryMachine,
  },
  { path: "/payment", 
    name: "Payment", 
    component: PaymentA,
  },
  { path: "/paymentDry", 
    name: "PaymentDry", 
    component: PaymentB,
  },
  { path: "/timer", 
    name: "TimerPage", 
    component: TimerPage, 
  },
  { path: "/user-points", 
    name: "UserPoints", 
    component: UserPoints, 
  },
  { path: "/Nav", 
    name: "NavBar", 
    component: NavBar, 
  },
  
  

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
