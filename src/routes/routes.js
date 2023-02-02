import { POKE_ROUTES } from "./modules/book-routes";
import { HOME_ROUTES } from "./modules/home-routes";
import { STUDENT_ROUTES } from "./modules/student-routes";

export const Routes = [
    ...HOME_ROUTES,
    ...POKE_ROUTES,
    ...STUDENT_ROUTES
]